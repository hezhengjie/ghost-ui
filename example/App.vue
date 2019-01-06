<template>
  <div id="app">
    <header class="ghost-bar">
      <h1>Ghost-UI</h1>
    </header>
    <section class="ghost-content" >
      <router-view></router-view>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {}
    },
    components: {
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  html, body, #app
    height: 100%
    margin:0

  body
    background-color: #fff
    overflow: hidden
  p 
    margin:0
    padding:0

  .ghost-bar
    z-index: 10
    position: absolute
    right: 0
    left: 0
    text-align: center
    background-color: #EDF0F4
    box-shadow: 0 2px 1px #e9eaea
    -webkit-backface-visibility: hidden
    backface-visibility: hidden
    h1
      font-size: 18px
      font-weight: 500

  .ghost-content
    position: absolute
    top: 44px
    left: 0
    right: 0
    bottom: 0
    overflow: scroll
    -webkit-overflow-scrolling: touch
    padding :10px
   
</style>
