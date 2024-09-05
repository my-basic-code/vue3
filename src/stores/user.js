import { computed, reactive } from 'vue';
import { getToken, removeToken, setToken } from '@/utils/auth';

import { defineStore } from 'pinia';
import { resetRouter } from '@/router';
import { settings } from '@/config/settings';
import { userService } from '@/services/userService.js';

const { tokenName } = settings

export const useUserStore = defineStore('user', () => {
  const getDefaultState = () => {
    return {
      accessToken: getToken(),
      username: '',
      avatar: '',
      permissions: [],
    };
  };

  const state = reactive(getDefaultState());

  const getterAccessToken = computed(() => state.accessToken);
  const getterUserName = computed(() => state.username);
  const getterAvatar = computed(() => state.avatar);
  const getterPermissions = computed(() => state.permissions);

  const login = async (userInfo) => {
    const { username, password } = userInfo;
    try {
      const { data } = await userService.login({ username: username.trim(), password: password });
      const accessToken = data[tokenName]
      setToken(accessToken);
    } catch (error) {
      throw error;
    }
  }
  const getInfo = async () => {
    try {
      const response = await userService.getInfo();
      const { data } = response;
      if (!data) {
        return Promise.reject('Xác minh không thành công, vui lòng Đăng nhập lại.');
      }
      const { permissions, username, avatar } = data;
      if (permissions && username && Array.isArray(permissions)) {
        state.permissions = permissions
        state.username = username
        state.avatar = avatar
      } else {
        return Promise.reject('Xác minh không thành công, vui lòng Đăng nhập lại.')
      }
    } catch (error) {
      throw error;
    }
  }
  const logout = async () => {
    try {
      await userService.logout();
      resetToken();
      resetRouter();
    } catch (error) {
      throw error
    }
  }
  const resetToken = () => {
    removeToken() // must remove  token  first
    Object.assign(state, getDefaultState())
  }
  return {
    state,
    getterAccessToken,
    getterUserName,
    getterAvatar,
    getterPermissions,
    login,
    getInfo,
    logout,
    resetToken
  }
});