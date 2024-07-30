import { createApp } from 'vue'
import App from './App.vue'

import FontElement from 'font-element'
import 'font-element/dist/index.css'

createApp(App)
    .use(FontElement)
    .mount('#app')
