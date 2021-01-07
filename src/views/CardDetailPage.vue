<template>
  <div>
    <main-header headerTitle="Impuls" :backlink="backlink"></main-header>
    <b-container>
      <div v-if="impulse" id="impulse-detail-view" class="my-4 mb-6 mx-2 p-2">
        <h1 class="mb-5 card-title">{{ impulse.title }}</h1>

        <div v-if="impulse.forMe">
          <h2>Was bringt das mir?</h2>
          <div
            v-html="impulse.forMe"
            class="for-me"
          />
          <hr class="my-4">
        </div>
        <div v-if="impulse.forWorld">
          <h2>Was bringt es der Welt?</h2>
          <div
            v-html="impulse.forWorld"
            class="for-world"
          />
          <hr class="my-4">
        </div>
        <div
          v-if="impulse.description"
          v-html="impulse.description"
          class="card-description" />
      </div>
      <div v-else>
        Impuls leider nicht gefunden.<br>
        <router-link :to="backlink">
          Zurück zur Übersicht.
        </router-link>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import MainHeader from '@/components/_base/Header'

export default {
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
  components: {
    MainHeader
  },
  created () {
    const impulseId = this.$route.params.id
    this.fetchById(impulseId)
  },
  computed: {
    title () {
      return this.impulse ? this.impulse.title : 'Impuls'
    },
    backlink () {
      let link
      if (this.$attrs.back) {
        link = this.$attrs.back
        if (this.$route.params.id) {
          link += '#' + this.$route.params.id
        }
      } else {
        link = '/'
      }
      return link
    },
    ...mapGetters({
      impulse: 'Impulse/getImpulse'
    })
  },
  methods: {
    ...mapActions('Impulse', ['fetchById'])
  }

}
</script>

<style lang="scss" scoped>
#impulse-detail-view {
  border: 5px solid $color-blue;
  border-radius: 30px;
  max-width: 770px;
}
</style>
