import './bootstrap';
import { createApp, h } from 'vue'
import { createInertiaApp, Link, router } from '@inertiajs/vue3'
import { defineAsyncComponent } from 'vue'
import { ZiggyVue } from 'ziggy-js';
import { Ziggy } from './ziggy';


const AdminLayout = defineAsyncComponent(() => 
  import('./Layout/Admin/AdminLayout.vue')
)

const AuthLayout = defineAsyncComponent(() => 
  import('./Layout/Admin/AuthLayout.vue')
)


createInertiaApp({
  resolve:async name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    let page = await pages[`./Pages/${name}.vue`]

    if (name.startsWith('Admin/')) {
      page.default.layout = AdminLayout
    }

    if (name.startsWith('Admin/Auth')) {
      page.default.layout = AuthLayout
    }

    return page
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(ZiggyVue, Ziggy)
      .component('Link',Link)
      .mount(el)
  },
})