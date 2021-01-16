import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CreatePost from '../views/CreatePost.vue'
import Tag from '../views/Tag.vue'
import Post from '../views/Post.vue'
import Edit from '../views/Edit.vue'
import Delete from '../views/Delete.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/Create',
    name:'CreatePost',
    component:CreatePost
  },
  {
    path: '/tags/:tag',
    name: 'Tag',
    component: Tag
  },
  {
    path: '/post/:id',
    name: 'post',
    component: Post
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/delete/:id',
    name: 'delete',
    component: Delete
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
