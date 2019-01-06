import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import Home from '../components/home/home.vue'
import Index from '../components/index/index.vue'
import Example from '../components/example/example.vue'
// viewport chunk added to main chunk, not in dynamic docs chunks
import '../components/viewport/viewport.vue'

Vue.use(Router)

const Children = [
  {
    path: '',
    component: Index
  },
  {
    path: 'example',
    component: Example
  }
].concat(routes['zh-CN'])

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: Children
    }
  ]
})
