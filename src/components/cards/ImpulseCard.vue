<template>
  <div class="card-body"  v-on:scrollToCard="scrollToCard">
      <div class="card-content" @click="flipCard">
        <div class="card-text-headline">
          <category-label :categoryId="impulse.category" />
          <a :name="impulse.id" />
          <h3>{{ impulse.title }}</h3>
        </div>
        <div class="card-text">
          <template v-if="impulse.forMe">
            <h4>Was bringt es mir?</h4>
            <div v-html="impulse.forMe" />
          </template>
          <template v-if="impulse.forWorld">
            <h4>Was bringt es der Welt?</h4>
            <div v-html="impulse.forWorld" />
          </template>
        </div>
      </div>
      <div class="button-wrapper">
        <assign-button :impulseId="impulse.id" />
        <share-button :impulse="impulse" />
      </div>
      <img class="card-background"
        src="@/assets/cards/Card-blue.svg">
  </div>
</template>
<script>
import AssignButton from '@/components/cards/AssignButton'
import ShareButton from '@/components/cards/ShareButton'
import CategoryLabel from '@/components/_base/CategoryLabel.vue'
import { $auth } from '@/firebase-config'
export default {
  props: {
    impulse: {
      type: Object
    },
    to: {
      type: String,
      default: 'impulse'
    }
  },
  components: {
    CategoryLabel, AssignButton, ShareButton
  },
  mounted () {
    this.$root.$on('scrollToCard', (impulseId) => {
      this.$nextTick(() => {
        this.scrollToCard(impulseId)
      })
    })
  },
  computed: {
    userLoggedIn () {
      return $auth.currentUser && this.$store.state.Userdata.userdata
    },
    detailLink () {
      return this.to + '/' + this.impulse.id
    }
  },
  methods: {
    scrollToCard (impulseId) {
      if (impulseId && impulseId === this.impulse.id) {
        this.$el.scrollIntoView()
      }
    },
    flipCard () {
      this.$router.push(this.detailLink)
    }
  }
}
</script>
<style lang="scss" scoped>
.card-body {
  --header-height: 45%;
  --max-lines: 10;
  --lh: 1.25em;
  --headline-size: 22px;
  --text-size: 14px;

  margin-left: auto;
  margin-right: auto;
  min-width: 263px;
  max-width: 780px;
  position: relative;
  padding: 0;
  height: auto;
  color: $gray-900;

  .card-background {
    width: 100%;
  }

  .card-content {
    position: absolute;
    height: 100%;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    a:hover {
      text-decoration: none;
    }
    .card-text-headline {
      height: var(--header-height);
      min-height: var(--header-height);
      padding-top: 12px;
      padding-bottom: 10px;
      color: $gray-900;
      line-height: 1;

      h3 {
        font-size: var(--headline-size);
        margin-bottom: 0;
      }

      .category {
        font-size: 0.75rem;
        margin-bottom: 0.5rem;
      }
    }
    .card-text {
      height: calc(100% - var(--header-height) - 2.75em);
      max-height: calc(100% - var(--header-height) - 2.75em);
      line-height: var(--lh);
      width: 100%;
      padding-bottom: 0;
      word-wrap: break-word;
      overflow: hidden;
      text-overflow: ellipsis;
      color: $gray-900;

      h4 {
        font-weight: 800;
        font-size: var(--text-size);
      }
      p {
        font-size: var(--text-size);
        hyphens: auto;
      }
    }
    .card-text::before {
      position: absolute;
      content: "[mehr ...]";
      font-size: var(--text-size);
      font-weight: 800;
      bottom: 20px;
      left: 10px;
      cursor: pointer;
    }
  }
  .button-wrapper {
    position: absolute;
    bottom: 15px;
    right: 15px;
  }
}
@media only screen and (max-width: 321px) {

  .card-content {
    --lh: 1.25em;
    --headline-size: 22px;
    --text-size: 14px;
  }
}

@media only screen and (max-width: 991px) and (min-width: 322px) {
  .card-content {
    --lh: 1.25em;
    --text-size: calc(14px + (20 - 14) * (100vw - 350px) / (750 - 350));
    --headline-size: calc(24px + (32 - 24) * (100vw - 350px) / (750 - 350));
  }
}

@media only screen and (min-width: 992px) {
  .card-content {
    --lh: 1.5em;
    --headline-size: 32px;
    --text-size: 18
  }
}
</style>
