<template>
    <wxc-tab-bar :tab-titles="tabTitles"
                 :tab-styles="tabStyles"
                 title-type="iconFont"
                 :is-tab-view="true"
                 @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
        <!-- 第一个页面内容-->
        <div class="item-container" :style="contentStyle">
            <index></index>
        </div>

        <!-- 第二个页面内容-->
        <div class="item-container" :style="contentStyle">
            <grade></grade>
        </div>

        <!-- 第三个页面内容-->
        <div class="item-container" :style="contentStyle">
            <growthRecord></growthRecord>
        </div>

        <!-- 第四个页面内容-->
        <div class="item-container" :style="contentStyle">
            <chat></chat>
        </div>

        <!-- 第五个页面内容-->
        <div class="item-container" :style="contentStyle">
            <my></my>
        </div>
    </wxc-tab-bar>
</template>

<style scoped>
    .item-container {
        width: 750px;
        background-color: #f2f3f4;
        align-items: center;
        justify-content: center;
    }
</style>
<script>
    import { WxcTabBar, Utils } from 'weex-ui';
    import Config from './config'
    import index from '../view/index'
    import grade from '../view/class'
    import growthRecord from '../view/growthRecord'
    import chat from '../view/chat'
    import my from '../view/my'

    export default {
        components: {
            WxcTabBar,
            index,
            grade,
            growthRecord,
            chat,
            my
        },
        data: () => ({
            tabTitles: Config.tabIconFontTitles,
            tabStyles: Config.tabIconFontStyles
        }),
        created () {
            const tabPageHeight = Utils.env.getPageHeight();
            // 如果页面没有导航栏，可以用下面这个计算高度的方法
            // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750;
            const { tabStyles } = this;
            this.contentStyle = { height: (tabPageHeight - tabStyles.height) + 'px' };
        },
        methods: {
            wxcTabBarCurrentTabSelected (e) {
                const index = e.page;
                // console.log(index);
            }
        }
    };
</script>

<style scoped>

</style>
