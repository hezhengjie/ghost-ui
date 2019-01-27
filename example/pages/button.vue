<template>
  <div class="btn-group">
    <div class="btn">
      <g-button text="default按钮"></g-button>
    </div>
    <div class="btn">
      <g-button text="primary按钮" type="primary"></g-button>
    </div>
    <div class="btn">
      <g-button disabled text="disable按钮"></g-button>
    </div>    
    <div class="btn">
      <g-button text="自定义样式" type="primary" :bg="bg" :color="color" :border="border"></g-button>
    </div>
    <div>
      <div class="form-item">
        <label>背景色</label>
        <input type="text" v-model="bg" placeholder="背景色">
      </div>
      <div class="form-item">
        <label>文字颜色</label>
      <input type="text" v-model="color" placeholder="文字颜色">
      </div>
       <div class="form-item">
        <label>边框</label>
      <input type="text" v-model="border" placeholder="边框">
      </div>
    </div>
    <div class="btn">
      <g-button  @click="handleClick"></g-button>
    </div>  
  </div>
</template>

<style lang="stylus" scoped>
.btn-group
   .btn
     margin:10px 0;
   .form-item
     display:flex;
     margin 10px;
     label 
       font-size:14px;
       margin-right 10px;
       line-height :24px;
       width :20%;
     input
       border: 1px solid #e2e2e2;
       height: 20px;
       color: #000;
 
  
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

 
