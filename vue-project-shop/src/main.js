import { createApp } from 'vue'
// import { createApp, Vue } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
// import axios from 'axios'

// Vue.config.productionTip = false
// Vue.prototype.$http = axios

createApp(App).use(router).mixin(mixins).use(store).use(VueSweetalert2).mount('#app')

window.Kakao.init(process.env.VUE_APP_KAKAO_KEY)
