import { getToken, setToken, removeToken } from '@/utils/auth'
import { login } from '@/api/user'
const state = {
  token: getToken() || null
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
  }
}
const actions = {
  async login(context, data) {
    const result = await login(data)
    context.commit('setToken', result)
  } }
export default {
  namespaced: true,
  state,
  mutations,
  actions
}

