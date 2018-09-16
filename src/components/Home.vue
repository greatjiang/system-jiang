<template>
  <div>
    <div class="my-wrapper">
      <img class="my-bg" src="../../static/bg.jpg" alt="">
      <div class="my-name">草原王子</div>
      <img class="my-avatar" src="../../static/avatar.jpeg" alt="">
    </div>
    <friend></friend>
  </div>
</template>
<script>
import 'amfe-flexible'
// import axios from 'axios'

import Friend from '@/components/common/Friend.vue'

export default {
  name: 'Home',
  components: {
    friend: Friend
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.$axios.get(
        '/api/getData'
      ).then(res => {
        console.log(res.data)
      }).catch(e => {
        console.log(e)
      })
    }
  }
}
</script>
<style scoped>
  .my-wrapper {
    position: relative;
    width: 10rem;
    height: 6.666667rem /* 500/75 */;
  }
  .my-bg {
    width: 10rem;
    height: 6.666667rem /* 500/75 */;
  }
  .my-name {
    position: absolute;
    right: 2.266667rem /* 170/75 */;
    text-align: right;
    bottom: 0;
    width: 7.733333rem /* 580/75 */;
    height: .666667rem /* 50/75 */;
    line-height: .666667rem /* 50/75 */;
    padding-right: .266667rem /* 20/75 */;
    box-sizing: border-box;
    color: #fff;
    font-size: .4rem /* 30/75 */;
  }
  .my-avatar {
    position: absolute;
    right: .666667rem /* 50/75 */;
    bottom: -.266667rem /* 20/75 */;
    width: 1.6rem /* 120/75 */;
    height: 1.6rem /* 120/75 */;
    border: .026667rem /* 2/75 */ solid #eee;
    box-sizing: border-box;
  }
</style>
