<template>
    <div class="bar">
        <van-nav-bar
            :title="title"
            left-arrow
            @click-left="$router.go(-1)"
        />
    </div>
</template>
<script>
export default {
    data(){
        return{
            title: '首页'
        }
    },
    mounted(){
        this.title = this.$route.meta.title
    }
}
</script>

