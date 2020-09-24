import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({

  plugins: [persistedState()],
  state: {
    loading: true,
    statuSteps: [],
    editAddress: {},
    addressWay: '',//for=>取车，send=>送车，service=>门店
    orderType: '',//wash=>洗车,panit=>喷漆，gaso=>加油,etc
    couponInfo: {},
    submitOrderInfo: {},
    orderAgin: {},
    orderFrom: {},
    openId: '1024',
    // 罚单代缴表单数据
    PunishNumList: [],
    // 罚单代缴订单数据
    fineOrderList: [],
    // 罚单代缴订单号
    orderNum: '',
    // 退款单信息
    applyPaymentInfo: {},
    source: ''
  },
  mutations: {
    toogleLoading (data, list) {
      if (list == 'start') {
        this.state.loading = true;
      } else if (list == 'stop') {
        this.state.loading = false;
      }
    },
    initStatuSteps (data, list) {
      this.state.statuSteps = list
    },
    propAddressInfo (data, list) {
      this.state.editAddress = list
    },
    intAddressWay (data, list) {
      this.state.addressWay = list
    },
    initOrderType (data, list) {
      this.state.orderType = list
    },
    initCouponInfo (data, list) {
      this.state.couponInfo = list
    },
    submitInfo (data, list) {
      this.state.submitOrderInfo = list
    },
    initOrderAgin (data, list) {
      this.state.orderAgin = list
    },
    initOrderFrom (data, list) {
      this.state.orderFrom = list
    },
    initOpenId (data, list) {
      this.state.openId = list
    },
    addFineListData (state, value) {
      state.fineOrderList = value
    },
    orderNum (state, value) {
      state.orderNum = value
    },
    applyPaymentInfo (state, value) {
      state.applyPaymentInfo = value
    },
    setSource (state, value) {
      state.source = value
    }
  },
  actions: {

  }
})
