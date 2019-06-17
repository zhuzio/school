<template>
  <div class="wrapper">
    <router-view></router-view>
    <!--<tabFoot></tabFoot>-->
  </div>
</template>

<script>
  import tabFoot from './components/tabFooter/tabFoot'
export default {
  name: 'App',
  components: {
    tabFoot
  },
  data () {
    return {

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
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 424px;
    height: 200px;
  }
  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }
</style>
