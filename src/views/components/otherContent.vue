<template>
    <div class="other_type">
        <div class="ind_one">
            <div calss="ind_fr" style="display:flex;justify-content: center;align-items: center;">
                <p class="ind_btn">代办</p>
                <span class="ind_span" >{{info.order.order_from == 'gas' ? '加油' : info.order.order_from == 'lacquer' ? '喷漆' : info.order.order_from == 'wash' ? "洗车" : ''}}</span>
            </div>
            <span class="ind_fl" :class="{'ind_blue':info.order.status == 'wait_pay' || info.order.status == 'paying','ind_grey':info.order.status == 'cancel' }"
            >{{info.order.status == 'finish' ? '已完成' : info.order.status == 'cancel' ? '已取消' : (info.order.status == 'start_service' || info.order.status == 'wait_service' || info.order.status == 'paid_wait_assign' ) ? '已接单' : (info.order.status == 'wait_pay' || info.order.status == 'paying') ? '请在30分钟内付款' : '' }}</span>
        </div>
        <router-link :to="'/orderDetail/'+info.order.order_id">
            <div class="ind_two">
                <div class="ind_two_one">
                    <div class="ind_two_one_fr">
                        <div class="ind_circle"></div>
                        <span>门店信息</span>
                    </div>
                    <span class="ind_name">{{info.address.service_shop_name}}</span>
                </div>
                <div class="ind_two_two">
                    <div class="ind_text_color">
                        <span>{{info.address.service_shop_province}}{{info.address.service_shop_city}}{{info.address.service_shop_area}}{{info.address.service_shop_address}}</span>
                    </div>
                </div>
                <div class="ind_two_three">
                    <div class="ind_three_fr">
                        <div class="ind_three_circle"></div>
                        <span class="ind_three_txt" v-if="info.mechanic.name != '' || info.mechanic.phone != ''">管家信息</span>
                        <span class="ind_three_txt" v-else>预约时间:&nbsp;&nbsp;{{info.order|filterTime}}</span>
                    </div>
                    <!--服务套餐：洗车标准-->
                    <!-- <span class="ind_three_msg"
                        v-if="info.wash"
                    >服务套餐: {{info.wash.service_type == '0' ? '标准洗车-五座轿车' : info.wash.service_type == '1' ? '标准洗车-SUV/MPV' : info.wash.service_type == '2' ? '精致洗车' :'' }}</span> -->
                    <!--预约时间-->
                    <!-- <span class="ind_three_msg">预约时间: {{info.order|filterTime}}</span> -->
                    <span class="ind_three_msg" v-if="info.mechanic.name != '' || info.mechanic.phone != ''">
                        {{info.mechanic.name ? info.mechanic.name : '匿名'}}
                        <a class="ind_rgba" :href="'tel:'+info.mechanic.phone" v-if="info.mechanic.phone">{{info.mechanic.phone}}</a>
                    </span>
                </div>
                <div class="ind_two_four">
                    <!--总计金额-->
                    <span
                        class="ind_fo_txt"
                        v-if="info.order.status != 'wait_pay' && info.order.status != 'cancel'  "
                    >总计¥{{info.order.total_fee}}</span>
                    <!--下单时间-->
                    <span
                        class="ind_fo_text"
                        v-if="info.order.status != 'wait_pay' "
                    >{{info.order.created_at|filtermsTime}}</span>
                </div>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
  props: {
    info: {
      type: Object,
      default: {}
    }
  },
  //ETC 预约时间格式转换
  filters: {
    //开始预约时间
    filterTime(data) {
      let start = new Date(data.plan_start_time * 1000);
      let end = new Date(data.plan_end_time * 1000);
      // start * 1000;//时间戳转化为整形并乘以1000
      // end * 1000;
      var newDate = new Date(start);
      var endDate = new Date(end);
      var year = newDate.getFullYear(); //取年份
      var month = newDate.getMonth() + 1; //取月份
      var nowday = newDate.getDate(); //取天数
      var hours = newDate.getHours(); //取小时
      var minutes = newDate.getMinutes(); //取分钟
      var endHours = endDate.getHours(); //取小时
      var endMinutes = endDate.getMinutes(); //取分钟
      return (
        year +
        "-" +
        (month < 10 ? "0" + month : "" + month) +
        "-" +
        (nowday < 10 ? "0" + nowday : "" + nowday) +
        " " +
        hours +
        ":" +
        (minutes < 10 ? "0" + minutes : "" + minutes) +
        "-" +
        endHours +
        ":" +
        (endMinutes < 10 ? "0" + endMinutes : "" + endMinutes)
      ); //拼接 2017-2-21 12:23:43
    },
    //下单时间
    filtermsTime(data) {
      let end = new Date(data * 1000);
      end * 1000; //时间戳转化为整形并乘以1000
      var newDate = new Date(end);
      var year = newDate.getFullYear(); //取年份
      var month = newDate.getMonth() + 1; //取月份
      var nowday = newDate.getDate(); //取天数
      var hours = newDate.getHours(); //取小时
      var minutes = newDate.getMinutes(); //取分钟
      // var seconds = newDate.getSeconds();//取秒SSS
      return (
        year +
        "-" +
        (month < 10 ? "0" + month : "" + month) +
        "-" +
        (nowday < 10 ? "0" + nowday : "" + nowday) +
        " " +
        hours +
        ":" +
        (minutes < 10 ? "0" + minutes : "" + minutes)
      ); //拼接 2017-2-21 12:23:43
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/global.scss";
.other_type {
  .ind_one {
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    padding: 0 p2r(16);
    justify-items: center;
    height: p2r(46);
    .ind_btn {
      width: p2r(32);
      height: p2r(16);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: p2r(12);
      color: #395ef4;
      border: 1px solid #395ef4;
      margin-right: p2r(10);
    }
    // & /deep/ .van-button--plain.van-button--danger {
    //   @include base_border;
    //   height: p2r(16);
    //   width: p2r(32);
    //   margin-right: p2r(8);
    //   line-height: p2r(16);
    //   @include base_color;
    //   border: 0;
    //   vertical-align: middle;
    // }
    // & /deep/ .van-button--normal {
    //   font-size: p2r(11);
    //   padding: 0;
    // }
    // .ind_car,
    // .ind_phone {
    //   font-size: p2r(16);
    //   font-family: PingFangSC-Medium;
    //   font-weight: 500;
    //   color: #395ef4;
    //   line-height: p2r(22);
    //   border-right: 1px solid #979797;
    //   padding-right: p2r(6);
    // }
    .ind_span {
      height: p2r(22);
      font-size: p2r(16);
      line-height: p2r(22);
      vertical-align: middle;
    }
    .ind_span,
    .ind_fl {
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: #000000;
    }
    .ind_fl {
      font-size: p2r(17);
      line-height: p2r(46);
    }
    .ind_blue {
      @include base_color;
      line-height: p2r(46);
    }
    .ind_grey,
    .ind_greys {
      color: #9b9b9b;
    }
    .ind_green {
      color: #088e1f;
    }
  }
  .ind_two {
    background: #ffffff;
    border-bottom: 1px solid #eeeeee;
    border-top: 1px solid #eeeeee;
    display: flex;
    flex-direction: column;
    padding: 0 p2r(16);
    padding-bottom: p2r(10);
    .ind_two_one {
      height: p2r(40);
      background: #ffffff;
      font-size: p2r(15);
      font-family: PingFangSC-Medium;
      font-weight: 500;
      display: flex;
      justify-content: space-between;
      line-height: p2r(40);
      .ind_two_one_fr {
        display: flex;
        justify-content: start;
        font-size: p2r(15);
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: #000000;
        width: 100%;
        .ind_circle {
          width: p2r(8);
          height: p2r(8);
          color: #12c32b;
          background: #12c32b;
          border-radius: p2r(8);
          border: 1px solid;
          margin-top: p2r(16);
          margin-right: p2r(12);
        }
        .ind_omit {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          display: block;
          // text-align: right;
          color: #000;
          // text-align: left;
          // word-wrap: break-word;
          // line-height: p2r(21);
          // margin-top: p2r(10);
        }
      }
      .ind_name {
        width: p2r(240);
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-align: right;
        color: #000000;
      }
    }
    .ind_two_two {
      display: flex;
      justify-content: space-between;
      // padding: 0 p2r(16);
      // padding-bottom:p2r(8);
      padding: 0 0 p2r(8) p2r(16);
      .ind_text_color {
        // width: p2r(240);
        // overflow: hidden;
        // white-space: nowrap;
        // text-overflow: ellipsis;
        padding: p2r(4) 0;
        font-size: p2r(15);
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #505050ab;
        word-wrap: break-word;
        line-height: p2r(21);
        .ind_rgba {
          color: #505050ab;
        }
        .ind_four_txt {
          display: inline-block;
          padding: p2r(10) 0;
        }
        .ind_four_text {
          display: inline-block;
        }
      }
      .ind_two_btn {
        width: p2r(63);
        height: p2r(18);
        line-height: normal;
        position: relative;
        top: p2r(34);
        left: p2r(18);
        padding: 0;
        font-size: p2r(10);
        @include base_border;
        @include base_color;
      }
    }
    .ind_two_three {
      // height: p2r(60);
      .ind_three_circle {
        width: p2r(8);
        height: p2r(8);
        color: #e74f4f;
        background: #e74f4f;
        border-radius: p2r(8);
        border: 1px solid;
        margin: p2r(6) p2r(12) 0 0;
      }
      .ind_three_txt {
        font-size: p2r(15);
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: #000000;
      }
      .ind_three_msg {
        font-size: p2r(15);
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #505050ab;
        margin-left: p2r(19);
        display: table;
        padding-top: p2r(4);
        padding: p2r(4) 0;
      }
      .ind_three_fr {
        display: flex;
        justify-content: start;
        line-height: p2r(24);
        padding-bottom: p2r(4);
      }
    }
    .ind_two_four {
      height: p2r(40);
      display: flex;
      justify-content: flex-end;
      line-height: p2r(40);
      align-items: baseline;
      .ind_fo_txt {
        font-size: p2r(16);
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: #000000;
        padding-right: p2r(16);
        padding-top: p2r(12);
      }
      .ind_fo_text {
        font-size: p2r(13);
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #a3a3a3;
        padding-top: p2r(12);
      }
    }
  }
}
</style>
