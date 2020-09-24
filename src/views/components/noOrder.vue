<template>
    <div  class="bill_content">
        <img src="../../assets/image/profile/bg.png" alt="">
        <span>没有查询到订单</span>
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
        width: p2r(211);
    }
    span{
        text-align: center;
        font-size: p2r(15);
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #000000;
    }
    }
</style>

