<template>
  <div>
    <main-header headerTitle="Impuls" :backlink="backlink" />
    <b-container>
      <div v-if="impulse" id="impulse-detail-view" class="my-4 mb-6 mx-2 p-2">
        <div class="header">
          <category-label :categoryId="impulse.category" />
          <h1 class="mb-3 card-title">{{ impulse.title }}</h1>
        </div>
        <div v-if="impulse.forMe">
          <h2>Was bringt das mir?</h2>
          <div
            v-html="impulse.forMe"
            class="for-me"
          />
          <hr class="my-2">
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
import CategoryLabel from '@/components/_base/CategoryLabel.vue'

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
    MainHeader, CategoryLabel
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
  --border-radius: 30px;

  overflow: hidden;
  border: 5px solid $color-blue;
  border-radius: var(--border-radius);
  max-width: 770px;

  .header {
    margin-top: -0.5rem;
    margin-left: -0.5rem;
    margin-right: -0.5rem;
    border-top-left-radius: calc( var(--border-radius) - 2.5px);
    border-top-right-radius: var(--border-radius);
    padding: .5rem;
    background-color: $gray-200
  }

  @media only screen and (max-width: 991px) {
    .card-title {
      font-size: 1.75rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
}
</style>
