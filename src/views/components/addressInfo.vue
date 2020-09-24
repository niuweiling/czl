<template>
    <div class="ordermessage" id="apply">
        <van-cell-group>
            <van-button class="ordermessage_but" type="primary" @click="showPopup">
                <van-field class="ordermessage_footer" v-model="value1" placeholder="省份、城市、区县" />
            </van-button>
            <van-field class="ordermessage_footer" size="large" v-model="message.address" placeholder="单元、门牌号、如：4单元301" />
            <van-field class="ordermessage_footer" v-model="message.linkman" placeholder="联系人" maxlength="10" @blur="testManAndPhone('man')"/>
            <van-field class="ordermessage_footer" v-model="message.linkman_tel" placeholder="手机号" @blur="testManAndPhone('phone')" maxlength="11" type="number"/>
        </van-cell-group>

        <div class="ordermessage_gender">
            <div class="man" v-for="(item,index) in sexArray" :key="index" :class="{'active': clickNum == index}" @click="changeSex(item,index)">{{item.text}}</div>
        </div>
        
        <div class="ordermessage_site">
            <p>地址标签</p> 
            <p>
                <span class="family" v-for="(item,index) in labelArray" :key="index" :class="{'common': familyNum == index}" @click="changeLabel(item,index)">{{item.text}}</span>
            </p>
        </div>
        <div class="ordermessage_save">
            <van-checkbox class="ordermessage_save_dt" v-model="checked">设为默认地址</van-checkbox>
        </div>
        <div class="ordermessage_submit">
            <van-button type="primary" size="large" @click="submitInfo">确定</van-button>
        </div>
    </div>
