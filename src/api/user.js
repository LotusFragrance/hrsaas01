import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}

// 获取用户基本资料
export function getUserInfo() {
  return request({
    url: '/sys/profile',
    method: 'POST'
  })
}

export function logout() {

}
