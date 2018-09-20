<template>
  <div>
    <div class="my-wrapper">
      <img class="my-bg" :src="myBg" v-cloak v-show="myBg">
      <input class="select-file" type="file" name="upload" multiple="multiple" ref="selectimage" @change="selectBg">
      <div class="my-name">草原王子</div>
      <img class="my-avatar" src="../../static/avatar.jpeg" alt="">
    </div>
    <friend></friend>
  </div>
</template>
<script>
import 'amfe-flexible'
import Friend from '@/components/common/Friend.vue'

export default {
  name: 'Home',
  components: {
    friend: Friend
  },
  data () {
    return {
      myBg: ''
    }
  },
  mounted () {
    this.getAvatar()
  },
  methods: {
    getAvatar () {
      this.$axios.post(
        '/api/getAvatar'
      ).then(res => {
        if (res.data.code === 0) {
          this.myBg = res.data.data.avatar
        }
      }).catch(e => {
        console.log(e)
      })
    },
    selectBg (e) {
      const selectfile = this.$refs.selectimage.files[0]
      selectfile && this.upload()
    },
    upload () {
      const selectfile = this.$refs.selectimage
      let formData = new FormData()
      formData.append('file', selectfile.files[0])
      this.$axios.post(
        '/api/upload',
        formData
      ).then(res => {
        if (res.data.code === 0) {
          this.getAvatar()
        } else {
          alert(res.data.msg)
        }
      }).catch(e => {
        console.log(e)
      })
    }
  }
}
</script>
<style scoped>
  [v-cloak] {
    display: none;
  }
  .select-file {
    position: absolute;
    top: 0;
    left: 0;
    width: 10rem;
    height: 500px;
    font-size: 0;
    outline: none;
    opacity: 0;
  }
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
