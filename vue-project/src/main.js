import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'		// store 추가
import mixins from './mixins'	// minxin 추가

createApp(App).use(router).use(store).mixin(mixins).mount('#app')

// app key 입력
// console.log(process.env)
window.Kakao.init(process.env.VUE_APP_KAKAO_KEY)