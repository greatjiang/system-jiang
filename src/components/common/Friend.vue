<template>
  <div class="friends-wrapper">
    <div class="friend" v-for="(item, index) in friednlist" :key="index">
      <img class="friend-avatar" src="../../../static/1.jpeg" alt="">
      <div class="friend-mes-wrapper">
        <div class="friend-name">草原公主</div>
        <div class="friend-mes">
          进程是系统资源分配的最小单位, 系统由一个个进程(程序)组成
          一般情况下，包括文本区域（text region）、数据区域（data region）和堆栈（stack region）。
          文本区域存储处理器执行的代码
          数据区域存储变量和进程执行期间使用的动态分配的内存；
          堆栈区域存储着活动过程调用的指令和本地变量。
        </div>
        <ul class="friend-photo-wrapper">
          <li><img src="../../../static/1.jpeg" alt=""></li>
          <li><img src="../../../static/1.jpeg" alt=""></li>
          <li><img src="../../../static/1.jpeg" alt=""></li>
          <li><img src="../../../static/1.jpeg" alt=""></li>
        </ul>
        <div class="clear-both"></div>
        <div class="time">1小时前</div>
        <div class="operate-btn">
          操作
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import 'amfe-flexible'

export default {
  name: 'Friend',
  data () {
    return {
      friednlist: [1, 1, 1]
    }
  }
}
</script>
<style scoped>
.friends-wrapper {
    width: 10rem;
    min-height: 13.333333rem /* 1000/75 */;
    margin-top: 30px;
    margin-bottom: 1.333333rem /* 100/75 */;
  }
  .friend {
    position: relative;
    padding: 0 .266667rem /* 20/75 */;
    padding-top: .266667rem /* 20/75 */;
    padding-bottom: 20px;
    box-sizing: border-box;
    border-bottom: .01rem solid #ddd;
  }
  .friend-avatar {
    width: 1.066667rem /* 80/75 */;
    height: 1.066667rem /* 80/75 */;
    display: inline-block;
    vertical-align: top;
  }
  .friend-mes-wrapper {
    width: 8rem /* 630/75 */;
    display: inline-block;
  }
  .friend-name {
    width: 2.666667rem /* 200/75 */;
    height: .533333rem /* 40/75 */;
    line-height: .533333rem /* 40/75 */;
    font-size: .32rem /* 24/75 */;
    color: rgb(24, 93, 150);
  }
  .friend-mes {
    line-height: .426667rem /* 32/75 */;
    font-size: .32rem /* 24/75 */;
    color:rgb(54, 53, 53);
  }
  .friend-photo-wrapper{
    list-style: none;
  }
  .friend-photo-wrapper>li{
    width: 2rem /* 150/75 */;
    height: 2rem /* 150/75 */;
    margin-right: .133333rem /* 10/75 */;
    margin-top: .133333rem /* 10/75 */;
    box-sizing: border-box;
    float: left;
  }
  .friend-photo-wrapper::after{
    clear: both;
  }
  .friend-photo-wrapper>li>img{
    width: 2.666667rem /* 200/75 */;
    height: 2.666667rem /* 200/75 */;
    width: 2rem /* 150/75 */;
    height: 2rem /* 150/75 */;
  }
  .clear-both{
    clear: both;
  }
  .time{
    width: 1.333333rem /* 100/75 */;
    height: .8rem /* 60/75 */;
    line-height: .8rem /* 60/75 */;
    font-size: .32rem /* 24/75 */;
    color: rgb(145, 141, 141);
    display: inline-block;
  }
  .operate-btn{
    width: .8rem /* 60/75 */;
    height: .8rem /* 60/75 */;
    height: .533333rem /* 40/75 */;
    line-height: .8rem /* 60/75 */;
    line-height: .533333rem /* 40/75 */;
    text-align: center;
    font-size: .32rem /* 24/75 */;
    font-size: .266667rem /* 20/75 */;
    background-color: rgb(136, 178, 214);
    color: rgb(255, 255, 255);
    border-radius: .1rem;
    display: inline-block;
    margin-left: 5.333333rem /* 400/75 */;
  }
</style>
