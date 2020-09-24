// 获取 支付宝 淘宝 微信 token token2
export default async function getToken (redireact_uri, type) {
  // console.log('UA:4', window.navigator.userAgent)
  let _this = window.vm
  const isWX = /micromessenger/.test(window.navigator.userAgent.toLowerCase())
  const isAli = /alipayclient/.test(window.navigator.userAgent.toLowerCase())
  const isTB = /windvane/.test(window.navigator.userAgent.toLowerCase())

  sessionStorage.channel = _this.$route.query.channel || 'djsw' //|| '3seconds2'

  if (sessionStorage.token2) return false

  async function getToken2 (openid) {
    const { data: res } = await _this.axios.post(`${process.env.VUE_APP_APIHOST}/api/auth/login?openuid=${openid || localStorage.openid}&channel=${sessionStorage.channel}&source=${window.sessionStorage.source}`)
    // console.log("token2:", res)
    sessionStorage.token2 = res.access_token;
    sessionStorage.expires_in2 = new Date().getTime() + res.expires_in
  }

  async function getOpenid () {
    const { data: res2 } = await _this.axios.get(`https://c.api.3seconds.net/wxSigns/wx/Oauth?appid=${process.env.VUE_APP_WX_APPID}&code=${_this.$route.query.code}`)
    // console.log('openid:', res2)
    localStorage.openid = res2.openid
    return res2
  }

  // 微信
  if (isWX) {
    console.log('来自微信')
    const appid = process.env.VUE_APP_WX_APPID
    const backurl = encodeURIComponent(`${process.env.VUE_APP_BACKURL}${redireact_uri}`)
    sessionStorage.source = "WEIXIN"
    _this.store.commit("setSource", "WEIXIN")
    function getCode () {
      if (!_this.$route.query.code) {
        window.location.href = `${process.env.VUE_APP_AUTHURL}?appid=${appid}&redirect_uri=${backurl}&response_type=code&scope=snsapi_base&state=STATE&connect_redirect=1#wechat_redirect`
      }
    }
    /*async function getWxToken () {
      getCode()
      const { data: res1 } = await _this.axios.post(process.env.VUE_APP_UCENTER + "/api/uc/weixin/oauth", {
        channel: sessionStorage.channel || "djsw",
        open_id_from: "weixin",
        terminal: appid,
        code: _this.$route.query.code
      })
      // console.log('wx-token:', res1)
      localStorage.openid = res1.data.openid
      sessionStorage.token = res1.data.token
      _this.store.commit("initOpenId", res1.data.openid);
    }*/

    await getToken2()
/*    if (!sessionStorage.token && type !== 'token2') {
      await getWxToken()
    }
    if (!sessionStorage.token2 && type === 'token2') {
      await getWxToken()
      await getToken2()
    }*/
  }

  // 淘宝
  if (isTB) {
    console.log('来自淘宝')
    sessionStorage.source = "TAOBAO"
    _this.store.commit("setSource", "TAOBAO")
    function initToken (openId) {
      _this.axios.post(process.env.VUE_APP_UCENTER + "/api/uc/user", {
        open_id: openId || localStorage.openid,
        open_id_from: "taobao_all"
      })
        .then(response => {
          if (response.data.code == 0) {
            console.log("taobao-token:", response.data.data.token);
            sessionStorage.setItem("token", response.data.data.token);
          }
          _this.$toast.clear();
        })
    }
    function beforInit () {
      if (
        window.location.hostname == "njdbh5.ewszjk.m.jaeapp.com" ||
        window.location.hostname == "agent.ewszjk.m.jaeapp.com" || window.location.hostname == "fddjweb.ewszjk.m.jaeapp.com"
      ) {
        _this.$toast.loading({
          duration: 0,
          forbidClick: true,
          message: "加载中..."
        })
        console.log('Tida', Tida);
        Tida.user.openuid(async res => {
          if (res && res.data && res.data.openuid) {
            console.log("淘宝openuid:" + res.data.openuid);
            localStorage.setItem("openid", res.data.openuid);
            _this.store.commit("initOpenId", res.data.openuid);
            if (!sessionStorage.token2) {
              await getToken2(res.data.openuid)
            }
            if (!sessionStorage.token) {
              await initToken(res.data.openuid)
            }
            _this.$toast.clear();
          } else {
            console.error(JSON.stringify(err));
          }
        }, err => {
          console.error(JSON.stringify(err));
        }
        )
      }
    }
    beforInit()
  }

  // 支付宝
  if (isAli) {
    console.log('来自支付宝')
    sessionStorage.source = "ALIPAY"
    _this.store.commit("setSource", "ALIPAY")
    function getCode () {
      if (!_this.$route.query.code) {
        let backurl = encodeURIComponent(`${process.env.VUE_APP_BACKURL}${redireact_uri}`)
        window.location.href = `${process.env.VUE_APP_ALI_AUTHURL}?appid=${process.env.VUE_APP_ALI_APPID}&scope=auth_user&redirect_uri=${backurl}`
      }
    }
    async function getAliToken () {
      getCode()
      const { data: res } = await _this.axios.post(process.env.VUE_APP_UCENTER + "/api/uc/alipay/oauth", {
        channel: sessionStorage.channel || "djsw",
        open_id_from: "alipay",
        terminal: process.env.VUE_APP_ALI_APPID,
        code: _this.$route.query.code
      })
      // console.log("alipay-token:", res)
      if (res.code !== 0) return console.log('alipay-token:error', res)
      localStorage.openid = res.data.openid
    }
    //getCode();
    await getAliToken()
    await getToken2()
    /*if (!sessionStorage.token && type !== 'token2') {
      await getAliToken()
    }
    if (!sessionStorage.token2 && type === 'token2') {
      if (localStorage.openid) {
        await getToken2()
      } else {
        await getAliToken()
        await getToken2()
      }
    }*/
  }

  return false
}
