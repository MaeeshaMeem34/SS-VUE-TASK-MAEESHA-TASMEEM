import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminList from '../views/AdminList.vue'
import StaffList from '../views/StaffList.vue'
import AddStaff from '../views/AddStaff.vue'
import EditStaff from '../views/EditStaff.vue'
import ViewStaff from '../views/ViewStaff.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/staff-list',
    name: 'staffs',
  
    component: StaffList
  },
  {
    path: '/admin-list',
    name: 'admins',
  
    component: AdminList
  },
  {
    path: '/staffs/add',
    name: 'addStaff',
  
    component: AddStaff
  },
  {
    path: '/staffs/edit/:id',
    name: 'editStaff',
  
    component: EditStaff
  },
  {
    path: '/staffs/view/:id',
    name: 'viewStaff',
  
    component: ViewStaff
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
