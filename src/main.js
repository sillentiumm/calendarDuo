import { createApp } from 'vue'
import './style.css'
import store from './store/index.js'
import router from './router/router.js'
import App from './App.vue'
import './firebase.js'


const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app')

