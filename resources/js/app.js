import './bootstrap';
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { defineAsyncComponent } from 'vue'


const AdminLayout = defineAsyncComponent(() => 
  import('./Layout/Admin/AdminLayout.vue')
)


createInertiaApp({
  resolve:async name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    let page = await pages[`./Pages/${name}.vue`]

    if (name.startsWith('Admin/')) {
      page.default.layout = AdminLayout
    }

    return page
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el)
  },
})