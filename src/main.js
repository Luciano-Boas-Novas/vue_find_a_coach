import { createApp } from 'vue';
import App from '../App.vue';
import Router from './router.js';
import { createPinia } from 'pinia'; 
import BaseBadge from './ui/BaseBadge.vue';
import BaseButton from './ui/BaseButton.vue';
import BaseCard from './ui/BaseCard.vue';

const app = createApp(App)
const pinia = createPinia(); 
app.use(Router);
app.use(pinia);
app.component('base-badge',BaseCard); 
app.component('base-button',BaseButton);
app.component('base-card',BaseBadge);
app.mount('#app');
