<template>
  <div>
    <router-view></router-view>
    <tab></tab>
  </div>
</template>
<script>
import Tab from '@/components/common/Tab.vue'

export default {
  name: 'Main',
  data () {
    return {
      selected: 'Home'
    }
  },
  components: {
    tab: Tab
  },
  watch: {
    selected (val) {
      this.$router.push({
        path: val
      })
    }
  }
}
</script>
