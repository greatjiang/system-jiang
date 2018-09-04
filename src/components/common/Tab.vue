<template>
  <ul class="tab-wrapper">
    <li class="tab" :class="item.cur" @click="tabAction(index)"  v-for="(item,index) in tablist" :key="index">
      <img class="tab-icon" :src="imglist[index].img[0]">
      <div class="tab-name">{{ item.name }}</div>
    </li>
  </ul>
</template>
<script>
import 'amfe-flexible'

export default {
  name: 'Tab',
  data () {
    return {
      tablist: [
        {name: '圈子', cur: 'active', url: '/home'},
        {name: '我的', cur: '', url: '/me'}
      ],
      imglist: [{
        name: 'friend',
        img: ['../../static/friend-selected.png', '../../static/friend.png']
      }, {
        name: 'me',
        img: ['../../static/me.png', '../../static/me-selected.png']
      }]
    }
  },
  mounted () {
    this.curPath = this.$route.path
    if (this.curPath === '/me') {
      this.curTab = 1
      for (let i = 0; i < this.imglist.length; i++) {
        // swap
        [this.imglist[i].img[0], this.imglist[i].img[1]] = [this.imglist[i].img[1], this.imglist[i].img[0]]
      }
    } else {
      this.curTab = 0
    }

    for (const item of this.tablist) {
      if (item.url === this.curPath) {
        item.cur = 'active'
      } else {
        item.cur = ''
      }
    }
  },
  methods: {
    tabAction (index) {
      if (index === this.curTab) return false
      this.curTab = index

      for (let item of this.tablist) {
        item.cur = ''
      }

      for (let i = 0; i < this.imglist.length; i++) {
        // swap
        [this.imglist[i].img[0], this.imglist[i].img[1]] = [this.imglist[i].img[1], this.imglist[i].img[0]]
      }

      this.tablist[index].cur = 'active'
      const dest = this.tablist[index].url
      this.$router.push({
        path: dest
      })
    }
  }
}
</script>
<style scoped>
  .tab-wrapper {
    position: fixed;
    bottom: 0;
    width: 10rem;
    height: 1.333333rem /* 100/75 */;
    background: rgba(243, 241, 241,.7);
    border-top: .02rem solid #eee;
    box-sizing: border-box;
  }
  .tab {
    width: 5rem;
    height: 1.333333rem /* 100/75 */;
    float: left;
    box-sizing: border-box;
    list-style: none;
    color: rgb(97, 93, 93);
  }
  .tab-icon{
    width: .533333rem /* 40/75 */;
    height: .533333rem /* 40/75 */;
    margin: 0 auto;
    margin-top: .133333rem /* 10/75 */;
    display: block;
  }
  .tab-name{
    width: 5rem;
    height: .8rem /* 60/75 */;
    text-align: center;
    font-size: 30px;
  }
  .tab.active{
    color: rgb(76, 150, 76);
  }
</style>
