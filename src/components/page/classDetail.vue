<template>
    <scroller class="scroller">
        <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
          <text class="indicator-text">Refreshing ...</text>
          <loading-indicator class="indicator"></loading-indicator>
        </refresh>
        <div class="container">
            <!-- 头部 -->
            <div class="classTop" @click="jump()">
                <div class="class-box" >
                    <div class="list-top flex-direction com-mb20 com-pb" >
                        <div class="list-left">
                            <image class="userifore" style="width:100px;height:100px" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560600608978&di=e7298789a93009eccf79470379f231fa&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201209%2F28%2F20120928092639_UHyuz.thumb.700_0.jpeg"></image>
                        </div>
                        <div class="list-rigt flex-column">
                            <div class="flex-direction com-mb20">
                                <text class="com-font20">四</text> <text class="com-font20">(2)</text>
                            </div>
                            <div class="flex-direction com-mb20">
                                <text class="com-font20">班级号:</text>
                                <text class="com-font20 com-mr10">513585</text>
                            </div>
                            <div class="flex-direction">
                                <text class="com-font20 com-mr10">1人</text>
                                <text class="com-font20">班级号:</text>
                                <text class="com-font20 com-mr10">3人</text>
                            </div>
                        </div>
                    </div>
                    <div class="list-bottom flex-direction ">
                        <div class="flex-direction com-rl"><wxc-icon name="success"size="xs"></wxc-icon><text class="com-font20"> 消息</text></div>
                        <div class="flex-direction"><wxc-icon name="success" size="xs"></wxc-icon><text class="com-font20"> 通讯录</text></div>
                       <div class="flex-direction"><wxc-icon name="success" size="xs"></wxc-icon><text class="com-font20"> 文件</text></div>
                       <div class="flex-direction"><wxc-icon name="success" size="xs"></wxc-icon><text class="com-font20"> 成长记录</text></div>
                    </div>
                </div>
            </div>
            <!-- 班级列表 -->
            <div class="class-box"v-for="num in lists" >
                <div class="class-list"style="background-color: #363636;border-radius:5px" >
                    <div class="list-top flex-direction">
                        <div class="list-left com-mr10">
                            <image class="userifore" style="width:100px;height:100px" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2922170376,2371336021&fm=27&gp=0.jpg"></image>
                        </div>
                        <div class="list-rigt flex-column com-mb20">
                            <div class="flex-direction com-mb20">
                                <text class="com-font20 color-yellow" >四</text> <text class="com-font20 color-yellow">(2)</text>
                            </div>
                        </div>
                    </div>
                    <div class="listmode">
                        <text class="com-font30 color-f5">有时候为了兼容性或者为了增强某个端上的能力，需要编写平台特异的代码。 Weex 提供了 weex.config.env 和全局的 WXEnvironment 变量（它们是等价的）来获取当前执行环境的信息。
                        </text>
                    </div>
                    <div class="list-bottom flex-direction">
                        <div class="flex-direction"><text class="color-f5">06/11  10:34</text></div>
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
    .com-font30 {
        font-size: 30px;
    }
    .com-mb20 {
        margin-bottom: 10px;
    }
    .com-pb{
        padding-bottom: 40px;
    }
    .com-mr10 {
        margin-right: 10px;
    }
    .color-yellow{
        color: yellow;
    }
    .color-f5{
        color: #F5F5F5;
    }
    .flex-direction {
        align-items: center;
        flex-direction: row
    }
    .flex-btw{
        justify-content: space-between;
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
        border-radius: 50%;
    }

    .list-top {
        padding: 30px;

    }

    .list-rigt {
        margin-left: 10px;
        flex: 1;
        font-size: 26px;
    }
    .list-bottom{
        margin: 10px 0;
         justify-content: space-between;
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
    .classTop{
        margin-top: 20px;
        margin-bottom: 40px;
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
              jump(){
                  this.$router.push({ name: 'classMessage'})
              }
        }
    };
</script>
