import { createRouter, createWebHistory } from 'vue-router';
import CoachDetails from './pages/coaches/CoachDetails.vue';
import CoacheList from './pages/coaches/CoacheList.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCoache from './pages/requests/ContactCoache.vue';
import RequestsReceive from './pages/requests/RequestsReceive.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes:[
    {path: '/', redirect: '/coaches'},
  { path: '/coaches', component: CoacheList },
  { path: '/coaches/:id', component: CoachDetails, children: [
    {path: 'contact', component:ContactCoache},
  ]},
  {path: '/register', component: CoachRegistration},
  {path: '/requests' ,component: RequestsReceive},
  {path: '/:notFound(.*)', coomponent: NotFound}]
});
export default router;
