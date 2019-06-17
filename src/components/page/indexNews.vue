<template>

    <scroller class="scroller">
        <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
            <text class="indicator-text">Refreshing ...</text>
            <loading-indicator class="indicator"></loading-indicator>
        </refresh>
        <!--<div class="cell" v-for="num in lists">
            <div class="panel">
                <text class="text">{{num}}</text>
            </div>
        </div>-->
        <div class="index-news-container">
            <div class="index-news-list" v-for="num in lists"style="padding-top: 20px">
                <!--<div class="index-news-title">
                    <div class="index-news-tag">
                        <text class="iconfont bar-ic">&#xe644;</text>
                        <text>打卡</text>
                    </div>
                </div>-->
                <div class="index-news-info">
                    <image src="http://www.jiqie.com/e/21.gif" class="index-news-head-img"></image>
                    <text class="index-news-name">四（二）班 （李亚男）</text>
                </div>
                <div class="index-news">
                    <text class="index-news-title-name">每日朗读</text>
                    <text class="index-news-txt">今天起，每日坚持打卡。用语音或视频 记录孩子的朗读内容，并文字记录所读页数，坚持21天， 相信您的也会爱上朗读。</text>
                </div>
                <div class="index-news-date">
                <div><text>06/11 10:34</text></div>
                <div>
                    <wxc-button text="参与" @wxcButtonClicked="wxcButtonClicked" size="small" class="index-btn"></wxc-button>
                </div>
            </div>
            </div>
        </div>
    </scroller>
</template>

<script>
    import { WxcButton } from 'weex-ui'
    const modal = weex.requireModule('modal')
    export default {
        components: { WxcButton },
        data () {
          return{
              refreshing: false,
              lists: [1, 2, 3, 4, 5]
          }
        },
        methods: {
            wxcButtonClicked (e) {
                console.log(e)
            },
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
        },
        created(){
            let domModule = weex.requireModule('dom');
            domModule.addRule('fontFace',{
                'fontFamily': "iconfont",
                'src': "url('http://at.alicdn.com/t/font_1239300_vmzkez3cjaf.ttf')"
            })
        }
    }
</script>

<style scoped>
    .refresh {
        width: 750px;
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
    .index-news-container {
        width: 720px;
        height: auto;
        margin-left: 15px;

    }
    .index-news-list{
        width: 720px;
        height: auto;
        margin-top: 35px;
        margin-bottom: 35px;
        flex-direction: column;
        justify-content: center;
        border-width: 2px;
        border-style: solid;
        border-color: #DDDDDD;
        background-color: #b49a76;
        border-radius: 20px;
    }
    .index-news-title{
        width: 100%;
    }
    .index-news-info{
        flex-direction: row;
        justify-items: center;
        align-items: center;
        padding-left: 15px;
    }
    .index-news-head-img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .index-news-name{
        margin-left: 15px;
    }
    .index-news{
        padding: 15px;
    }
    .index-news-title-name{
        font-size: 32px;
        color: white;
        font-weight: 600;
    }
    .index-news-txt{
        font-size: 26px;
        color: white;
        padding-top: 10px;
        padding-bottom: 10px;
        line-height: 35px;
    }
    .index-news-date{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
    }
    .index-btn{
        padding-top: 30px;
        padding-bottom: 30px;
        background-color: goldenrod;
    }
</style>
