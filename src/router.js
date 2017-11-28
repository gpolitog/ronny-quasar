import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from './Auth'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),

  routes: [
    {
      path: '/login',
      component: load('Login')
    },
    {
      path: '/logout',
      component: load('Logout')
    },
    {
      path: '/',
      component: load('user/Layout'),
      beforeEnter: userAuth,
      children: [
        {
          path: 'apps',
          component: load('user/Apps')
        },
        {
          path: 'change-email',
          component: load('user/ChangeEmail')
        },
        {
          path: 'change-password',
          component: load('user/ChangePassword')
        },
        {
          path: '',
          redirect: 'apps'
        }
      ]
    },

    {
      path: '/admin/',
      component: load('admin/Layout'),
      beforeEnter: adminAuth,
      children: [
        {
          path: 'users',
          component: load('admin/Users')
        },
        {
          path: 'details/:id',
          component: load('admin/Details')
        },
        {
          path: '',
          redirect: 'users'
        }
      ]
    },

    // Always leave this last one
    { path: '*', component: load('Error404') } // Not found
  ]
})

function userAuth (from, to, next) {
  if (Auth.isLoggedIn()) {
    next()
  } else {
    next('/login')
  }
}

function adminAuth (from, to, next) {
  if (Auth.isLoggedIn() && Auth.hasRole('admin')) {
    next()
  } else {
    next('/')
  }
}
