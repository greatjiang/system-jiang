<template>
  <div>
    <go-back @backaction="back"></go-back>
    <ul class="music-list-wrapper">
      <li class="list-child" v-for="(item, index) in songlist" :key="index" @click="goPlaying">
       <div class="list-index">{{ (index+1) }}</div>
       <div class="song-mes">
        <div class="song-name">呼伦贝尔大草原</div>
        <div class="singer">草原王子</div>
       </div>
      </li>
    </ul>
  </div>
</template>
<script>
import GoBack from '@/components/common/GoBack.vue'

export default {
  name: 'MusicList',
  data () {
    return {
      songlist: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    }
  },
  components: {
    'go-back': GoBack
  },
  methods: {
    back () {
      this.$router.push({
        path: '/me'
      })
    },
    goPlaying () {
      this.$router.push({
        path: '/playingpage'
      })
    }
  }
}
</script>
<style scoped>
  .music-list-wrapper {
    width: 10rem;
    margin: 0 auto;
    padding-top: 80px;
    box-sizing: border-box;
  }
  .list-child {
    width: 10rem;
    height: 70px;
    line-height: 70px;
    background-color: rgb(255, 255, 255);
    display: inline-block;
    font-size: 0;
  }
  .list-index {
    width: 80px;
    height: 70px;
    line-height: 70px;
    display: inline-block;
    vertical-align: middle;
    font-size: 30px;
    color: #ccc;
    text-align: center;
  }
  .song-mes {
    width: 670px;
    height: 70px;
    line-height: 70px;
    vertical-align: middle;
    display: inline-block;
    border-bottom: .01rem solid #ccc;
    box-sizing: border-box;
  }
  .song-name {
    width: 580px;
    height: 35px;
    line-height: 35px;
    font-size: 30px;
    color: #000;
  }
  .singer {
    width: 580px;
    height: 28px;
    line-height: 28px;
    font-size: 18px;
    color: #bbb;
  }
</style>
