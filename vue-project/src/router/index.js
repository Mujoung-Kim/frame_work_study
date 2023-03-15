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
    path: '/DataBindingList2',
    name: 'DataBindingList2',
    component: () => import(/* webpachChunkName: "DataBindingList2"*/ '../views/basic/binding/DataBindingList2.vue')
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
  },
  {
    path: '/test_event',
    name: 'test_event',
    component: () => import(/* webpachChunkName: "test_event"*/ '../views/basic/event/test_event.vue')
  },
  {
    path: '/NestedComponent',
    name: 'NestedComponent',
    component: () => import(/* webpachChunkName: "NestedComponent"*/ '../views/basic/components/NestedComponent.vue')
  },
  {
    path: '/ParentComponent',
    name: 'ParentComponent',
    component: () => import(/* webpachChunkName: "ParentComponent"*/ '../views/basic/components/ParentComponent.vue')
  },
  {
    path: '/ParentComponent2',
    name: 'ParentComponent2',
    component: () => import(/* webpachChunkName: "ParentComponent2"*/ '../views/basic/components/ParentComponent2.vue')
  },
  {
    path: '/ParentComponent3',
    name: 'ParentComponent3',
    component: () => import(/* webpachChunkName: "ParentComponent3"*/ '../views/basic/components/ParentComponent3.vue')
  },
  {
    path: '/ParentComponent4',
    name: 'ParentComponent4',
    component: () => import(/* webpachChunkName: "ParentComponent4"*/ '../views/basic/components/ParentComponent4.vue')
  },
  {
    path: '/ParentComponent5',
    name: 'ParentComponent5',
    component: () => import(/* webpachChunkName: "ParentComponent5"*/ '../views/basic/components/ParentComponent5.vue')
  },
  {
    path: '/SlotUseModalLayout',
    name: 'SlotUseModalLayout',
    component: () => import(/* webpachChunkName: "SlotUseModalLayout"*/ '../views/basic/components/SlotUseModalLayout.vue')
  },
  {
    path: '/ProvideInject',
    name: 'ProvideInject',
    component: () => import(/* webpachChunkName: "ProvideInject"*/ '../views/basic/components/ProvideInject.vue')
  },
  {
    path: '/TestComponents',
    name: 'TestComponents',
    component: () => import(/* webpachChunkName: "TestComponents"*/ '../views/basic/components/TestComponents.vue')
  },
  {
    path: '/CalculatorView',
    name: 'CalculatorView',
    component: () => import(/* webpachChunkName: "CalculatorView"*/ '../views/basic/composition/CalculatorView.vue')
  },
  {
    path: '/CompositionApi',
    name: 'CompositionApi',
    component: () => import(/* webpachChunkName: "CompositionApi"*/ '../views/basic/composition/CompositionApi.vue')
  },
  {
    path: '/CompositionApi2',
    name: 'CompositionApi2',
    component: () => import(/* webpachChunkName: "CompositionApi2"*/ '../views/basic/composition/CompositionApi2.vue')
  },
  {
    path: '/CompositionApi3',
    name: 'CompositionApi3',
    component: () => import(/* webpachChunkName: "CompositionApi3"*/ '../views/basic/composition/CompositionApi3.vue')
  },
  {
    path: '/CompositionApi4',
    name: 'CompositionApi4',
    component: () => import(/* webpachChunkName: "CompositionApi4"*/ '../views/basic/composition/CompositionApi4.vue')
  },
  {
    path: '/CompositionApiProvide',
    name: 'CompositionApiProvide',
    component: () => import(/* webpachChunkName: "CompositionApiProvide"*/ '../views/basic/composition/CompositionApiProvide.vue')
  },
  {
    path: '/MixinsView',
    name: 'MixinsView',
    component: () => import(/* webpachChunkName: "MixinsView"*/ '../views/basic/composition/MixinsView.vue')
  },
  {
    path: '/CustomDirective',
    name: 'CustomDirective',
    component: () => import(/* webpachChunkName: "CustomDirective"*/ '../views/basic/composition/CustomDirective.vue')
  },
  {
    path: '/StoreAccess',
    name: 'StoreAccess',
    component: () => import(/* webpachChunkName: "StoreAccess"*/ '../views/basic/vuex/StoreAccess.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
