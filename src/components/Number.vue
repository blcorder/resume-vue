<template>
    <div class="container">
        <div class="s-item">
            <img src="../assets/calltype/phone.png" alt="">
            <div>
                <span>手机号码</span>
                <span><a style="color:#3579E9" href="tel:15205553389">15205553389</a></span>
            </div>
        </div>
        <div class="s-item">
            <img src="../assets/calltype/email.png" alt="">
            <div>
                <span>联系邮箱</span>
                <span>bl_9635@163.com</span>
            </div>
        </div>
        <div class="s-item" v-for="(item,index) in lista" :key="index+10">
            <img :src="item.src" alt="">
            <div>
                <span>{{item.type}}</span>
                <span><a style="color:#3579E9" :href="item.number">{{item.number}}</a></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Number",
        data() {
            return {
                lista:[
                    {src: require('../assets/calltype/github.png'), type: 'github地址', 'number': 'https://github.com/blcorder'},
                    {src: require('../assets/calltype/boke.png'), type: '个人博客', 'number': 'https://www.cnblogs.com/blcorder'},
                ]
            }
        }
    }
</script>

<style scoped>
    .s-item {
        display: flex;
        align-items: center;
        height: 100px;
    }

    .s-item > img {
        width: 40px;
        height: 40px;
        margin-right: 20px;
    }

    .s-item > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .s-item > div > span:nth-child(1) {
        font-size: 14px;
        color: #606266;
    }

    .s-item > div > span:nth-child(2) {
        font-size: 16px;
        color: #303133;
        font-weight: bold;
        margin-top: 3px;
    }
    .s-item > div > span:nth-child(2) a{
        color: #303133;
        text-decoration: none;
    }
</style>
