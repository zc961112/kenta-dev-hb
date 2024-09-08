import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return sessionStorage.getItem("token")//Cookies.get(TokenKey)
}

export function setToken(token) {
  //return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return sessionStorage.removeItem("token")
  //return Cookies.remove(TokenKey)
}
export function getRedirect() {
  //return sessionStorage.getItem('redirect')
}

export function setRedirect(redirect) {
  //return Cookies.set('redirect', redirect)
}
export function getUserId() {
  return sessionStorage.getItem('user_id')
}

export function setUserId(id) {
  //return Cookies.set('userId', id)
}

export function removeUserId() {
  return sessionStorage.removeItem('user_id')
}


export function getUserName() {
  return sessionStorage.getItem('user_name')
}

export function setUserName(name) {
  //return Cookies.set('userName', name)
}

export function removeUserName() {
  return sessionStorage.removeItem('user_name')
}

export function getMemberId() {
  return sessionStorage.getItem('user_id')
}

export function setMemberId(memberId) {
  return sessionStorage.setItem('user_id', user_id)
}

export function removeMemberId() {
  return sessionStorage.removeItem('user_id')
}
