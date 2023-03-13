import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about", webpackPrefetch: true */ '../views/AboutView.vue')
  },
  {
    path: '/DataBinding',
    name: 'DataBinding',
    component: () => import(/* webpachChunkName: "DataBinding"*/ '../views/basic/binding/DataBinding.vue')
  },
  {
    path: '/DataBindingHtml',
    name: 'DataBindingHtml',
    component: () => import(/* webpachChunkName: "DataBindingHtml"*/ '../views/basic/binding/DataBindingHtml.vue')
  },
  {
    path: '/DataBindingNumber',
    name: 'DataBindingNumber',
    component: () => import(/* webpachChunkName: "DataBindingNumber"*/ '../views/basic/binding/DataBindingNumber.vue')
  },
  {
    path: '/DataBindingText',
    name: 'DataBindingText',
    component: () => import(/* webpachChunkName: "DataBindingText"*/ '../views/basic/binding/DataBindingText.vue')
  },
  {
    path: '/DataBindingTextarea',
    name: 'DataBindingTextarea',
    component: () => import(/* webpachChunkName: "DataBindingTextarea"*/ '../views/basic/binding/DataBindingTextarea.vue')
  },
  {
    path: '/DataBindingSelect',
    name: 'DataBindingSelect',
    component: () => import(/* webpachChunkName: "DataBindingSelect"*/ '../views/basic/binding/DataBindingSelect.vue')
  },
  {
    path: '/DataBindingCheckBox',
    name: 'DataBindingCheckBox',
    component: () => import(/* webpachChunkName: "DataBindingCheckBox"*/ '../views/basic/binding/DataBindingCheckBox.vue')
  },
  {
    path: '/DataBindingCheckBox2',
    name: 'DataBindingCheckBox2',
    component: () => import(/* webpachChunkName: "DataBindingCheckBox2"*/ '../views/basic/binding/DataBindingCheckBox2.vue')
  },
  {
    path: '/DataBindingRadio',
    name: 'DataBindingRadio',
    component: () => import(/* webpachChunkName: "DataBindingRadio"*/ '../views/basic/binding/DataBindingRadio.vue')
  },
  {
    path: '/DataBindingImg',
    name: 'DataBindingImg',
    component: () => import(/* webpachChunkName: "DataBindingImg"*/ '../views/basic/binding/DataBindingImg.vue')
  },
  {
    path: '/DataBindingButton',
    name: 'DataBindingButton',
    component: () => import(/* webpachChunkName: "DataBindingButton"*/ '../views/basic/binding/DataBindingButton.vue')
  },
  {
    path: '/DataBindingClass',
    name: 'DataBindingClass',
    component: () => import(/* webpachChunkName: "DataBindingClass"*/ '../views/basic/binding/DataBindingClass.vue')
  },
  {
    path: '/DataBindingClass2',
    name: 'DataBindingClass2',
    component: () => import(/* webpachChunkName: "DataBindingClass2"*/ '../views/basic/binding/DataBindingClass2.vue')
  },
  {
    path: '/DataBindingStyle',
    name: 'DataBindingStyle',
    component: () => import(/* webpachChunkName: "DataBindingStyle"*/ '../views/basic/binding/DataBindingStyle.vue')
  },
  {
    path: '/DataBindingList',
    name: 'DataBindingList',
    component: () => import(/* webpachChunkName: "DataBindingList"*/ '../views/basic/binding/DataBindingList.vue')
  },
  {
    path: '/DataBindingIf',
    name: 'DataBindingIf',
    component: () => import(/* webpachChunkName: "DataBindingIf"*/ '../views/basic/binding/DataBindingIf.vue')
  },
  {
    path: '/EventClick',
    name: 'EventClick',
    component: () => import(/* webpachChunkName: "EventClick"*/ '../views/basic/event/EventClick.vue')
  },
  {
    path: '/EventChange',
    name: 'EventChange',
    component: () => import(/* webpachChunkName: "EventChange"*/ '../views/basic/event/EventChange.vue')
  },
  {
    path: '/EventComputed',
    name: 'EventComputed',
    component: () => import(/* webpachChunkName: "EventComputed"*/ '../views/basic/event/EventComputed.vue')
  },
  {
    path: '/EventWatch',
    name: 'EventWatch',
    component: () => import(/* webpachChunkName: "EventWatch"*/ '../views/basic/event/EventWatch.vue')
  },
  {
    path: '/EventWatch2',
    name: 'EventWatch2',
    component: () => import(/* webpachChunkName: "EventWatch2"*/ '../views/basic/event/EventWatch2.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
