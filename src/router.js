import { createRouter } from "vue-router";

const router = createRouter({

routes: [
    {path:'/coaches', component: CoacheList, children: [
            {
              name: 'coachs-team',
              path: ':coachId', 
              component: CoachDetails,
              props: true,
            },
          ],},
],


});