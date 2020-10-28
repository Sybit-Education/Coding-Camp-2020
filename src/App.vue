<template>
  <div id="app">
    <router-view class="router-view"/>
    <bottom-navigation></bottom-navigation>
    <notifications group="notification" class="mt-3" position="top center" />
  </div>
</template>

<script>
import BottomNavigation from '@/components/navigation/BottomNavigation.vue'
export default {
  name: 'App',
  components: {
    BottomNavigation
  },
  metaInfo () {
    return {
      title: 'Sei ein Held',
      meta: [
        { name: 'description', content: 'Sei ein Held' },
        { property: 'og:title', content: 'Sei ein Held' },
        { property: 'og:site_name', content: 'Sei ein Held' },
        { property: 'og:type', content: 'website' },
        { name: 'robots', content: 'index,follow' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.router-view {
  margin-bottom: 80px;
}
</style>
