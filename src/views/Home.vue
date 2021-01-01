<template>
  <div id="home-view">
    <main-header :headerTitle="title"></main-header>
    <div class="d-flex justify-content-center pt-2">
      <impulse-list-new></impulse-list-new>
    </div>
  </div>
</template>
<script>
import MainHeader from '@/components/_base/Header'
import ImpulseListNew from '@/components/ImpulseListNew.vue'
export default {
  components: {
    MainHeader,
    ImpulseListNew
  },
  metaInfo () {
    return {
      title: this.title,
      meta: [
        { name: 'description', content: this.title },
        { property: 'og:title', content: this.title },
        { property: 'og:site_name', content: this.title },
        { property: 'og:type', content: 'website' },
        { name: 'robots', content: 'index,follow' }
      ]
    }
  },
  computed: {
    title () {
      return 'Sei ein Held - rette die Welt'
    }
  }
}
</script>
