import Vue from 'vue'
import Router from 'vue-router'
import { routers, base } from './config'

Vue.use(Router)


/**
 * [代码参考地址： https://blog.csdn.net/qq_43258252/article/details/86689525]
 * @type {Array}
 */
let route = []
routers.map(v => {
  v.child.map(k => {
    if (k.url) {
      return route.push({
        path: `${base}admin${k.url}`,
        component: () => import(`../components${k.url}.vue`)
      })
    }
    if (k.child) {
      k.child.map(j => {
        route.push({
          path: `${base}admin${j.url}`,
          component: () => import(`../components${j.url}.vue`)
        })
      })
    }
  })
})

let adminRoute = [{
    path: `${base}login`,
    component: () => import('../pages/login/index.vue')
  },
  {
    path: `${base}admin`,
    component: () => import('../pages/admin.vue'),
    children: route
  }
]


// export default new Router({
//   mode: 'history',
//   routes: adminRoute
// })
const router = new Router({
  mode: 'history',
  routes: adminRoute
})

/*// 全局路由守卫
router.beforeEach((to, from, next) => {
  const nextRoute = [] // 需要登录的页面
  let isLogin = window.sessionStorage.getItem('isLogin')  // 判断是否登录，本地存储有用户数据则视为已经登录
  // 未登录状态；当路由到 nextRoute 指定页时，跳转至 LoginPage
  if (nextRoute.indexOf(to.name) >= 0) { // 检测是否登录的页面
    console.log("nextRoute.index ... ")
    if (!isLogin) { // 如果未登录（本地存储无用户数据），并且要跳到登录页面
      console.log("用户未登录，拦截调整登录页...")
      router.push({
        name: 'login',
        params: {redirect: to.fullPath}  
      })
    }
  }
  // 已登录状态；当路由到 LoginPage 时，跳转至 Home
  if (to.name === 'login') {
    if (isLogin) {
    console.log("用户已登录，直接跳转至首页...")
      next('/')
      return
    }
  }
  next() // 必须使用 next ,执行效果依赖 next 方法的调用参数
})*/


export default router