import router from '@/router'
import store from '@/store' // 引入vuex store实例
import NProgress from 'nprogress' // 引入一份进度条插件
import 'nprogress/nprogress.css' // 引入进度条样式
const whiteList = ['/login', '/404'] // 定义白名单  所有不受权限控制的页面
// 路由前置守卫
router.beforeEach(async(to, from, next) => {
  // 有token
  if (store.getters.token) {
    // 跳转的页面是登录页面
    if (to.path === '/login') {
      next('/')
    } else {
      if (!store.getters.userId) {
        await store.dispatch('user/getuserInfo')
      }
      next()
    }
  } else {
    // 没有token
    // 是否位白名单
    // 在白名单中
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
  NProgress.done() // 手动强制关闭一次  为了解决 手动切换地址时  进度条的不关闭的问题
})

// 后置守卫
router.afterEach(() => {
  NProgress.done() // 关闭进度条
})
