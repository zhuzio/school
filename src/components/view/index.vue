<template>
  <div>
    <new-list></new-list>
  </div>

</template>
<script>
    import newlist from '../page/indexNews'
    var navigator = weex.requireModule('navigator')
    var modal = weex.requireModule('modal')
    export default {
        name: "index",
        components: {
          'new-list':newlist,
        },
        // var navigator = weex.requireModule('navigator')
        data () {
            return{

            }
        },
        methods: {
            jump (event) {
                this.$router.push('/detail');
                // console.log('will jump')
                /*navigator.push({
                    url: '/detail',
                    animated: "true"
                })*/
            }
        }
    }
</script>

<style scoped>
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
  .panel {
    width: 600px;
    height: 250px;
    margin-left: 75px;
    margin-top: 35px;
    margin-bottom: 35px;
    flex-direction: column;
    justify-content: center;
    border-width: 2px;
    border-style: solid;
    border-color: #DDDDDD;
    background-color: #F5F5F5;
  }
  .text {
    font-size: 50px;
    text-align: center;
    color: #41B883;
  }
</style>
