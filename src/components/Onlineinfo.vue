<template>
    <div class="container">
        <div class="selfDis">
            <h3>自我描述</h3>
            <div class="s-main">
                <div>
                    <span v-for="(item,index) in tlist" :key="index">{{item}}</span>
                </div>
                <div>
                    本人热爱前端，拥有较为扎实的前端基础知识。
                    熟悉html5,css3,原生JavaScript（ES6/7)，熟悉ajax技术，jQuery库，bootstrap框架。
                    熟悉vue+elementUi+mint-ui。熟悉小程序+WeUi 。
                    熟悉git版本控制工具。
                    了解webpack构建工具。
                    了解nodejs，Express框架和mongoDB！
                </div>
            </div>
        </div>
        <div class="education">
            <h3 style="margin: 30px 0 5px 0">教育经历</h3>
            <div class="e-bottom">
                <div>
                    <h4>安徽工业大学</h4>
                    <span style="color: #303133">本科 <span style="display:inline-block;width: 15px;"></span>计算机科学与技术</span>
                    <span>2015-2019</span>
                </div>
                <img src="../assets/ahutlogo.jpg" alt="">
            </div>
        </div>
        <div class="workspace">
            <h3>工作经历</h3>
            <div class="w-mid">
                <div>
                    <h4 style="margin: 0">南京贝吉塔网络科技有限公司</h4>
                    <span style="margin: 5px 0;color: #303133">web前端工程师</span>
                    <span>2019.2-2019.1</span>
                    <h5>所属部门：技术部</h5>
                </div>
                <img src="../assets/accord.jpg" alt="">
            </div>
            <div class="w-bottom">
                <div>
                    <span v-for="(item,index) in proList" :key="index">{{item}}</span>
                </div>
                <div>
                    <p>1:使用vue+mintUI+jsSDK开发基于企业微信的第三方服务应用</p>
                    <p>2:使用微信小程序+weUI开发武进职工互助保障小程序.</p>
                    <p>3:使用vue+elementUI，开发过后台管理系统.</p>
                    <p>4:维护公司之前使用jquery+bootstrap开发过的后台管理系统。</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Onlineinfo",
        data() {
            return {
                tlist: [
                    'div+css布局', 'vue+mintUI', '小程序'
                ],
                proList:[
                    'h5项目','小程序项目','后台管理系统'
                ]
            }
        }
    }
</script>

<style scoped>
    /* 自我描述样式*/
    .s-main {
        height: 200px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        width: 98%;
        margin-left: 1%;
    }

    .s-main > div:nth-child(1) {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        padding-left: 10px;
    }

    .s-main > div:nth-child(1) > span {
        background-color: #dcdfe6;
        color: #303133;
        font-size: 13px;
        padding: 3px 7px;
        margin-right: 15px;
    }

    .s-main > div:nth-child(2) {
        width: 100%;
        flex: 1;
        padding: 0 15px 10px 10px;
        box-sizing: border-box;
        font-size: 14px;
        color: #606266;
        text-indent: 15px;
    }

    /*教育经历样式*/
    .education {
        border-bottom: 1px solid #EBEEF5;
    }

    .education > .e-bottom {
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .education > .e-bottom > div {
        display: flex;
        flex-direction: column;
    }

    .education > .e-bottom > img {
        width: 80px;
        height: 80px;
        margin-bottom: 7px;
    }

    .education > .e-bottom > div > h4 {
        margin: 0 0 3px 0;
    }

    .education > .e-bottom > div > span {
        font-size: 14px;
        color: #606266;
    }

    .education > .e-bottom > div > span:nth-child(3) {
        margin: 8px 0;
    }

    /*    工作经历样式*/
    .workspace{
        margin-top: 15px;
        margin-bottom: 25px;
    }
    .w-mid {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .w-mid>div{
        display: flex;
        flex-direction: column;
    }
    .w-mid>div>span{
        display: flex;
        flex-direction: column;
        font-size: 14px;
        color: #606266;
    }
    .w-mid>img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .w-bottom{
        height: 220px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        width: 98%;
        margin-left: 1%;
    }
    .w-bottom>div:nth-child(1){
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        padding-left: 10px;
    }
    .w-bottom>div:nth-child(1)>span{
        background-color: #dcdfe6;
        color: #303133;
        font-size: 13px;
        padding: 3px 7px;
        margin-right: 15px;
    }
    .w-bottom>div:nth-child(2){
        width: 100%;
        flex: 1;
        padding: 0 15px 10px 10px;
        box-sizing: border-box;
        font-size: 14px;
        color: #606266;
    }
    .w-bottom>div:nth-child(2)>p{
        margin: 5px 0;
        text-indent: 10px;
    }
</style>
