<template>
    <div id="container">
        <div class="item" @click="change('/Todolist')">
            <img :src="$route.path.includes('Todolist')?todaySelected:todayBarSrc" alt="">
            <span :class="$route.path.includes('Todolist')?'active':''">简历</span>
        </div>
        <div class="item" @click="change('/Tommorowlist')">
            <img :src="$route.path.includes('Tommorowlist')?tommorowSelected:tommorowBarSrc" alt="">
            <span :class="$route.path.includes('Tommorowlist')?'active':''">项目</span>
        </div>
        <div class="item" @click="change('/Todaylist')">
            <img :src="$route.path.includes('Todaylist')?todoSrcSelected:todoSrc" alt="">
            <span :class="$route.path.includes('Todaylist')?'active':''">日程</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Tabbar",
        data() {
            return {
                todayBarSrc: require('../assets/tabBar/today.png'),
                todaySelected: require('../assets/tabBar/today_s.png'),
                tommorowBarSrc: require('../assets/tabBar/tommorow.png'),
                tommorowSelected: require('../assets/tabBar/tomorrow_s.png'),
                todoSrc: require('../assets/tabBar/calendar.png'),
                todoSrcSelected: require('../assets/tabBar/calendar_s.png')
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
        height: 60px;
        background-color: #ffffff;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        position: fixed;
        left: 0;
        bottom: 0;
        border-top: 1px solid #EBEEF5;
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
        color: #00d8a0 !important;
    }
</style>
