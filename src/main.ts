import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as Icons from '@element-plus/icons-vue'
import 'virtual:windi.css'
import '@purge-icons/generated'

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')

// 注册Icons 全局组件
Object.keys(Icons).forEach((key: string) => {
  app.component(key, Icons[key as keyof typeof Icons])
})
