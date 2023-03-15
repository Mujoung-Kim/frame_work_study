import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'		// store 추가
import mixins from './mixins'	// minxin 추가

createApp(App).use(router).use(store).mixin(mixins).mount('#app')