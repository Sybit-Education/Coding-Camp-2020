<template>
  <div id="assigned-impulse-view">
    <main-header :headerTitle="title"></main-header>
    <div class="d-flex justify-content-center pt-5">
      <impulse-list-sorted></impulse-list-sorted>
    </div>
  </div>
</template>
<script>
import MainHeader from '@/components/_base/Header'
import ImpulseListSorted from '@/components/ImpulseListSorted.vue'

export default {
  components: {
    MainHeader,
    ImpulseListSorted
  },
  metaInfo () {
    return {
      title: this.title + ' | Sei ein Held - rette die Welt',
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
      return 'Meine Impulse'
    }
  }
}
</script>
