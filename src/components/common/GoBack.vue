<template>
  <div class="nav-wrapper" @click="back">
    <div class="arrow-left"></div>
    <div class="nav-title">返回</div>
  </div>
</template>
<script>
export default {
  name: 'GoBack',
  methods: {
    back () {
      this.$emit('backaction')
      // this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
  .nav-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 10rem;
    height: 80px;
    line-height: 80px;
    font-size: 0;
    background: rgba(243, 242, 242, 0.4);
    padding-left: 20px;
    box-sizing: border-box;
    z-index: 101;
  }
  .arrow-left {
    width: 40px;
    height: 40px;
    line-height: 40px;
    background: url('../../../static/arrow-left.png') no-repeat;
    background-size: 100%;
    display: inline-block;
    vertical-align: middle;
  }
  .nav-title {
    width: 100px;
    height: 50px;
    line-height: 50px;
    vertical-align: middle;
    display: inline-block;
    font-size: 30px;
    color: rgb(173, 172, 172);
  }
</style>
