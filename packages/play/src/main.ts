import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import FontElement from 'font-element'

createApp(App)
    .use(FontElement)
    .mount('#app')
