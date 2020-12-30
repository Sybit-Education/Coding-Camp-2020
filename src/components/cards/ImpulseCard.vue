<template>
  <div class="card-body">
    <div class="card-content">
      <router-link :to="detailLink">
        <div class="card-text-headline">
          <category-label :categoryId="impulse.category" />
          <h3>{{ impulse.title }}</h3>
        </div>
        <div class="card-text">
          <div v-if="impulse.forMe">
            <h4>Was bringt es mir?</h4>
            <p v-html="impulse.forMe" />
          </div>
          <div v-if="impulse.forWorld">
            <h4>Was bringt es der Welt?</h4>
            <p v-html="impulse.forWorld" />
          </div>
        </div>
      </router-link>
    </div>
    <assign-button v-if="user && $store.state.Userdata.userdata" :impulseId="impulse.id" />
    <div class="card-background">
      <img src="@/assets/cards/Card-blue.svg">
    </div>
  </div>
</template>
<script>
import AssignButton from '@/components/cards/AssignButton'
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
    AssignButton, CategoryLabel
  },
  computed: {
    user () {
      return $auth.currentUser
    },
    detailLink () {
      return '/' + this.to + '/' + this.impulse.id
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
    img {
      width: 100%;
    }
  }

  .card-content {
    position: absolute;
    height: 100%;
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
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
    }

    .add-impuls {
      position: absolute;
      bottom: 0;
      right: 0;
    }
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
