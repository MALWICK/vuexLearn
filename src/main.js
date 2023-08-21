import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import store from './Store/store'
const app = createApp(App)

/* createApp(App).mount('#app') */
/* Store.store */


app.use(store)
app.mount('#app')