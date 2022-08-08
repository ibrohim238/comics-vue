import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import httpClient from '@/services/http';
import authFactory from '@/auth';
import initLogger from './plugins/initLogger';
import './assets/tailwind.css'

const errorLogger = initLogger();

authFactory({
    store,
    router,
    httpClient,
    errorLogger,
});

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
