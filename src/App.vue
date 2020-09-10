<template>
  <div id="app" class="container">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

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

</style>
