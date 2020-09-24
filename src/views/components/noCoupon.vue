<template>
    <div  class="bill_content">
        <img src="../../assets/image/profile/noCoupon.png" alt="">
        <span>没有查询到优惠券</span>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
@import '@/assets/global.scss';
.bill_content{
    display: grid;
    justify-content: center;
    margin: 0 auto;
    padding-top: p2r(123);
    img{
        margin: auto;
        width: p2r(200);
        height: auto;
    }
    span{
        text-align: center;
        font-size: p2r(15);
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #000000;
        margin-top: p2r(40);
    }
}
</style>

