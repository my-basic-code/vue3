import { computed, reactive } from 'vue';
import { getToken, removeToken, setToken } from '@/utils/auth';

import { defineStore } from 'pinia';
import { resetRouter } from '@/router';
import { userService } from '@/services/userService.js';

export const useUserStore = defineStore('user', () => {
  const getDefaultState = () => {
    return {
      token: getToken(),
      name: '',
      avatar: ''
    };
  };

  const state = reactive(getDefaultState());

  const getterToken = computed(() => state.token);
  const getterName = computed(() => state.name);
  const getterAvatar = computed(() => state.avatar);

  const login = async (userInfo) => {
    const { username, password } = userInfo;
    try {
      const response = await userService.login({ username: username.trim(), password: password });
      // const { data } = response;
      // state.token = data.accessToken;
      // setToken(data.accessToken);
      state.token = response.accessToken;
      setToken(response.accessToken);
    } catch (error) {
      throw error;
    }
  }
  const getInfo = async () => {
    try {
      // const response = await userService.getInfo(state.token);
      const response = await userService.getInfo();
      const { data } = response;
      if (!data) {
        return Promise.reject('Verification failed, please Login again.');
      }
      const { username, thumbnail } = data;
      state.name = username
      state.avatar = thumbnail
    } catch (error) {
      throw error;
    }
  }
  const logout = async () => {
    try {
      // await userService.logout(state.token);
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
    getterToken,
    getterName,
    getterAvatar,
    login,
    getInfo,
    logout,
    resetToken
  }
});