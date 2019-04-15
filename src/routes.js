import VueRouter from 'vue-router'
import Home from './components/Home'
import Input from './components/Input'
import Output from './components/Output'

export default new VueRouter({
    routes: [
        {
            path:'',
            component: Home
        },
        {
            path:'/input',
            component: Input
        },
        {
            path:'/output',
            component: Output
        }
    ],
    mode: 'history'
})