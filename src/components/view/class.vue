<template>
    <scroller class="scroller">
        <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
            <text class="indicator-text">Refreshing ...</text>
            <loading-indicator class="indicator"></loading-indicator>
        </refresh>
        <div class="container">
            <div class="wxc-demo">
                <wxc-searchbar ref="wxc-searchbar" placeholder="搜索班级" theme="red" @wxcSearchbarCancelClicked="wxcSearchbarCancelClicked"
                               @wxcSearchbarInputReturned="wxcSearchbarInputReturned" @wxcSearchbarInputOnInput="wxcSearchbarInputOnInput"
                               @wxcSearchbarCloseClicked="wxcSearchbarCloseClicked" @wxcSearchbarInputOnFocus="wxcSearchbarInputOnFocus"
                               @wxcSearchbarInputOnBlur="wxcSearchbarInputOnBlur"></wxc-searchbar>
            </div>
            <div class="addClass" @click="addBtn()">
                <div><text class="addBtn">+添加班级</text></div>
            </div>
            <!-- 班级列表 -->
            <div class="class-box"v-for="num in lists">
                <div class="class-list" @click="jumpClass()" >
                    <div class="list-top flex-direction">
                        <div class="list-left">
                            <image class="userifore" style="width:100px;height:100px" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2922170376,2371336021&fm=27&gp=0.jpg"></image>
                        </div>
                        <div class="list-rigt flex-column">
                            <div class="flex-direction com-mb20">
                                <text class="com-font20">四</text> <text class="com-font20">(2)</text>
                            </div>
                            <div class="flex-direction">
                                <text class="com-font20">教师:</text>
                                <text class="com-font20 com-mr10">l李亚男</text>
                                <text class="com-font20">班级号:</text>
                                <text class="com-font20 com-mr10">513585</text>
                            </div>
                        </div>
                    </div>
                    <div class="list-bottom flex-direction">
                        <div class="flex-direction"><wxc-icon name="success"size="xs"></wxc-icon><text class="com-font20"> 班级文件</text></div>
                        <div class="flex-direction"><wxc-icon name="success" size="xs"></wxc-icon><text class="com-font20"> 班级文件</text></div>
                        <div class="flex-direction"><wxc-icon name="success" size="xs"></wxc-icon><text class="com-font20"> 班级文件</text></div>
                    </div>
                </div>
            </div>
        </div>
    </scroller>
</template>
<style>
    .com-font20 {
        font-size: 25px;
    }

    .com-mb20 {
        margin-bottom: 10px;
    }

    .com-mr10 {
        margin-right: 10px;
    }

    .flex-direction {
        align-items: center;
        flex-direction: row
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
        border-radius: 10px;
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
    .refresh {
        width: 750;
        display: -ms-flex;
        display: -webkit-flex;
        display: flex;
        -ms-flex-align: center;
        -webkit-align-items: center;
        -webkit-box-align: center;
        align-items: center;
    }
    .indicator-text {
        color: #888888;
        font-size: 42px;
        text-align: center;
    }
    .indicator {
        margin-top: 16px;
        height: 40px;
        width: 40px;
        color: blue;
    }
</style>
<script>
    import { WxcSearchbar} from 'weex-ui'
    import { WxcIcon } from 'weex-ui'
    const modal = weex.requireModule('modal')
    export default {
        components: {
            WxcSearchbar,WxcIcon
        },
        data: () => ({
            refreshing: false,
            lists: [1, 2, 3, 4, 5]
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
            onrefresh (event) {
                modal.toast({ message: 'Refreshing', duration: 1 })
                this.refreshing = true
                setTimeout(() => {
                    this.refreshing = false
                }, 2000)
            },
            onpullingdown (event) {
                console.log("dy: " + event.dy)
                console.log("pullingDistance: " + event.pullingDistance)
                console.log("viewHeight: " + event.viewHeight)
                console.log("type: " + event.type)
            },
            addBtn(){
                this.$router.push({ name: 'addClass'})
            },
            jumpClass(){
                this.$router.push({ name: 'classDetail'})
            }
        }
    };
</script>
