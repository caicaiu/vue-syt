import {createApp} from 'vue'
import '@/style/rest.scss'
import App from '@/App.vue'
import HospitalTop from '@/components/hospital_top/index.vue'
import HospitalBottom from '@/components/hospital_bottom/index.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from "./router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

var app = createApp(App);
app.component('HospitalTop', HospitalTop)
app.component('HospitalBottom', HospitalBottom)
app.use(router)
app.use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.mount('#app')

