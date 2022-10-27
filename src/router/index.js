import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from '../views/ShopView.vue'
import MapView from '../views/MapView.vue'
import AjaxView from '../views/AjaxView.vue'
import AjaxView2 from '@/views/AjaxView2.vue'
import AjaxView3 from '@/views/AjaxView3.vue'
import TdxView from '../views/TdxView.vue'
import NotFound from '../views/NotFound.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    chName: '首頁',
    component: HomeView
  },
  {
    path: '/shop',
    path: '/shop/:productID(\\d+)',//正規表示法 裡面須為數字
    name: 'shop',
    chName: '商品頁',
    component: ShopView
  },
  {
    path: '/about',
    name: 'about',
    chName: '關於我',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/map',
    name: 'map',
    component: MapView
  },
  {
    path: '/ajax',
    name: 'ajax',
    component: AjaxView
  },
  {
    path: '/api2',
    name: 'api2',
    chName: '觀光api',
    component: AjaxView2
  },
  {
    path: '/api3',
    name: 'api3',
    component: AjaxView3
  },
  {
    path: '/tdx',
    name: 'tdx',
    component: TdxView
  },
  {
    path: '/:pathMatch(.*)*', name: '404', component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
