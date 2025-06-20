import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import chuqidabian from '@/views/modules/chuqidabian/list'
    import xiangmuleibie from '@/views/modules/xiangmuleibie/list'
    import xiangmuzhipai from '@/views/modules/xiangmuzhipai/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import zhuanjia from '@/views/modules/zhuanjia/list'
    import xiangmushenqing from '@/views/modules/xiangmushenqing/list'
    import zhongqidabian from '@/views/modules/zhongqidabian/list'
    import jiaoshi from '@/views/modules/jiaoshi/list'
    import gonggaoxinxi from '@/views/modules/gonggaoxinxi/list'
    import jietidabian from '@/views/modules/jietidabian/list'
    import jietipingjia from '@/views/modules/jietipingjia/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/chuqidabian',
        name: '初期答辩',
        component: chuqidabian
      }
      ,{
	path: '/xiangmuleibie',
        name: '项目类别',
        component: xiangmuleibie
      }
      ,{
	path: '/xiangmuzhipai',
        name: '项目指派',
        component: xiangmuzhipai
      }
      ,{
	path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
      ,{
	path: '/zhuanjia',
        name: '专家',
        component: zhuanjia
      }
      ,{
	path: '/xiangmushenqing',
        name: '项目申请',
        component: xiangmushenqing
      }
      ,{
	path: '/zhongqidabian',
        name: '中期答辩',
        component: zhongqidabian
      }
      ,{
	path: '/jiaoshi',
        name: '教师',
        component: jiaoshi
      }
      ,{
	path: '/gonggaoxinxi',
        name: '公告信息',
        component: gonggaoxinxi
      }
      ,{
	path: '/jietidabian',
        name: '结题答辩',
        component: jietidabian
      }
      ,{
	path: '/jietipingjia',
        name: '结题评价',
        component: jietipingjia
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
