<template>
  <div class="card-body">
    <div class="card-content">
      <router-link :to="{ name: 'KartenDetail', params: { impulse: impulse }}">
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
    }
  },
  components: {
    AssignButton, CategoryLabel
  },
  computed: {
    user () {
      return $auth.currentUser
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
    padding-left: 20px;
    padding-right: 20px;
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
      height: var(100 - --header-height);
      line-height: var(--lh);
      max-height: calc(var(--lh) * var(--max-lines));
      width: 100%;
      padding-bottom: 0;
      word-wrap: break-word;
      overflow: hidden;
      text-overflow: ellipsis;
      color: $gray-900;

      h4 {
        font-size: var(--text-size);
      }
      p {
        font-size: var(--text-size);
        max-height: calc(var(--lh) * var(--max-lines));
        hyphens: auto;
      }
    }
    .card-text::before {
      position: absolute;
      content: "[mehr ...]";
      font-weight: 900;
      bottom: 1rem;
      left: 1rem;
    }

    .add-impuls {
      position: absolute;
      bottom: 10px;
      right: 10px;
    }
  }
}
@media only screen and (max-width: 321px) {

  .card-content {
    --max-lines: 10;
    --lh: 1.25em;
    --headline-size: 22px;
    --text-size: 14px;
  }
}

@media only screen and (max-width: 991px) and (min-width: 322px) {
  .card-content {
    --max-lines: 10;
    --lh: 1.25em;
    --text-size: calc(14px + (20 - 14) * (100vw - 350px) / (750 - 350));
    --headline-size: calc(24px + (32 - 24) * (100vw - 350px) / (750 - 350));
  }
}

@media only screen and (min-width: 992px) {
  .card-content {
    --max-lines: 20;
    --lh: 1.5em;
    --headline-size: 32px;
    --text-size: 18
  }
}
</style>
