import { createApp } from 'vue';
import { store } from './store';
import { i18n } from './locales/i18n';
import { router } from './router';
import App from './App.vue';
import { makeServer } from './server';
import './assets/css/index.css';

const app = createApp(App);

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

app.use(store);
app.use(router);
app.use(i18n);

// router.isReady().then(() => app.mount('#app'));
app.mount('#app');
