<template>
  <div class="demo-wraper">
    <iframe :src="demoUrl" frameborder="0"></iframe>
  </div>
</template>

<style lang="stylus" scoped>
.demo-wraper
  width :375px;
  height :500px;
  iframe 
    width 100%;
    height 100%;
</style>

<script type="text/ecmascript-6">
  export default {
    props: {
      hash: {
        type: String,
        default: ''
      }
    },
    computed: {
      demoUrl() {
        let baseUrl = 'http://localhost:8081';
        return `${baseUrl}/#${this.hash}`;
      }
    }
  }
</script>

 
