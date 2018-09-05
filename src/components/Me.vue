<template>
  <div class="me-wrapper">
    <div class="user-wrapper">
      <img class="avatar" src="../../static/avatar.jpeg" alt="">
      <div class="user-mes">
        <div class="user-name">
          草原王子
        </div>
        <div class="wx-num">
          微信号：prince666
        </div>
      </div>
    </div>
    <div class="column" @click="gomusic">
      <div class="column-icon"></div>
      <div class="column-name">
        音乐盒
      </div>
      <div class="arrow-right"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Me',
  data () {
    return {
      mes: 'jiang'
    }
  },
  methods: {
    gomusic () {
      this.$router.push({
        path: '/musiclist'
      })
    }
  }
}
</script>
<style scoped>
  .me-wrapper {
    background-color: rgb(248, 247, 247);
    position: fixed;
    width: 10rem;
    height: 100%;
    padding-top: .333333rem /* 25/75 */;
  }
  .user-wrapper {
    width: 10rem;
    height: 2rem /* 150/75 */;
    padding: .2rem 0 /* 15/75 */;
    padding-left: .333333rem /* 25/75 */;
    box-sizing: border-box;
    background-color: #fff;
  }
  .avatar {
    width: 1.6rem /* 120/75 */;
    height: 1.6rem /* 120/75 */;
    border-radius: .1rem;
    border: .02rem solid #eee;
    box-sizing: border-box;
    display: inline-block;
  }
  .user-mes {
    width: 6.666667rem /* 500/75 */;
    height: 1.6rem /* 120/75 */;
    vertical-align: top;
    display: inline-block;
    padding-left: .266667rem /* 20/75 */;
    box-sizing: border-box;
  }
  .user-name {
    width: 2.666667rem /* 200/75 */;
    height: .8rem /* 60/75 */;
    line-height: .8rem /* 60/75 */;
    font-size: .4rem /* 30/75 */;
    color: rgb(49, 46, 46);
  }
  .wx-num {
    width: 5.333333rem /* 400/75 */;
    height: .8rem /* 60/75 */;
    line-height: .8rem /* 60/75 */;
    font-size: .24rem /* 18/75 */;
    color: rgb(49, 46, 46);
  }
  .column {
    width: 10rem;
    height: 50px;
    line-height: 50px;
    font-size: 0;
    background-color: #fff;
    margin-top: 30px;
  }
  .column-icon {
    width: 40px;
    height: 40px;
    background: url('../../static/musicbox.png') no-repeat;
    background-size: 100%;
    display: inline-block;
    vertical-align: middle;
    margin-left: 30px;
  }
  .column-name {
    width: 200px;
    height: 50px;
    line-height: 50px;
    display: inline-block;
    vertical-align: middle;
    font-size: 28px;
    color: rgb(63, 60, 60);
    padding-left: 25px;
  }
  .arrow-right {
    width: 40px;
    height: 40px;
    line-height: 40px;
    vertical-align: middle;
    display: inline-block;
    background:url('../../static/arrow-right.png') no-repeat;
    background-size: 100%;
    margin-left: 400px;
  }
</style>
