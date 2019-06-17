<template>
    <scroller class="scroller" style="background-color: #2B2B2B;">
        <div class="container">
            <div>
                 <div class="demo ">
                    <list class="message-list">
                        <cell class="flex-direction">
                            <text class="com-font30">班徽</text>
                             <image class="userifore" style="width:100px;height:100px" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2922170376,2371336021&fm=27&gp=0.jpg"></image>
                        </cell>
                    </list>
                    <list class="message-list">
                        <cell class="flex-direction">
                            <text class="com-font30">班级名称</text>
                              <text class="com-font30">四2班</text>
                        </cell>
                    </list>
                </div>
            </div>
            <div>
                <text class="title">所属校园</text>
                 <div class="demo ">
                    <list class="message-list">
                        <cell class="flex-direction">
                            <text class="com-font30">所属学校</text>
                              <text class="com-font30">四(2)</text>
                        </cell>
                    </list>
                    <list class="message-list">
                        <cell class="flex-direction">
                            <text class="com-font30">真实班级</text>
                              <text class="com-font30">小学四年级2班</text>
                        </cell>
                    </list>
                </div>
            </div>
            <div>
                <text class="title">班级内称呼</text>
                 <div class="demo ">
                    <list class="message-list">
                        <cell class="flex-direction">
                            <text class="com-font30">所属学校</text>
                            <div class="flex-direction">
                                <text class="com-font30">丞丞爸爸</text>
                                <wxc-icon name="more"></wxc-icon>
                            </div>
                        </cell>
                    </list>
                </div>
            </div>
             <div>
                <text class="title">班级管理</text>
                 <div class="demo ">
                    <list class="message-list">
                        <cell class="flex-direction">
                            <text class="com-font30">退出此班级</text>
                                <wxc-icon name="more"></wxc-icon>
                        </cell>
                    </list>
                </div>
            </div>
        </div>
    </scroller>
</template>
<style>
    .container {
        width: 750px;
        padding: 10px;
        background-color: #2B2B2B;
        
    }
    .com-font30{
         font-size: 30x;
         color: #F7F7F7;
    }
    .demo {
        margin-bottom: 20px;
        background-color: #363636;
        padding: 20px 0;
        border-radius: 5px;
    }
    .flex-direction {
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
        }
    .image {
        width: 80px;
        height: 80px;
        margin-right: 20px;
    }
    .message-list{
        padding: 20px;
    }
    .title{
       color: #f9f9f9; 
       font-size: 28px;
       margin: 10px 0;
    }
</style>
<script>
    import {
        WxcCell
    } from 'weex-ui';
    import {
        WxcIcon
    } from 'weex-ui'
    export default {
        components: {
            WxcCell,
            WxcIcon
        },
        methods: {
            wxcCellClicked() {
                this.$router.push({
                    name: 'grow'
                })
            }
        }
    };
</script>