</template>
<script>
// import { get } from 'http';
// import { Button } from 'vant';
export default {
    data(){
        return{
            // value2: '',
            // unit: '',
            // relation: '',
            // cellphone: '',
            radio: '1',
            checked: false,
            clickNum: -1,
            isFamily: false,
            show: false,
            sexArray: [
                {sex: 'M',text: '先生'},
                {sex: 'F',text: '女士'}
            ],
            labelArray: [
                {label: 'home',text: '家'},
                {label: 'company',text: '公司'}
            ],
            familyNum: -1,
            // message:''
        }
    },
    props:{
        message: {
            type: Object,
            default: {}
        }
    },
    computed:{
        value1(){
            if(JSON.stringify(this.message) !== '{}' && this.message.district){
                return this.message.city + this.message.province + this.message.district
            }
        }
    },
    created(){
        const query = this.$route.query ? this.$route.query : {};
        if( JSON.stringify(query) !== '{}' && query.latitude && query.longitude){
            this.message.adcode = query.adcode;
            this.message.address = query.address;
            this.message.latitude = query.latitude+'';
            this.message.city = query.city;
            this.message.citycode = query.citycode;
            this.message.district = query.district;
            this.message.longitude = query.longitude+'';
            this.message.province = query.province;
            this.message.township = query.township;
            
            if(this.store.state.editAddress && JSON.stringify(this.store.state.editAddress) !== '{}'){
                let eD = this.store.state.editAddress
                this.message.linkman = eD.linkman ? eD.linkman : '';
                this.message.linkman_tel = eD.linkman_tel ? eD.linkman_tel : '';
                this.clickNum = eD.sex == 'M' ? 0 : eD.sex == 'F' ? 1 : -1
                this.familyNum = eD.label == 'home' ? 0 : eD.label == 'company' ? 1 : -1
            }
        }
        // if(this.store.state.editAddress && JSON.stringify(this.store.state.editAddress) !== '{}'){
        //     let eD = this.store.state.editAddress
        //     this.message.linkman = eD.linkman ? eD.linkman : '';
        //     this.message.linkman_tel = eD.linkman_tel ? eD.linkman_tel : '';
        //     this.clickNum = eD.sex == 'M' ? 0 : eD.sex == 'F' ? 1 : -1
        //     this.familyNum = eD.label == 'home' ? 0 : eD.label == 'company' ? 1 : -1
        // }
    },
    watch: {
        message(){
            if(this.message.is_default == 'Y'){
                this.checked = true;
            }else{
                this.checked = false;
            }
            this.clickNum = this.message.sex == 'M' ? 0 : this.message.sex == 'F' ? 1 : -1
            this.familyNum = this.message.label == 'home' ? 0 : this.message.label == 'company' ? 1 : -1
        }
    },
    mounted(){
        var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        window.onresize = function() {
            var nowClientHeight = document.documentElement.clientHeight || document.body.clientHeight;
            if (clientHeight - nowClientHeight > 60 ) {//因为ios有自带的底部高度
                //键盘弹出的事件处理
                // document.getElementById("apply").classList.add("focusState");
                document.getElementById("apply").scrollIntoView({block: "end", behavior: "smooth"});
            }
            // else {
            //     //键盘收起的事件处理
            //     document.getElementById("apply").classList.remove("focusState");
            // } 
        };
        if(this.$route.query.type){
            sessionStorage.setItem('annualType',this.$route.query.type)
        }
    },
    methods: {
        changeSex(item,index){
            this.clickNum = index;
            this.message.sex = item.sex
        },
        changeLabel(item,index){
            this.familyNum = index
            this.message.label = item.label
        },
        showPopup() {
            this.store.commit('propAddressInfo', this.message)
            this.$router.push({path:'/map'})
        },
        submitInfo(){
            this.message.country = '中国'
            if(this.checked){
                this.message.is_default = 'Y';
            }else{
                this.message.is_default = 'N';
            }
            if(this.value1 == '' || this.value1 == undefined){
                this.$toast('请先选择地址')
                return false;
            }
            if(this.message.address == '' || this.message.address == undefined){
                this.$toast('详细地址信息不能为空')
                return false;
            }
            if(this.message.linkman == '' || this.message.linkman == undefined){
                this.$toast('联系人不能为空')
                return false;
            }
            if(this.message.linkman_tel == '' || this.message.linkman_tel == undefined){
                this.$toast('手机号不能为空')
                return false;
            }
            console.log(this.message)
            if(this.message.id){
                this.axios.put(process.env.VUE_APP_AGENT+"/api/agent/address", this.message).then(res=>{
                    if(res.data.code == 0){
                        //操作成功，将数据清空，地址列表刷新。
                        // this.store.commit('propAddressInfo', {})
                        if(this.store.state.orderType == 'inspection'){
                            sessionStorage.setItem('annualAddress', JSON.stringify(this.message))
                        }else{
                            this.store.commit('propAddressInfo', this.message)
                        }
                        this.$emit('myclick')
                        // this.$router.replace({path: 'address'})
                        this.clickNum = this.familyNum = -1
                    }
                }).catch(err=>{
                    if (err.response.data.code != 0) {
                        if(err.response.data.code == 80000){
                            this.$toast('缺少参数,或参数格式有误')
                        }else if(err.response.data.code == 80006){
                            this.$toast('数据不存在')
                        }else if(err.response.data.code == 80100){
                            this.$router.push({
                                path:'/home'
                            })
                        }
                    }
                })
            }else{
                this.axios.post(process.env.VUE_APP_AGENT+"/api/agent/address", this.message).then(res=>{
                    if(res.data.code == 0){
                        //操作成功，将数据清空，地址列表刷新。
                        // this.store.commit('propAddressInfo', {})
                        // this.store.commit('propAddressInfo', this.message)
                        if(this.store.state.orderType == 'inspection'){
                            sessionStorage.setItem('annualAddress', JSON.stringify(this.message))
                        }else{
                            this.store.commit('propAddressInfo', this.message)
                        }
                        this.$emit('myclick')
                        // this.$router.replace({path: 'address'})
                        this.clickNum = this.familyNum = -1
                    }
                }).catch(err=>{
                    if (err.response.data.code != 0) {
                        if(err.response.data.code == 80000){
                            this.$toast('缺少参数,或参数格式有误')
                        }else if(err.response.data.code == 80100){
                            this.$router.push({
                                path:'/home'
                            })
                        }
                    }
                })
            }
        },
        testManAndPhone(flag){
            if(flag == 'phone'){
                let regPhone = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
                if (String(this.message.linkman_tel).length != 11) {
                    this.$toast("请输入11位手机号");
                    this.message.linkman_tel = ''
                } else if (!regPhone.test(this.message.linkman_tel)) {
                    this.$toast("请输入正确的手机号");
                    this.message.linkman_tel = ''
                }
            }else if(flag == 'man'){
                if(this.message.linkman == '' || this.message.linkman == undefined){
                    this.$toast('联系人不能为空')
                    return false;
                }
            }
            
                console.log(this.message)
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/global.scss';
    .ordermessage{
        background:#fff;
        padding:0 p2r(17);
        .focusState {position: absolute;}
        .ordermessage_but{
            margin-bottom: p2r(12);
        }
        .ordermessage_footer{
            height: p2r(55);
            
            & /deep/.van-field__control{
                font-size:p2r(15);
                line-height:p2r(15);
                padding-top: p2r(20);
                padding-bottom: p2r(20);
            }
        }
        .van-button--normal {
            padding: 0;
            border: 0;
            width:100%;
        }
        .van-cell {
            padding: 0;
            border-bottom:p2r(1) solid #EDEDED; 
        }
        .van-cell:not(:last-child)::after {
            border:0;
        }
        & /deep/ .van-picker__toolbar {
            background: #395EF4;
            .van-picker__cancel:active, .van-picker__confirm:active {
                background-color: #1989fa;
            }
            .van-picker__cancel, .van-picker__confirm {
                color: #fff;
                font-size:p2r(17);
            }
            .van-picker__title {
                color: #fff;
                font-size:p2r(16);
            }
        }
        .van-nav-bar__title {
            max-width: 100%;
            @include base_background;
        }
        .van_nav{
            background:#FE013C;
            color:#fff;
            height:p2r(44);
            .van-icon-arrow-left:before {
                color: #fff;
                font-size:p2r(20);
            }
            .van-nav-bar__title {
                color: #fff;
                font-size:p2r(20);
            }
        }
        .ordermessage_gender{
            height:p2r(55);
            background:#fff;
            font-size:p2r(15);
            display:flex;
            align-items:center;
            // padding:0 p2r(16);
            border-bottom:p2r(1) solid #EDEDED;
            .man{
                width:p2r(77);
                height:p2r(32);
                display:flex;
                align-items:center;
                justify-content:center;
                border:p2r(1) solid #C1C1C1;
                color:#868686;
                margin-right:p2r(12);
            }
            .girl{
                width:p2r(77);
                height:p2r(32);
                display:flex;
                align-items:center;
                justify-content:center;
                border:p2r(1) solid #C1C1C1;
                color:#868686;
            }
            .active{
                @include base_border;
                background: #EDF0FF;
                @include base_color;
            }
        }
        .ordermessage_site{
            height:p2r(55);
            background:#fff;
            font-size:p2r(15);
            display:flex;
            justify-content:space-between;
            align-items:center;
            border-bottom:p2r(1) solid #EDEDED;
            p:nth-child(1){
                color:#000000;
                font-size:p2r(15);
            }
            p:nth-child(2){
                display:flex;
                justify-content:center;
                align-items:center;
                .family{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    width:p2r(60);
                    height:p2r(24);
                    border-radius:p2r(12);
                    border:p2r(1) solid #C7C7CC;
                    margin-right:p2r(10);
                    color:#8E8E93;
                    font-size:p2r(15);
                }
                .company{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    width:p2r(60);
                    height:p2r(24);
                    border-radius:p2r(12);
                    border:p2r(1) solid #C7C7CC;
                    color:#8E8E93;
                    font-size:p2r(15);
                }
                .common{
                    @include base_border;
                    @include base_color;
                }
            }
        }
        .ordermessage_save{
            height:p2r(55);
            background:#fff;
            font-size:p2r(15);
            display:flex;
            align-items:center;
            .ordermessage_save_dt{
                height:100%;
            }
            .van-checkbox__label{
                background-color:#868686;
            }
        }
        .ordermessage_submit{
            width:100%;
            display:flex;
            justify-content:center;
            align-items:center;
            margin-top: p2r(2);
            padding-bottom:p2r(26);
            span{
                font-size: p2r(17);
            }
            .van-button--large {
                width: calc(100% - 32px);
                height:p2r(48);
                @include base_background;
                border-radius:p2r(5);
                color:#fff;
                border:0;
            }
        }
    }
</style>