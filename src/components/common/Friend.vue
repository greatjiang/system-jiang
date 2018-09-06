<template>
  <div class="friends-wrapper">
    <div class="friend" v-for="(item, index) in friednlist" :key="index">
      <img class="friend-avatar" :src="item.avatar" alt="">
      <div class="friend-mes-wrapper">
        <div class="friend-name">{{ item.name }}</div>
        <div class="friend-mes">
          {{ item.content }}
        </div>
        <ul class="friend-photo-wrapper">
          <li v-for="(item2, index2) in item.photos" :key="index2">
            <img :src="item2" alt="">
          </li>
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
import Mock from 'mockjs'

export default {
  name: 'Friend',
  data () {
    return {
      friednlist: []
    }
  },
  mounted () {
    this.mockdata()
  },
  methods: {
    mockdata () {
      let Random = Mock.Random
      Random.csentence(5, 8)
      Random.cname()
      Random.cparagraph()
      Random.dataImage('100x100')
      let obj = Mock.mock({
        'list|5-15': [{
          'content': '@cparagraph',
          'name': '@cname()',
          'avatar': '@dataImage("100x100")',
          'photos|1-9': [
            '@dataImage("100x100")'
          ]
        }]
      })
      this.friednlist = obj.list
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
