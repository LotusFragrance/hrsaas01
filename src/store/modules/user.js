import { getToken, setToken, removeToken } from '@/utils/auth'
import { getUserInfo, login } from '@/api/user'
const state = {
  token: getToken() || null,
  userInfo: {}
}
// 修改数据
const mutations = {
  setToken(state, token) {
    state.token = token
    // 数据存到本地存储
    setToken(token)
  },
  removeToken(state) {
    state.token = null
    removeToken()
  },
  // 设置用户信息
  setUserInfo(state, data) {
    state.userInfo = data
  },
  // 删除用户信息
  removeUserInfo(state) {
    state.userInfo = {}
  }
}
const actions = {
  async login(context, data) {
    const result = await login(data)
    context.commit('setToken', result)
  },
  async getuserInfo(context) {
    const data = await getUserInfo()
    context.commit('setUserInfo', data)
    return data // 这里为什么要返回 为后面埋下伏笔
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}

