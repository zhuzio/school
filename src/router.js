/*global Vue*/
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/view/index'
import tabFoot from '@/components/tabFooter/tabFoot'
import detail from '@/components/page/detail'
// import chatDetail from '@/components/chat/chatDetail'

import classMate from '@/components/view/class'
import chat from '@/components/view/chat'
import growthRecord from '@/components/view/growthRecord'
import my from '@/components/view/my'
import chatDetail from '@/components/chart/chatDetail'
import grow from '@/components/page/grow'
import addClass from '@/components/page/addClass'
import classDetail from '@/components/page/classDetail'
import classMessage from '@/components/page/classMessage'
Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'tabFoot',
      component: tabFoot
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },

     {
      path: '/chatDetail',
      name: 'chatDetail',
      component: chatDetail
    },
    {
      path: '/grow',
      name: 'grow',
      component: grow
    },
    {
      path: '/addClass',
      name: 'addClass',
      component: addClass
    },
     {
      path: '/classDetail',
      name: 'classDetail',
      component: classDetail
    },
    {
      path: '/classMessage',
      name: 'classMessage',
      component: classMessage
    }
  ]
})
