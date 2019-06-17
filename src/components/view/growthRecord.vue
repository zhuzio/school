<template>
    <scroller class="scroller">
        <div class="container">
            <div class="demo">
                <wxc-cell title="成长记录" :has-arrow="true" @wxcCellClicked="wxcCellClicked">
                    <image class="image"
                 slot="label"
                 src="https://img.alicdn.com/tfs/TB1eLvjSXXXXXaiXXXXXXXXXXXX-144-166.jpg"></image>
                </wxc-cell>
            </div>
           <div class="demo">
              <wxc-cell title="育儿好文" :has-arrow="true">
                  <image class="image"
               slot="label"
               src="https://img.alicdn.com/tfs/TB1eLvjSXXXXXaiXXXXXXXXXXXX-144-166.jpg"></image>
              </wxc-cell>
          </div>
           <div class="demo">
              <wxc-cell title="活动" :has-arrow="true">
                  <image class="image"
               slot="label"
               src="https://img.alicdn.com/tfs/TB1eLvjSXXXXXaiXXXXXXXXXXXX-144-166.jpg"></image>
              </wxc-cell>
          </div>
        </div>
    </scroller>    
</template>
<style>
    .container{
         width: 750px;
    }
    .demo{
        margin-bottom: 20px;
    }
    .image {
    width: 80px;
    height: 80px;
    margin-right: 20px;
  }
</style>
<script>
    import {WxcCell} from 'weex-ui';
    import { WxcIcon } from 'weex-ui'
    export default {
        components: {
            WxcCell,WxcIcon
        },
        methods: {
            wxcCellClicked(){
               this.$router.push({ name: 'classMessage'})
            }
        }
    };
</script>
