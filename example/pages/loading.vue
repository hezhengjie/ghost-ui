<template>
  <div class="loading-group">
    <g-loading ></g-loading>
      <g-loading size="middle"></g-loading>
      <g-loading size="large"></g-loading>
      
  </div>
</template>

<style lang="stylus" scoped>
  .loading-group
    margin:20px;
    text-align:center;
</style>
<script>
export default {
  data() {
    return {
      bg: '#000',
      color: '#f63',
      border: 'none'
    }
  },
  methods: {
    handleClick() {
      alert('oh ha')
    }
  }
}
</script>

 
