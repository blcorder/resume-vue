<template>
    <div id="container">
        <div class="c-box">
            <header class="header">今日要做:</header>
            <ul class="main">
                <li @click="changeState(index)" v-for="(item,index) in todoList" :key="index">
                    <input :checked="item.isDone" type="checkbox"/>{{item.text}}
                </li>
            </ul>
            <footer class="footer">
                <mt-button @click="addMsg" type="primary" size="small">增加</mt-button>
                <mt-button type="danger" size="small">删除</mt-button>
                <mt-button type="primary" size="small">修改</mt-button>
                <mt-button type="danger" size="small">查找</mt-button>
                <mt-button type="primary" size="small">保存</mt-button>
            </footer>
            <textarea name="" id="" cols="30" rows="10" onresize=""></textarea>
        </div>
    </div>
</template>

<script>
    import {addMsg} from '../serves/index'

    export default {
        name: "Todaylist",
        data() {
            return {
                todoList: []
            }
        },
        methods: {
            changeState(index) {
                this.todoList[index].isDone = !this.todoList[index].isDone;
            },
            addMsg() {

            }

        },
        mounted() {
            addMsg('/addMsg').then(res => {
                this.todoList = res.todoList;
            })
        }
    }
</script>

<style scoped>
    #container {
        width: 100%;
        height: 100%;
        background-color: #f4f4f4;
        padding-bottom: 50px;
        box-sizing: border-box;
        overflow: scroll;
    }

    .c-box {
        width: 100%;
        height: 100%;
        background-color: #f4f4f4;
        display: flex;
        flex-direction: column;
    }

    .c-box header {
        height: 60px;
        width: 100%;
        border-bottom: 2px solid #f4f4f4;
        line-height: 60px;
        padding-left: 15px;
        margin: 0;
        box-sizing: border-box;
        background-color: #fff;
        color: #d81e06;
        font-size: 16px;
    }

    .c-box ul {
        width: 100%;
        height: 350px;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        overflow-y: scroll;
        background-color: #fff;
    }

    ul li {
        list-style: none;
        height: 50px;
        line-height: 50px;
        box-sizing: border-box;
        border-bottom: 1px solid #f1f1f1;
    }

    .footer {
        height: 50px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        box-sizing: border-box;
        border-top: 2px solid #f4f4f4;
        background-color: #fff;
    }

    textarea {
        flex: 1;
        width: 100%;
        outline: none;
        margin: 15px 0;
        border: none;
        box-sizing: border-box;
        text-indent: 15px;
        padding: 10px 0 0 0;
        font-size: 14px;
    }
</style>
