// 唤起支付宝/微信支付
export default function toPay (res1) {
  let _this = window.vm
  const isWX = /micromessenger/.test(window.navigator.userAgent.toLowerCase())
  const isAliPay = /alipayclient/.test(window.navigator.userAgent.toLowerCase())
  const isTB = /windvane/.test(window.navigator.userAgent.toLowerCase())

  if (isWX) {
    function onBridgeReady () {
      WeixinJSBridge.invoke(
        'getBrandWCPayRequest', {
        "appId": res1.data.appId,     //公众号名称，由商户传入     
        "timeStamp": res1.data.timeStamp + '',   //时间戳，自1970年以来的秒数
        "nonceStr": res1.data.nonceStr, //随机串     
        "package": res1.data.package,
        "signType": res1.data.signType, //微信签名方式
        "paySign": res1.data.paySign    //微信签名 
      },
        function (res) {
          console.log('微信支付回调:', res)
          if (res.err_msg == "get_brand_wcpay_request:ok") {
            // 使用以上方式判断前端返回,微信团队郑重提示：
            //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠
            _this.$router.push('/orderList')
          } else {
            _this.$router.push('/orderList')
          }
        })
    }
    if (typeof WeixinJSBridge == "undefined") {
      if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
      } else if (document.attachEvent) {
        document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
        document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
      }
    } else {
      onBridgeReady();
    }
  }

  if (isAliPay || isTB) {
    console.log('唤起支付宝支付')
    const div = document.createElement('divform');
    div.innerHTML = res1.data;
    document.body.appendChild(div);
    document.forms[0].submit()
  }
}
