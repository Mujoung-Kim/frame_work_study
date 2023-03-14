import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'	// minxin 추가

createApp(App).use(router).mixin(mixins).mount('#app')
