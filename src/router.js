import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'quill',
            component: () =>
                import ('./views/quill.vue'),
            meta: {
                visible: true
            }
        },
        {
            path: '/tinymce',
            name: 'tinymce',
            component: () =>
                import ( /* webpackChunkName: "tinymce" */ './views/tinymce.vue'),
            meta: {
                visible: true
            }
        }
    ]
})