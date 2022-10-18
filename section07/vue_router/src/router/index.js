import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookListView from '../views/BookListView.vue'
import BookDetail from '@/components/BookDetail.vue'
import UserView from '../views/UserView.vue'
import UserProfile from '@/components/UserProfile.vue'
import UserPost from '@/components/UserPost.vue'
import HomeSub from '@/components/HomeSub.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default:HomeView,
      sub:HomeSub
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/book',
    name: 'BookList',
    component: BookListView
  },
  {
    path: '/book/:id',
    name: 'Book',
    component: BookDetail,
    props: route => route.params
  },
  {
    path: '/user',
    component: UserView,
    children:[
      {
        path: '/user/profile',
        component:UserProfile
      },
      {
        path: '/user/post',
        component:UserPost
      },
    ]
  },
  {
    path:'*',
    redirect:'/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  // console.log(to,from,next);
  next();
})

export default router
