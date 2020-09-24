import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";
import "vant/lib/index.css";
import "./assets/global.scss";
import axios from "axios";
import VueClipboards from "vue-clipboard2";
import NProgress from "nprogress";
import "nprogress/nprogress.css"; // nprogress样式文件
import uweb from "vue-uweb"; //友盟插件
import { Toast } from "vant";
import "@babel/polyfill"; //css样式兼容性

import "./assets/indexcss/aaa.css"
import "./assets/indexcss/bbb.css"
import "./assets/indexcss/ccc.css"
import "./assets/indexcss/ddd.css"
import "./assets/indexcss/eee.css"

Vue.config.productionTip = false;
Vue.use(Vant);
Vue.use(Toast);
Vue.use(VueClipboards);
Vue.use(uweb, process.env.VUE_APP_UWEB_ID);

// axios.defaults.timeout = 5000 // 请求超时
// axios.defaults.baseURL = process.env.VUE_APP_BASE_API //'/host'//'/agent'//process.env.VUE_APP_BASE_API
// http request 拦截器
axios.interceptors.request.use(
  config => {
    let token = sessionStorage.token
    let token2 = sessionStorage.token2
    if (token) {
      config.headers["token"] = token;
    }

    if (!config.headers.Authorization && token2) {
      config.headers.Authorization = "Bearer " + token2;
    }

    let time = new Date().getTime() + "";
    config.headers["timestamp"] = time.substring(0, 10);
    config.headers["X-HTTP-Method-Override"] = config.method;
    config.headers["Access-Control-Allow-Headers"] = "*";
    if (!config.headers['content-type']) {
      config.headers["content-type"] = "application/json; charset=utf-8";
    }
    return config
  },
  err => {
    return Promise.reject(err);
  }
);
// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log("接口报错：", error.response || error)
    if (error.response.status == 400) {
      switch (error.response.data.code) {
        case 80000:
          // 返回 401 (未授权) 清除 token 并跳转到登录页面
          localStorage.removeItem('token')
          // Toast('缺少参数,或参数格式有误')
          Toast(error.response.data.msg);
          // router.push({
          //   path: 'home',
          //   query: {
          //     redirect: router.currentRoute.fullPath
          //   }
          // })
          break;
        case 80001:
          // Toast('参数错误')
          Toast(error.response.data.msg);
          break;
        case 80002:
          // Toast('参数校验失败')
          Toast(error.response.data.msg)
          break;
        case 80003:
          //   // Toast('参数为空')
          Toast(error.response.data.msg)
          break;
        case 80004:
          // Toast('配置缺失')
          Toast(error.response.data.msg);
          break;
        case 80005:
          // Toast('数据已存在')
          Toast(error.response.data.msg);
          break;
        case 80006:
          // Toast('数据不存在')
          Toast(error.response.data.msg);
          break;
        case 80007:
          // Toast('请稍候重试')
          Toast(error.response.data.msg);
          break;
        case 80100:
          // localStorage.removeItem('token')
          // Toast('未授权,或token已失效,请重新登录')
          Toast(error.response.data.msg);
          router.push({
            path: "home",
            query: {
              redirect: router.currentRoute.fullPath
            }
          });
          break;
        case 80101:
          // Toast('登录失败,请稍候重试')
          Toast(error.response.data.msg);
          break;
        case 80102:
          // Toast('请传一个正确的手机号')
          Toast(error.response.data.msg);
          break;
        case 80103:
          // Toast('必须在1-120之间')
          Toast(error.response.data.msg);
          break;
        case 80104:
          // Toast('必须是M,F之一')
          Toast(error.response.data.msg);
          break;
        case 80201:
          // Toast('订单不存在')
          Toast(error.response.data.msg);
          break;
        case 80202:
          // Toast('还未支付过')
          Toast(error.response.data.msg);
          break;
        case 80203:
          // Toast('支付中')
          Toast(error.response.data.msg);
          break;
        case 80204:
          // Toast('代办费计算不一致')
          Toast(error.response.data.msg);
          break;
        case 80205:
          // Toast('优惠券不存在')
          Toast(error.response.data.msg);
          break;
        case 80206:
          // Toast('优惠券金额不相等')
          Toast(error.response.data.msg);
          break;
        case 80207:
          // Toast('总金额不相等')
          Toast(error.response.data.msg);
          break;
        case 80208:
          // Toast('实付金额不相等')
          Toast(error.response.data.msg);
          break;
        case 80209:
          // Toast('优惠券已被使用')
          Toast(error.response.data.msg);
          break;
        case 80210:
          // Toast('优惠券已过期')
          Toast(error.response.data.msg);
          break;
        case 80211:
          // Toast('手机验证码不相等')
          Toast(error.response.data.msg);
          break;
        case 80212:
          // Toast('该城市暂未开通此服务')
          Toast(error.response.data.msg);
          break;
        case 80213:
          // Toast('本系统暂未开通跨城市服务')
          Toast(error.response.data.msg);
          break;
        case 80214:
          // Toast('服务类型不正确')
          Toast(error.response.data.msg);
          break;
        case 80215:
          // Toast('没有支付信息')
          Toast(error.response.data.msg);
          break;
        case 80216:
          // Toast('支付金额太小')
          Toast(error.response.data.msg);
          break;
        case 80217:
          // Toast('该业务不能使用优惠券')
          Toast(error.response.data.msg);
          break;
        case 80218:
          // Toast('0元支付')
          Toast(error.response.data.msg);
          break;
        case 80219:
          // Toast('支付流水号为空')
          Toast(error.response.data.msg);
          break;
        case 80220:
          // Toast('签名校验失败')
          Toast(error.response.data.msg);
          break;
        case 80221:
          // Toast('交易状态为空')
          Toast(error.response.data.msg);
          break;
        case 80222:
          // Toast('交易状态错误')
          Toast(error.response.data.msg);
          break;
        case 80223:
          // Toast('两次app_id不一致')
          Toast(error.response.data.msg);
          break;
        case 80224:
          // Toast('支付金额不一致')
          Toast(error.response.data.msg);
          break;
        case 80225:
          // Toast('代办费计算结果为空')
          Toast(error.response.data.msg);
          break;
        case 80226:
          // Toast('未付款交易超时关闭，或支付完成后全额退款')
          Toast(error.response.data.msg);
          break;
        case 80227:
          // Toast('交易创建，等待买家付款')
          Toast(error.response.data.msg);
          break;
        case 80228:
          // Toast('交易结束，不可退款')
          Toast(error.response.data.msg);
          break;
        case 80008:
          // Toast('项目缺少')
          Toast(error.response.data.msg);
          break;
      }
    }
    return Promise.reject(error);
  }
);

Vue.prototype.axios = axios;
Vue.prototype.store = store;

router.beforeEach((to, from, next) => {
  // NProgress.start();
  //匹配前往的路由不存在
  if (to.matched.length === 0) {
    next("/error");
    // from.name ? next({
    //   name: from.name
    // }) : next('/error'); //判断此跳转路由的来源路由是否存在，存在的情况跳转到来源路由，否则跳转到404页面
  } else {
    //设置页面title
    if (to.meta.title) {
      document.title = to.meta.title;
    }
    next();
  }
});
//当路由跳转结束后
router.afterEach(() => {
  // 关闭进度条
  // NProgress.done();
});

window.vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
