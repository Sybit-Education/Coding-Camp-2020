<template>
  <div id="app">
    <router-view class="router-view"/>
    <bottom-navigation></bottom-navigation>
    <cookie-banner/>
    <notifications group="notification" class="mt-3" position="top center" />
  </div>
</template>

<script>
import BottomNavigation from '@/components/navigation/BottomNavigation.vue'
import CookieBanner from '@/components/element/CookieBanner.vue'
export default {
  name: 'App',
  components: {
    BottomNavigation,
    CookieBanner
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
<style lang="scss">

.router-view {
  background-color: var(--background);
  min-height: calc(100vh - 10rem);
  margin-top: 4rem;
  margin-bottom: 4rem;
}
</style>
