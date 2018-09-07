<template>
  <div>
    <go-back @backaction="back"></go-back>
    <div class="song-pictute-wrapper rotate">
      <img src="../../static/princess.jpeg" alt="">
    </div>
    <div class="opreate-wrapper">
      <div class="opreate-like"></div>
      <div class="opreate-download"></div>
      <div class="opreate-mes"></div>
      <div class="opreate-more"></div>
    </div>
    <div class="playing-wrapper">
      <audio src="##" id="bottleAudio"></audio>
      <div class="play-controller">
        <div class="progress-wrapper">
          <div class="timenum">{{ curtime | formatTime}}</div>
          <div class="progress-line"></div>
          <div class="timenum">{{ totaltime | formatTime}}</div>
        </div>
        <div class="play-wrapper">
          <div class="play-prev"></div>
          <div class="play-btn"></div>
          <div class="play-next"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import GoBack from '@/components/common/GoBack.vue'

export default {
  name: 'MusicList',
  data () {
    return {
      progressBtn: 0,
      progressBtnFlag: false,
      loadFlag: false,
      progress: 0,
      curtime: 0,
      totaltime: 0,
      pauseFlag: '',
      timer: '', // 播放的timer
      timer2: '', // 进度条的timer
      workpath: ''
    }
  },
  components: {
    'go-back': GoBack
  },
  filters: {
    formatTime (param) {
      if (isNaN(param) || !param) return '00:00'
      let minute = Math.floor(param / 60)
      let second = Math.floor(param % 60)
      return (
        (minute = minute < 10 ? '0' + minute : minute),
        (second = second < 10 ? '0' + second : second),
        minute + ':' + second
      )
    },
    formatScore (val) {
      return `平均得分:${val}分`
    }
  },
  methods: {
    back () {
      this.$router.push({
        path: '/musiclist'
      })
    },
    audioAction () {
      clearInterval(this.timer)
      clearInterval(this.timer2)

      let video = document.getElementById('bottleAudio')
      if (video.paused) {
        video.play()
        this.loadFlag = true
        this.timer = setInterval(() => {
          if (video.readyState === 4) {
            this.loadFlag = false
            clearInterval(this.timer)
            if (this.curtime) {
              video.currentTime = this.curtime
            }
            video.play()
            this.pauseFlag = 'pause'
            this.progressBtnFlag = true
            this.totaltime = video.duration

            this.timer2 = setInterval(() => {
              if (video.paused) {
                this.pauseFlag = ''
                this.hadListenedTime = 0
                clearInterval(this.timer)
                clearInterval(this.timer2)
              }
              // 当前时间
              this.curtime = video.currentTime.toFixed(2)
              let curSecond = Math.floor(this.curtime)
              // 当前歌词
              for (const item of this.lyrics) {
                if (item.secs === curSecond) {
                  this.curlyrcis = item.lrc
                }
              }
              // 进度条
              this.progress = (
                video.currentTime /
                video.duration *
                100
              ).toFixed(2)
              // 累计听歌时长
              this.hadListenedTime += 1
              console.log(`累计听歌时长${this.hadListenedTime}`)
            }, 1000)
          }
        }, 1000)
      } else {
        video.pause()
        clearInterval(this.timer)
        clearInterval(this.timer2)
        this.loadFlag = false
        this.pauseFlag = ''
      }
    },
    dragAction () {
      let that = this
      let width = document.querySelector('.audio-wrapper').offsetWidth
      // 拖拽事件
      let touch = document.querySelector('.progress-btn')
      touch.addEventListener('touchstart', handleStart, false)
      touch.addEventListener('touchmove', handleMove, false)
      touch.addEventListener('touchend', handleEnd, false)
      let startX, curLeft, olfLeft, changeLeft
      function handleStart (e) {
        e.preventDefault()
        // 清空计时器
        clearInterval(that.timer)
        clearInterval(that.timer2)
        let touches = e.changedTouches
        startX = touches[0].pageX
        olfLeft = document.querySelector('.progress-btn').offsetLeft
        document.getElementById('bottleAudio').pause()
      }
      function handleMove (e) {
        e.preventDefault()
        let moveX = e.changedTouches[0].pageX
        changeLeft = moveX - startX
        curLeft = olfLeft + changeLeft
        if (curLeft < 0) {
          curLeft = 0
        }
        if (curLeft > width) {
          curLeft = width
        }
        // 进度条与进度按钮
        that.progress = (curLeft / width * 100).toFixed(2)
        // 进度时间
        that.curtime = (curLeft / width * that.totaltime).toFixed(2)
      }
      function handleEnd (e) {
        touch.removeEventListener('touchmove', handleEnd, false)
        that.audioAction()
      }
    }
  }
}
</script>
<style scoped>
.opreate-wrapper {
  position: absolute;
  bottom: 250px;
  width: 10rem;
  height: 100px;
  line-height: 100px;
  font-size: 0;
  z-index: 200;
}
.opreate-like{
  width: 64px;
  height: 64px;
  line-height: 64px;
  background: url('../../static/like.png') no-repeat;
  background-size: 100%;
  display: inline-block;
  vertical-align: middle;
  margin-left: 100px;
}
.opreate-download{
  width: 64px;
  height: 64px;
  line-height: 64px;
  background: url('../../static/download.png') no-repeat;
  background-size: 100%;
  display: inline-block;
  vertical-align: middle;
  margin-left: 100px;
}
.opreate-mes{
  width: 64px;
  height: 64px;
  line-height: 64px;
  background: url('../../static/mes.png') no-repeat;
  background-size: 100%;
  display: inline-block;
  vertical-align: middle;
  margin-left: 110px;
}
.opreate-more{
  width: 64px;
  height: 64px;
  line-height: 64px;
  background: url('../../static/more.png') no-repeat;
  background-size: 100%;
  display: inline-block;
  vertical-align: middle;
  margin-left: 123px;
}
.song-pictute-wrapper {
  position: absolute;
  top: 350px;
  left: 50%;
  margin-left: -150px;
  width: 300px;
  height: 300px;
  background: #000;
  border-radius: 50%;
  z-index: 200;
  box-shadow: 0 0 0 8px rgb(41, 38, 38, .8),
              0 0 0 12px rgba(255, 255, 255, 0.1),
              0 0 0 16px rgba(0, 0, 0, 0.6),
              0 0 0 20px rgba(255, 255, 255, 0.1),
              0 0 0 24px rgba(0, 0, 0, 0.6),
              0 0 0 28px rgba(255, 255, 255, 0.1),
              0 0 0 32px rgba(0, 0, 0, 0.6),
              0 0 0 36px rgba(255, 255, 255, 0.1),
              0 0 0 40px rgba(0, 0, 0, 0.6),
              0 0 0 44px rgba(255, 255, 255, 0.1),
              0 0 0 46px rgba(0, 0, 0, 0.6),
              0 0 0 50px rgba(255, 255, 255, 0.1),
              0 0 0 54px rgba(0, 0, 0, 0.6),
              0 0 0 58px rgba(255, 255, 255, 0.1),
              0 0 0 62px rgba(0, 0, 0, 0.6),
              0 0 0 66px rgba(255, 255, 255, 0.1),
              0 0 0 70px rgba(0, 0, 0, 0.6),
              0 0 0 74px rgba(255, 255, 255, 0.1),
              0 0 0 78px rgba(0, 0, 0, 0.6),
              0 0 0 82px rgba(255, 255, 255, 0.1),
              0 0 0 86px rgba(0, 0, 0, 0.6),
              0 0 0 90px rgba(255, 255, 255, 0.1),
              0 0 0 94px rgba(0, 0, 0, 0.6),
              0 0 0 98px rgba(255, 255, 255, 0.1),
              0 0 0 102px rgba(0, 0, 0, 0.6),
              0 0 0 106px rgba(255, 255, 255, 0.1),
              0 0 0 115px rgba(214, 213, 213, .6);
}
@keyframes rotateAction {
  form {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.song-pictute-wrapper.rotate {
  animation: rotateAction 12s linear infinite;
}
.song-pictute-wrapper>img {
  width: 300px;
  height: 300px;
  border-radius: 50%;
}
.playing-wrapper {
  position: fixed;
  padding-top: 100px;
  box-sizing: border-box;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(243, 241, 241);
  z-index: 100;
}
.play-controller {
  position: absolute;
  bottom: 0;
  width: 10rem;
  height: 200px;
  /* background-color: #eee; */
}
.progress-wrapper {
  width: 10rem;
  height: 50px;
  line-height: 50px;
  font-size: 0;
}
.timenum {
  width: 100px;
  height: 50px;
  line-height: 50px;
  vertical-align: middle;
  display: inline-block;
  font-size: 30px;
  text-align: center;
  color: #fff;
}
.progress-line {
  width: 550px;
  height: 4px;
  background-color: #fff;
  vertical-align: middle;
  display: inline-block;
}
.play-wrapper {
  width: 320px;
  height: 100px;
  line-height: 100px;
  font-size: 0;
  margin: 0 auto;
  margin-top: 20px;
}
.play-prev {
  width: 64px;
  height: 64px;
  line-height: 64px;
  vertical-align: middle;
  display: inline-block;
  background: url('../../static/prev.png') no-repeat;
  background-size: 100%;
}
.play-btn {
  width: 64px;
  height: 64px;
  line-height: 64px;
  vertical-align: middle;
  display: inline-block;
  background: url('../../static/play.png') no-repeat;
  background-size: 100%;
  margin: 0 64px;
}
.play-next {
  width: 64px;
  height: 64px;
  line-height: 64px;
  vertical-align: middle;
  display: inline-block;
  background: url('../../static/next.png') no-repeat;
  background-size: 100%;
}
</style>
