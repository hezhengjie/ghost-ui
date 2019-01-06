<template>
  <a class="badge"  target="_blank">
    <span class="badge-left">{{badgeName||type}}</span>
    <span class="badge-right">{{badgeValue || '0'}}</span>
  </a>
</template>
<script>
  export default{
    data() {
      return {
        badgeName: '',
        badgeValue: ''
      }
    },
    props: {
      type: {
        type: String,
        default () {
          return ''
        }
      }
    },
    mounted() {
    },
    methods: {
    }
  }
</script>
<style lang="stylus">
  .badge
    display: inline-block
    text-align: center
    border: 1px #4AA8FF solid
    border-radius: 3px
    color: #545454
    margin: 5px
    overflow: hidden
    &:hover
      color: #545454
    span
      display: inline-block
      font-size: 12px
    .badge-left
      padding: 4px 10px
      color: #fff
      background-color: #89C6FF
    .badge-right
      padding: 4px 10px
      border-left: 1px #4AA8FF solid
      background-color: white
</style>
