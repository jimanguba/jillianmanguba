import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import VueWriter from "vue-writer";
import type { Plugin } from 'vue';

const app = createApp(App);

app.use(VueWriter as unknown as Plugin);
app.use(router);

app.mount('#app');
