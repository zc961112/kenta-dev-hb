import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  if (typeof window !== 'undefined') {
    return sessionStorage.getItem("token");
  } else {
    // 服务器端处理方式或返回一个默认值
    return null;
  }
}

export function setToken(token) {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem("token", token);
  } else {
    // 服务器端处理方式，例如使用 Cookies，或者其他的持久化方式
    // return Cookies.set(TokenKey, token);
  }
}

export function removeToken() {
  return sessionStorage.removeItem("token")
  //return Cookies.remove(TokenKey)
}
export function getRedirect() {
  //return sessionStorage.getItem('redirect')
}

export function setRedirect(redirect) {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('redirect', redirect);
  } else {
    // 在服务器端处理，例如使用 Cookies 或者其他方法
    // return Cookies.set('redirect', redirect);
  }
}

export function getUserId() {
  if (typeof window !== 'undefined') {
    return sessionStorage.getItem('user_id');
  } else {
    // 在服务器端返回 null 或者使用其他方式获取 user_id
    return null;
  }
}

export function setUserId(id) {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('user_id', id);
  } else {
    // 在服务器端处理，例如使用 Cookies 或者其他方法
    // return Cookies.set('userId', id);
  }
}
export function removeUserId() {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem('user_id');
  } else {
    // 在服务器端的处理方式，或者返回一个默认值
    // 你可以选择记录日志、抛出异常，或者简单地返回 null
    console.warn("Attempted to remove user_id in a non-browser environment.");
  }
}


export function getUserName() {
  if (typeof window !== 'undefined') {
    return sessionStorage.getItem('user_name');
  } else {
    // 在服务器端的处理方式，返回 null 或者其他默认值
    return null;
  }
}

export function setUserName(name) {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('user_name', name);
  } else {
    // 在服务器端的处理方式，例如使用 Cookies
    // return Cookies.set('userName', name);
  }
}

export function removeUserName() {
  if (typeof window !== 'undefined') {
    return sessionStorage.removeItem('user_name');
  } else {
    // 在服务器端不执行任何操作，或者记录日志以提醒在服务器端调用了此方法
    console.warn("Attempted to remove user_name in a non-browser environment.");
    return null;
  }
}

export function getMemberId() {
  if (typeof window !== 'undefined') {
    return sessionStorage.getItem('user_id');
  } else {
    // 在服务器端返回 null 或者其他默认值
    return null;
  }
}

export function setMemberId(memberId) {
  if (typeof window !== 'undefined') {
    return sessionStorage.setItem('user_id', memberId);
  } else {
    // 在服务器端可以使用 Cookies 或者其他持久化方法
    console.warn("Attempted to set user_id in a non-browser environment.");
    // return Cookies.set('user_id', memberId);
    return null;
  }
}


export function removeMemberId() {
  return sessionStorage.removeItem('user_id')
}
