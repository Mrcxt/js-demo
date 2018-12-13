import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementUI from 'element-ui'
import VueQuillEditor from 'vue-quill-editor'
import tinymce from 'vue-tinymce-editor'


/* css */
import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'



/* install */
Vue.use(elementUI, {
    size: "mini"
})
Vue.use(VueQuillEditor)

Vue.component('tinymce', tinymce)


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')