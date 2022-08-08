import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView')
  },
  {
    path: '/manga',
    name: 'manga.index',
    component: () => import('@/views/Manga/IndexView'),
  },
  {
    path: '/manga/create',
    name: 'manga.create',
    component: () => import('@/views/Manga/CreateView')
  },
  {
    path: '/manga/:mangaSlug',
    name: 'manga.show',
    component: () => import('@/views/Manga/ShowView')
  },
  {
    path: '/manga/:mangaSlug/edit',
    name: 'manga.edit',
    component: () => import('@/views/Manga/EditView')
  },
  {
    path: '/manga/:mangaSlug/create',
    name: 'chapter.create',
    component: () => import('@/views/Chapter/CreateView')
  },
  {
    path: '/manga/:mangaSlug/:chapterId',
    name: 'chapter.show',
    component: () => import('@/views/Chapter/ShowView')
  },
  {
    path: '/manga/:mangaSlug/:chapterId/edit',
    name: 'chapter.edit',
    component: () => import('@/views/Chapter/EditView')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Auth/RegisterView'),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Auth/LoginView'),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/PageNotFound'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
