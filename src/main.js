import { createApp } from 'vue';
import App from '../App.vue';
import Router from './router.js';
import { createPinia } from 'pinia'; 


const app = createApp(App)
const pinia = createPinia(); 
app.use(Router);
app.use(pinia); 
app.mount('#app');
