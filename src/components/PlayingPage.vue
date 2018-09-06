<template>
  <div>
    <go-back @backaction="back"></go-back>
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
.playing-wrapper {
  position: fixed;
  padding-top: 100px;
  box-sizing: border-box;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(31, 30, 30);
  z-index: 100;
}
.play-controller {
  position: absolute;
  bottom: 0;
  width: 10rem;
  height: 150px;
  background-color: #eee;
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
