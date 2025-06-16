import { createRouter, createWebHistory } from 'vue-router';
import CoachDetails from './pages/coaches/CoachDetails.vue';
import CoachList from './pages/coaches/CoacheList.vue'; 
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoache.vue';
import RequestsReceive from './pages/requests/RequestsReceive.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachList },
    {
      path: '/coaches/:id',
      component: CoachDetails,
      props:true,
      children: [
        { path: 'contact', component: ContactCoach }
      ]
    },
    { path: '/register', component: CoachRegistration },
    { path: '/requests', component: RequestsReceive },
    { path: '/:notFound(.*)', component: NotFound } 
  ]
});

export default router;
