import Vue from 'vue'
import Router from 'vue-router'
import register from '../page/register.vue'
const home = resolve => require(['../page/home.vue'], resolve)
import kind from '../page/kind.vue'
import detail from '../page/detail.vue'
import user from '../page/user.vue'
import uaddress from '../component/uaddress.vue'
import uorders from '../component/uorders.vue'
import udetail from '../component/udetail.vue'
import order from '../page/order.vue'
import orderdetail from '../page/orderdetail.vue'
import cart from '../page/cart.vue'
import productAdmin from '../page/productAdmin.vue'
import umassage from '../page/umassage.vue'
import manager from '../page/manager.vue'
import morders from '../page/morders.vue'
import morderdetail from '../page/morderdetail.vue'
Vue.use(Router)
export default new Router( {
    // mode: 'history',
    routes:[
        {path:'/register',component:register,meta:{title:'注册'}},
        {path:'/', component:home,meta:{title:'首页'}},
        {path:'/search',component:kind},
        {path:'/detail/:id',name:'detail',component:detail,meta:{title:"商品详情"}},
        {path:'/kind/:kind',component:kind,meta:{title:"分类查看"}},
        {path:'/user/:uname',component:user,
            children:[
                {path:'',component:uorders,meta:{title:"个人中心"}},
                {path:'address',name:'address', component:uaddress,meta:{title:"地址管理"}},
                {path:'orders',name:'orders', component:uorders,meta:{title:"订单查看"}},
                {path:'userdetail',name:'udetail',component:udetail,meta:{title:"个人信息"}}
            ]},
        {path:'/order',name:'order',component:order,meta:{title:"确认订单"}},
        {path:'/orderdetail',name:'orderdetail',component:orderdetail,meta:{title:"查看订单"}},
        {path:'/cart',name:'cart',component:cart,meta:{title:"购物车"}},
        
        {path:'/manager',name:'manager',component:manager,meta:{title:"管理员界面"},children:[
            {path:'/productadmin',name:'productadmin',component:productAdmin,meta:{title:'商品管理'}},
            {path:'/morders',name:'morders',component:morders,meta:{title:"订单管理"}},
            {path:'/morderdetail',name:'morderdetail',component:morderdetail,meta:{title:"订单信息"}},
            {path:'/umassage',name:'umassage',component:umassage,meta:{title:"用户管理"}}
        ]},
        
        // {path:'/search',name:'/search',component:search}
    ]
})