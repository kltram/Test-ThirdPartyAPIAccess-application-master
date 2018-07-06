import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ThirdAPI from '@/components/ThirdAPI'
import RestCall from '@/components/RestCall.vue'
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/ThirdAPI',
      name: 'ThirdAPI',
      component: ThirdAPI
    },
    {
      path: '/RestCall',
      name: 'RestCall',
      component: RestCall
    },
    {
      path:'/404page',
      component: PageNotFound
    },
    {
      path: '*',
      redirect:'/404page'
    }
  ]
});



