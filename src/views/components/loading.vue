<template>
    <div class="loading">
        <div class="load_box" v-show="store.state.loading">
            <div class="bg">
                <!-- <div class="car"></div> -->
                <div class="car"></div>
                <div class="tire_left"></div>
                <div class="tire_right"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    // store,
    mounted(){
        //默认3秒关闭
        // setTimeout(() => {
        //     this.stop();
        // },3000)
    },
    methods: {
        start(){
            this.store.commit('toogleLoading','start')
        },
        stop(){
            this.store.commit('toogleLoading','stop')
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/global.scss';
    .loading{
        // position: relative;
        .load_box{
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            background-color: #F2F1F6;
            z-index: 500;
            .bg{
                position: relative;
                top: 50%;
                left: 50%;
                background: url('../../assets/image/car/loading_bg.png') no-repeat;
                    background-size: cover;
                width: p2r(259);
                height: p2r(105);
                margin-top: p2r(-52);
                margin-left: p2r(-130);
                .car{
                    background: url('../../assets/image/car/loading_car.png') no-repeat;
                    background-size: cover;
                    width: p2r(114);
                    height: p2r(35);
                    position: absolute;
                    bottom: p2r(5);
                    left: p2r(65);
                    animation: carToRight .5s infinite;
                }
                .tire_left{
                    background: url('../../assets/image/car/loading_tire_left.png') no-repeat;
                    background-size: cover;
                    width: p2r(18);
                    height: p2r(18);
                    position: absolute;
                    bottom: 0;
                    left: p2r(78);
                    animation: trieRoll_left .5s infinite;
                }
                .tire_right{
                    background: url('../../assets/image/car/loading_tire_right.png') no-repeat;
                    background-size: cover;
                    width: p2r(18);
                    height: p2r(18);
                    position: absolute;
                    bottom: 0;
                    left: p2r(164);
                    animation: trieRoll_right .5s infinite;
                }
            }
        }
        
    }
    @keyframes carToRight{
        0%   {left: p2r(65)}
        50%  {left: p2r(67);}
        100% {left: p2r(65);}
    }
    @keyframes trieRoll_left{
        0%   {-webkit-transform: rotate(0deg);left: p2r(80)}
        50%  {-webkit-transform: rotate(180deg);left: p2r(82);}
        100% {-webkit-transform: rotate(360deg);left: p2r(80);}
    }
    @keyframes trieRoll_right{
        0%   {-webkit-transform: rotate(0deg);left: p2r(154)}
        50%  {-webkit-transform: rotate(180deg);left: p2r(156);}
        100% {-webkit-transform: rotate(360deg);left: p2r(154);}
    }
</style>