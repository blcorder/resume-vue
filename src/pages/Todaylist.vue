<template>
    <div id="container">
        <div class="c-box">
            <header class="header">今日要做:</header>
            <ul class="main">
                <li @click="changeState(item.text,item.isDone,index)" v-for="(item,index) in todoList" :key="index">
                    <img src="../assets/doneItem.png" v-if="item.isDone" alt="">
                    <img src="../assets/warning.png" v-if="!item.isDone" alt="">
                    <p>{{item.text}}</p>
                    <div @click.stop="toDetail()" class="arr-right">
                        <img src="../assets/arrow-right.png" alt="">
                    </div>
                </li>
                <li v-if="todoList.length === 0" style="text-align: center;font-size: 16px;color:#ccc;border: none">还没有任何日程哦...</li>
            </ul>
            <textarea v-model="textContent" placeholder="再此输入新日程" name="" id="" cols="30" rows="10"
                      onresize=""></textarea>
            <footer class="footer">
                <mt-button @click="addMsg" type="primary">增加</mt-button>
                <mt-button @click="removeDone" type="danger">删除</mt-button>
            </footer>
        </div>
    </div>
</template>

<script>
    import {getAllMsg, addItem, removeAllDone, updateState} from '../serves/index'
    import {Toast, MessageBox} from 'mint-ui'

    export default {
        name: "Todaylist",
        data() {
            return {
                todoList: [],
                textContent: ''
            }
        },
        methods: {
            // 1.0 点击日程选中或取消选中
            changeState(text, isDone, index) {
                let _this = this;
                let sItem = _this.todoList[index].isDone;
                if (isDone == 0) {
                    isDone = 1;
                } else if (isDone == 1) {
                    isDone = 0;
                }
                updateState({text, isDone}).then(res => {
                    if (res.code === 200) {
                        if (sItem == 0) {
                            _this.todoList[index].isDone = 1;
                        } else if (sItem == 1) {
                            _this.todoList[index].isDone = 0;
                        }
                    }
                });
            },
            // 2.0 点击添加按钮
            addMsg() {
                let _this = this;
                if(_this.textContent === ''){
                    Toast('日程内容不能为空!');
                    return
                }
                addItem({text: _this.textContent, isDone: 0}).then(res => {
                    this.getLastNewItem();
                    if (res.code === 200) {
                        Toast('添加成功!');
                        _this.textContent = '';
                    }
                }).catch(() => {
                    Toast('添加失败!');
                })
            },
            // 3.0 拿到所有日程
            getLastNewItem() {
                getAllMsg().then(res => {
                    this.todoList = res.msg;
                }).catch(() => {
                    Toast('日程数据获取失败!');
                })
            },
            // 4.0 查看完整
            toDetail() {
                // e.stopPropagation();
            },
            // 5.0 删除已经完成的
            removeDone() {
                let judgeIsDone = this.todoList.some((item)=>{
                    return item.isDone === 1
                });
                if(judgeIsDone){
                    MessageBox.confirm("您确定要删除已经完成的任务吗？").then(() => {
                        removeAllDone().then((res) => {
                            this.getLastNewItem();
                            Toast(res.msg);
                        })
                    })
                }else{
                    Toast('并没有已经完成的日程!')
                }
            }
        },
        mounted() {
            // 1.0 拿到所有日程
            this.getLastNewItem();
        }
    }
</script>

<style scoped>
    #container {
        width: 100%;
        height: 100%;
        background-color: #f4f4f4;
        padding-bottom: 60px;
        box-sizing: border-box;
        overflow-y: scroll;
        overflow-x: hidden;
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
        position: relative;
    }
    ul li > img {
        width: 20px;
        height: 20px;
        position: absolute;
        top: 50%;
        margin-top: -10px;
        left: 5px;
    }
    ul li > p {
        width: 300px;
        height: 100%;
        line-height: 100%;
        position: absolute;
        left: 30px;
        top: 0;
        z-index: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    ul li .arr-right {
        width: 60px;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 9999;
    }
    ul li .arr-right img {
        width: 20px;
        height: 20px;
        position: absolute;
        top: 50%;
        margin-top: -10px;
        right: 10px;
    }
    .footer {
        height: 80px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        box-sizing: border-box;
        border-top: 2px solid #f4f4f4;
        background-color: #f5f5f5;
        margin:15px;
    }
    .footer button{
        height: 40px;
        flex: 1;
        border-radius: 0;
        font-size: 15px;
    }
    textarea {
        flex: 1;
        width: 100%;
        outline: none;
        margin: 10px 0 0 0;
        border: none;
        box-sizing: border-box;
        text-indent: 15px;
        padding: 10px 0 0 0;
        font-size: 14px;
    }
</style>
