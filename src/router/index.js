import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home'),
  },
  {
    path: '/stories',
    name: 'stories',
    props: true,
    component: () => import('@/views/Stories'),
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('@/views/Auth'),
  },
  {
    path: '/profile',
    component: () => import('@/views/Profile'),
    children: [
      {
        path: '',
        redirect: { name: 'profile_repos' },
      },
      {
        path: 'repos',
        name: 'profile_repos',
        component: () => import('@/views/Profile/MyRepos'),
      },
      {
        path: 'follows',
        name: 'profile_follows',
        component: () => import('@/views/Profile/MyFollows'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
