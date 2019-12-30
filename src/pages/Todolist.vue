<template>
    <div class="container" ref="containerBox">
        <!--        个人简历-->
        <header>
            <div class="h-left">
                <h2>侯宝文</h2>
                <span>安徽工业大学/本科</span>
                <span>1年经验/23岁</span>
            </div>
            <div class="h-right">
                <img src="../assets/accord.jpg" alt="">
            </div>
        </header>
        <main>
            <div ref="tabbar" class="tabBar" :class="isFixed?'tFixed':''">
                <span @click="tabOne" :class="showFlag === 0?'active':''">在线简历</span>
                <span @click="tabTwo" :class="showFlag === 1?'active':''">联系方式</span>
            </div>
            <div class="content">
                <Onlineinfo v-show="showFlag === 0"/>
                <Number v-show="showFlag === 1"/>
            </div>
        </main>
    </div>
</template>

<script>
    import Onlineinfo from "../components/Onlineinfo";
    import Number from "../components/Number";

    export default {
        name: "Todolist",
        components: {
            Onlineinfo,
            Number
        },
        data() {
            return {
                showFlag: 0,
                isFixed: false,
                tabbarTop: 0
            }
        },
        mounted() {
            this.$refs.containerBox.addEventListener('scroll', () => {
                this.isFixed = this.$refs.containerBox.scrollTop > this.tabbarTop ? true : false;
            });
            this.tabbarTop = this.$refs.tabbar.offsetTop;
        },
        methods: {
            tabOne() {
                this.showFlag = 0;
            },
            tabTwo() {
                this.showFlag = 1;
            }
        }
    }
</script>

<style scoped>
    .container {
        width: 100%;
        height: 100%;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        padding-bottom: 65px;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: scroll;
    }

    /*    头部样式 ---------------------->*/
    header {
        height: 115px;
        width: 92%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #f5f5f5;
        margin-left: 4%;
        padding-bottom: 10px;
    }

    header .h-left {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .h-left h2 {
        margin-bottom: 5px;
        color: #303133;
    }

    .h-left > span:nth-child(2) {
        margin-bottom: 12px;
        color: #909399;
        font-size: 14px;
    }

    .h-left > span:nth-child(3) {
        color: #606266;
        font-size: 14px;
    }

    header .h-right {
        margin: 20px 0 0 0;
    }

    header .h-right img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-size: cover;
    }

    /*    tabBar样式 -------------------->*/
    main {
        width: 92%;
        margin-left: 4%;
        padding-top: 20px;
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    main .tabBar {
        width: 100%;
        height: 40px;
        border-bottom: 1px solid #EBEEF5;
    }

    main .content {
        flex: 1;

    }

    .tabBar span {
        margin-right: 35px;
        display: inline-block;
        height: 100%;
        line-height: 40px;
        color: #909399;
    }

    .active {
        /*color: #00d8a0;*/
        color: #303133 !important;
        border-bottom: 2px solid #00d8a0;
    }

    .tFixed {
        position: fixed;
        top: 0;
        background-color: #fff;
        padding-top: 20px;
    }
</style>
