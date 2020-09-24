<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: PingFangSC-Regular;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
  width: 100%;
  height: 100%;
}
a[title="站长统计"] {
  display: none;
}
</style>
<script>
import eruda from 'eruda'
export default {
  data () {
    return {

    }
  },
  beforeCreate () {
    let meta = document.createElement('meta');
    meta.name = 'spm-id';
    meta.content = "a1z51." + process.env.VUE_APP_STAPPKEY;
    let node = document.head.children;
    document.head.insertBefore(meta, node[0]);
    let urlArray = []
    if (/alipayclient/.test(window.navigator.userAgent.toLowerCase())) {
		urlArray.push('https://v1.cnzz.com/z_stat.php?id=1278582336&web_id=1278582336')
    }else{
       urlArray.push('https://s9.cnzz.com/z_stat.php?id=1278582344&web_id=1278582344')
    }
    urlArray.forEach(item => {
      let jsapi = document.createElement('script');
      jsapi.charset = 'utf-8';
      jsapi.type = "text/javascript";
      jsapi.src = item;
      let node = document.head.children;
      document.head.insertBefore(jsapi, node[0]);
    })
  },
  mounted () {
    //设置页面字体
    window.addEventListener('DOMContentLoaded', () => {
      const html = document.querySelector('html');
      let size = window.innerWidth / 10;
      size = size > 75 ? 75 : size;
      html.style.fontSize = size + 'px';
    })
    //配置不同环境下是否启用debugger工具
    // if(window.location.hostname != 'agent.ewszjk.m.jaeapp.com' || window.location.hostname != 'm.vue.agent.3seconds.net'){
    if (process.env.NODE_ENV !== 'production') {
      let el = document.createElement('div');
      document.body.appendChild(el);
      eruda.init({
        container: el,
        // tool: ['console', 'elements', 'network'],
        useShadowDom: true
      });
    }

  }
}
</script>



