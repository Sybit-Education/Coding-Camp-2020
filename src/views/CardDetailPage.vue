<template>
  <div>
    <main-header headerTitle="Impuls" :backlink="backlink"></main-header>
    <b-container>
      <div v-if="impulse" id="impulse-detail-view" class="my-4 mb-6 mx-2 p-2">
        <h3 class="mb-5 card-title">{{ impulse.title }}</h3>

        <h5>Was bringt das mir?</h5>
        <p v-html="impulse.forMe" class="for-me"></p>
        <hr class="my-4">

        <h5>Was bringt es der Welt?</h5>
        <p v-html="impulse.forWorld" class="for-world"></p>
        <hr class="my-4">

        <p
          v-if="impulse.description"
          v-html="impulse.description"
          class="card-description" />
      </div>
      <div v-else>
        Impuls leider nicht gefunden.
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
  mounted () {
    const impulseId = this.$route.params.id
    this.fetchById(impulseId)
  },
  computed: {
    title () {
      return this.impulse ? this.impulse.title : 'Impuls'
    },
    backlink () {
      return this.$route.params.back || '/'
    },
    ...mapGetters({
      impulse: 'Impulse/getImpulse'
    })
  },
  methods: {
    routeToHomeWhenNoImpulseIsAvailable () {
      if (this.impulse === undefined) {
        this.$router.push({ name: 'Home' })
      }
    },
    ...mapActions('Impulse', ['fetchById'])
  }

}
</script>

<style lang="scss" scoped>
#impulse-detail-view {
  border: 5px solid $color-blue;
  border-radius: 30px;
}
.card-description {
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color:#444;
    word-wrap: break-word;
}
.card-title {
    line-height: 36px;
}
.for-me {
    word-wrap: break-word;
     line-height: 32px;
    font-size: 17px;
}
.for-world {
    word-wrap: break-word;
    line-height: 32px;
    font-size: 17px;
}
</style>
