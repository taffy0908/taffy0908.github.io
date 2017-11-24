import Vue from 'vue';
import Router from 'vue-router';
import AllPage from '@/components/AllPage';
import StoryPage from '@/components/StoryPage';
import TravelPage from '@/components/TravelPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'allPage',
      component: AllPage,
    },
    {
      path: '/travel',
      name: 'travelPage',
      component: TravelPage,
    },
    {
      path: '/story',
      name: 'storyPage',
      component: StoryPage,
    },
  ],
});
