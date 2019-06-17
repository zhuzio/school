<template>
    <scroller class="scroller">
        <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
          <text class="indicator-text">Refreshing ...</text>
          <loading-indicator class="indicator"></loading-indicator>
        </refresh>
        <div class="container">
            <!-- 班级列表 -->
            <div class="class-box"v-for="num in lists">
                <div class="class-list" >
                    <div class="list-top flex-direction">
                        <div class="list-left">
                            <image class="userifore" style="width:100px;height:100px" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2922170376,2371336021&fm=27&gp=0.jpg"></image>
                        </div>
                        <div class="list-rigt flex-column">
                            <div class="flex-direction com-mb20">
                                <text class="com-font20">丞丞爸爸</text> 
                            </div>
                            <div class="flex-direction">
                                <text class="com-font20 com-mr10">22分钟前</text>
                                <text class="com-font20">四(2)</text>
                            </div>
                        </div>
                    </div>
                    <!-- 图片 -->
                    <div class="list-imgbox">
                        <image class="examplesimg" resize="contain" :src="num"></image>
                    </div>
                    <!-- 留言 -->
                    <div class="list-message">
                        <text class="com-font30">测试测四测试次日后测信号和弟弟和诋毁我对测试测四测试次日后测信号和弟弟和诋毁我对测试测四测试次日后测信号和弟弟和诋毁我对测试测四测试次日后测信号和弟弟和诋毁我对 </text>
                    </div>
                    <div class="list-bottom flex-direction">
                        <div class="flex-direction"><wxc-icon name="success"size="xs"></wxc-icon><text class="com-font20"> 点亮</text></div>
                        <div class="flex-direction"><wxc-icon name="success" size="xs"></wxc-icon><text class="com-font20">评论</text></div>
                       <div class="flex-direction"><wxc-icon name="success" size="xs"></wxc-icon><text class="com-font20"> 分享</text></div>
                    </div>
                    <!-- 点赞区 -->
                    <div class="praise-box flex-direction ">
                        <image class="userifore-praise com-mr10"  src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2922170376,2371336021&fm=27&gp=0.jpg"></image>
                        <image class="userifore-praise com-mr10"  src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2922170376,2371336021&fm=27&gp=0.jpg"></image>
                    </div>
                </div>
            </div>
            <div class="listline">
                <text>我是有底线的</text>
            </div>
            <!-- add图标 -->
            <div class="addlist">
                       
             </div>
        </div>
    </scroller>
</template>
<style>
    .com-font20 {
        font-size: 28px;
    }
    .com-font30 {
        font-size: 30px;
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
    .class-box {
        padding: 0 20px;
        font-size: 20px;
        margin-bottom: 20px;
    }

    .class-list {
        padding: 0 10px;
        background-color: #f7f7f7;
    }
    .list-imgbox{
         align-items: center;
    }
    .userifore {
        border-radius: 50%;
    }
    .userifore-praise{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .examplesimg{
        width: 720px;
        height: 720px;
    }
    .list-top {
        padding: 20px  10PX;

    }

    .list-rigt {
        margin-left: 10px;
        flex: 1;
        font-size: 26px;
    }
    .list-bottom{
        margin: 30px 0;
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
    .list-message{
        margin: 20px 0;
    }
    .addlist{
        position: fixed;
        width: 100px;
        height: 100px;
        bottom: 100px;
        right: 20px;
        background-color: #f9e81e;
        border-radius:50% ;
    }
    .listline{
        margin: 100px 0;
        align-items: center;
    }
</style>
<script>
    import { WxcSearchbar} from 'weex-ui'
     import { WxcIcon } from 'weex-ui'
     import { WxcButton } from 'weex-ui'
      const modal = weex.requireModule('modal')
    export default {
        components: {
            WxcSearchbar,WxcIcon,WxcButton
        },
        data: () => ({
             refreshing: false,
             lists: ['https://img.alicdn.com/imgextra/i4/2455255188/TB2Z_LBi5CYBuNkSnaVXXcMsVXa_!!2455255188.jpg', 
             'https://img.alicdn.com/imgextra/i3/2200626881320/O1CN014wC7kc1LcbL0R3RlY_!!2200626881320.jpg',
            'https://img.alicdn.com/imgextra/i3/2200626881320/O1CN01O0hN4t1LcbKyh5rLo_!!2200626881320.jpg', 
           'https://img.alicdn.com/imgextra/i4/2455255188/TB2Z_LBi5CYBuNkSnaVXXcMsVXa_!!2455255188.jpg', 
            'https://img.alicdn.com/imgextra/i3/2200626881320/O1CN014wC7kc1LcbL0R3RlY_!!2200626881320.jpg']
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
              }
        }
    };
</script>
