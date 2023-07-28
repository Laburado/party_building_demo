/**
 * 状态管理
 */
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'

import { createApp } from 'vue'

//引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//ant-design-vue
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

//echarts
import eCharts from 'vue-echarts'
import 'echarts'

//样式
import '@/assets/scss/global.scss'
import '@/assets/fonts/fonts.scss'

import App from './App.vue'

//路由
import { getRouter } from './router'

createApp(App)
    .use(ElementPlus)
    .use(Antd)
    // 使用pinia代替vuex缓存
    .use(createPinia().use(piniaPluginPersist))
    .use(getRouter())
    .component('eCharts',eCharts)
    .mount('#app')

