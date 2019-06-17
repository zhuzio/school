<template>
    <scroller class="scroller">
        <div class="container">
            <div class="title">
                <text class="com-font20">如果不知道班级号，可输入老师手机号查找他创建的班级</text>
            </div>
            <div class="wxc-demo">
                <wxc-searchbar ref="wxc-searchbar" placeholder="请输入老师给你的六位班级号" theme="red" @wxcSearchbarCancelClicked="wxcSearchbarCancelClicked"
                    @wxcSearchbarInputReturned="wxcSearchbarInputReturned" @wxcSearchbarInputOnInput="wxcSearchbarInputOnInput"
                    @wxcSearchbarCloseClicked="wxcSearchbarCloseClicked" @wxcSearchbarInputOnFocus="wxcSearchbarInputOnFocus"
                    @wxcSearchbarInputOnBlur="wxcSearchbarInputOnBlur"></wxc-searchbar>
            </div>
            <div class="addClass">
               <wxc-button text="查找班级"
               type="yellow"
              ></wxc-button>
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
    .addClass{
         margin: 20px 0;
         align-items: center;
    }
    .title{
        margin: 20px 0;
        padding-left: 20px;
        align-items: flex-start;
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
        }),
        methods: {
            wxcSearchbarInputOnFocus() {},
            wxcSearchbarInputOnBlur() {},
            wxcSearchbarInputReturned() {},
            wxcSearchbarCloseClicked() {},
            wxcSearchbarInputOnInput(e) {},
            wxcSearchbarCancelClicked() {},
            wxcSearchbarInputDisabledClicked() {},
            wxcSearchbarDepChooseClicked() {}
        }
    };
</script>
