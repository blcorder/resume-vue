<template>
    <div id="container">
        <div class="item" @click="change('/Todaylist')">
            <img :src="$route.path.includes('Todaylist')?todaySelected:todayBarSrc" alt="">
            <span :class="$route.path.includes('Todaylist')?'active':''">主页</span>
        </div>
        <div class="item" @click="change('/Tommorowlist')">
            <img :src="$route.path.includes('Tommorowlist')?tommorowSelected:tommorowBarSrc" alt="">
            <span :class="$route.path.includes('Tommorowlist')?'active':''">个人</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Tabbar",
        data() {
            return {
                todayBarSrc: require('../assets/today.png'),
                todaySelected: require('../assets/today_s.png'),
                tommorowBarSrc: require('../assets/tommorow.png'),
                tommorowSelected: require('../assets/tomorrow_s.png')
            }
        },
        methods: {
            change(path) {
                this.$router.replace(path)
            }
        }

    }
</script>

<style scoped>
    #container {
        width: 100%;
        height: 50px;
        background-color: #ffffff;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        position: fixed;
        left: 0;
        bottom: 0;
    }

    #container .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .item img {
        width: 30px;
        height: 30px;
    }

    .item span {
        color: #bfbfbf;
    }

    .active {
        color: #d81e06!important;
    }
</style>
