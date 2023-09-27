import Cookies from 'js-cookie'

const TokenKey = 'token'

export function getToken() {
  console.log('getToken');
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  console.log('setToken');
  return Cookies.set(TokenKey, token, { expires: 1 })
}

export function removeToken() {
  console.log('removeToken');
  return Cookies.remove(TokenKey)
}