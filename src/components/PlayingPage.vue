<template>
  <div>
    <go-back @backaction="back"></go-back>
    <div class="playing-wrapper">

    </div>
  </div>
</template>
<script>
import GoBack from '@/components/common/GoBack.vue'

export default {
  name: 'MusicList',
  data () {
    return {
      songlist: [1]
    }
  },
  components: {
    'go-back': GoBack
  },
  methods: {
    back () {
      this.$router.push({
        path: '/musiclist'
      })
    }
  }
}
</script>
<style scoped>
  .playing-wrapper {
    position: fixed;
    padding-top: 100px;
    box-sizing: border-box;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(31, 30, 30);
    filter: blur(10px);
    z-index: 100;
  }
</style>
