import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n';

// Import the translation files
import en from './locales/en.json';
import my from './locales/my.json';

const messages = { en, my };

// Create Vue I18n instance
const i18n = createI18n({
    locale: localStorage.getItem('language') || 'en',
    fallbackLocale: 'en',
    messages,
});

const app = createApp(App)

app.use(router)
app.use(i18n);

app.mount('#app')
