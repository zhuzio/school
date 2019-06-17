<template>
    <scroller class="scroller">
        <div class="container">
            <div class="wxc-demo">
                <wxc-searchbar ref="wxc-searchbar" placeholder="搜索" theme="red" @wxcSearchbarCancelClicked="wxcSearchbarCancelClicked"
                               @wxcSearchbarInputReturned="wxcSearchbarInputReturned" @wxcSearchbarInputOnInput="wxcSearchbarInputOnInput"
                               @wxcSearchbarCloseClicked="wxcSearchbarCloseClicked" @wxcSearchbarInputOnFocus="wxcSearchbarInputOnFocus"
                               @wxcSearchbarInputOnBlur="wxcSearchbarInputOnBlur"></wxc-searchbar>
            </div>
            <!-- 班级列表 -->
            <div class="class-box"v-for="num in lists">
                <div class="class-list" @click="jump()" >
                    <div class="list-top flex-direction flex-align">
                        <div class="list-left">
                            <image class="userifore" style="width:120px;height:120px" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2922170376,2371336021&fm=27&gp=0.jpg"></image>
                        </div>
                        <div class="list-rigt flex-column">
                            <div class="flex-direction flex-content com-mb20">
                                <text class="com-font30">李亚男</text>
                                <text class="com-font30">06/11 11:53</text>
                            </div>
                            <div class="flex-direction">
                                <text class="com-font20">教师:</text>
                                <text class="com-font20 com-mr10">l李亚男</text>
                                <text class="com-font20">班级号:</text>
                                <text class="com-font20 com-mr10">513585</text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="addClass">
                <div><text class="addBtn">+联系教师</text></div>
            </div>
        </div>
    </scroller>
</template>
<style>
    .com-font20 {
        font-size: 25px;
    }
    .com-font30 {
        font-size: 30px;
    }
    .com-mb20 {
        margin-bottom: 20px;
    }

    .com-mr10 {
        margin-right: 10px;
    }

    .flex-direction {
        align-items: center;
        flex-direction: row
    }
    .flex-align{
        align-content:space-between;
    }
    .flex-content{
        justify-content:space-between
    }
    .flex-column {
        flex-direction: column
    }

    .scroller {
        background-color: #fff;
    }

    .wxc-demo {
        background-color: #2b2b2b;
    }

    .addClass {
        display: flex;
        align-items: center;
        margin: 20px 50px;
        padding: 10px 20px;
        /* background-color: black; */
        border-width: 3px;
        border-style: dashed;
        border-color: red;
        border-radius: 5px;
    }

    .addBtn {
        padding: 10px 20px;
        font-size: 30px;

    }

    .class-box {
        padding: 0 20px;
        font-size: 20px;
        margin-bottom: 20px;
    }

    .class-list {
        padding: 0 20px;
        background-color: #f7f7f7;
    }

    .userifore {
        border-radius:50%;
    }

    .list-top {
        padding: 10px;

    }

    .list-rigt {
        margin-left: 10px;
        flex: 1;
        font-size: 26px;
    }
    .list-bottom{
        margin: 10px 0;
        justify-content:space-around
    }
</style>
<script>
    import { WxcSearchbar} from 'weex-ui'
    import { WxcIcon } from 'weex-ui'
    export default {
        components: {
            WxcSearchbar,WxcIcon
        },
        data: () => ({
            lists: [1,2,3,4,5]
        }),
        methods: {
            wxcSearchbarInputOnFocus() {},
            wxcSearchbarInputOnBlur() {},
            wxcSearchbarInputReturned() {},
            wxcSearchbarCloseClicked() {},
            wxcSearchbarInputOnInput(e) {},
            wxcSearchbarCancelClicked() {},
            wxcSearchbarInputDisabledClicked() {},
            wxcSearchbarDepChooseClicked() {},
            jump(){
                this.$router.push({ name: 'chatDetail'})
            }
        }
    };
</script>
