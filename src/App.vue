<template>
  <div id="app" class="container">
    <div id="nav">
    </div>
    <router-view/>
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
<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container{
  padding: 0; // Padding has to be Zeor for Vertical Impulse Scroll List, to show Full Element.
  max-width: 100%;
}
</style>
