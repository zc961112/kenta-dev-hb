import request from '@/utils/request'
import { encrypt } from '@/utils/jsencrypt'

// 登录方法
export function login(username, password) {
  // password = encrypt(password);
  const data = {
    username,
    password,
  }
  return request({
    url: '/loginByMail',
    headers: {
      isToken: false
    },
    method: 'post',
    data: data
  })
}


// google登录
export function googleLogin(params) {
  return request({
    url: '/auth-code',
    headers: {
      isToken: false
    },
    params,
    method: 'get',
  })
}

// 注册方法
export function register(data) {
  return request({
    url: '/register',
    headers: {
      isToken: false
    },
    method: 'post',
    data: data
  })
}

// 获取用户详细信息
export function getInfo() {
  return request({
    url: '/client/home/appGetInfo',
    method: 'get'
  })
}

// 退出方法
export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}

// 获取验证码
export function getCodeImg() {
  return request({
    url: '/captchaImage',
    headers: {
      isToken: false
    },
    method: 'get',
    timeout: 20000
  })
}


export function getMail(data) {
  return request({
    url: '/getMail',
    headers: {
      isToken: false
    },
    method: 'post',
    data,
  })
}

export function findPwdSendMail(data) {
  return request({
    url: '/findPwdSendMail',
    headers: {
      isToken: false
    },
    method: 'post',
    data,
  })
}


export function registerByMail(data) {
  return request({
    url: '/registerByMail',
    headers: {
      isToken: false
    },
    method: 'post',
    data,
  })
}

export function findPwdByMail(data) {
  return request({
    url: '/findPwdByMail',
    headers: {
      isToken: false
    },
    method: 'post',
    data,
  })
}