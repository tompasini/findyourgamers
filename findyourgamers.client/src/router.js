import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  },
  {
    path: '/account/:id',
    name: 'ActiveAccount',
    component: loadPage('ActiveAccountPage'),
    beforeEnter: authGuard
  },
  {
    path: '/friendrequests',
    name: 'FriendRequests',
    component: loadPage('FriendRequestsPage'),
    beforeEnter: authGuard
  },
  {
    path: '/myfriends',
    name: 'MyFriends',
    component: loadPage('MyFriendsPage'),
    beforeEnter: authGuard
  }
]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router
