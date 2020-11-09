<template>
  <div class="card-body">
    <div class="card-content">
      <router-link :to="{ name: 'KartenDetail', params: { impulse: impulse }}">
        <h3 class="card-text-headline">{{ impulse.title }}</h3>
        <div class="card-text">
          <p v-if="impulse.description" v-html="impulse.description"></p>
        </div>
      </router-link>
    </div>
    <assign-button v-if="user && $store.state.Userdata.userdata" :impulseId="impulse.id" />
    <div class="card-background">
      <b-img :src="cardBackground" fluid />
    </div>
  </div>
</template>
<script>
import AssignButton from '@/components/cards/AssignButton'
import { $auth } from '@/firebase-config'
export default {
  props: {
    impulse: {
      type: Object
    }
  },
  components: {
    AssignButton
  },
  computed: {
    user () {
      return $auth.currentUser
    },
    cardBackground () {
      return require('@/assets/cards/Card-blue.svg')
    }
  }
}
</script>
<style lang="scss" scoped>
.card-body {
  margin-left: auto;
  margin-right: auto;
  min-width: 263px;
  max-width: 780px;
  position:relative;
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
      height: 60%;
      padding-top: 25px;
      padding-bottom: 10px;
      color: $gray-900;
    }
    .card-text {
      height: 30%;
      line-height: var(--lh);
      max-height: calc(var(--lh) * var(--max-lines));
      width: 100%;
      padding-bottom: 1rem;
      word-wrap: break-word;
      overflow: hidden;
      text-overflow: ellipsis;
      color: $gray-900;
    }
    .card-text::before {
      position: absolute;
      content: "[mehr ...]";
      font-weight: 900;
      bottom: 1rem;
      left: 1rem;
    }
    .card-text::after {
      content: "";
      position: absolute;
      right: 0; /* note: not using bottom */
      width: 1rem;
      height: 1rem;
      background: white;
    }
  }
}

@media only screen and (max-width: 991px) {

  .card-content {
    --max-lines: 5;
    --lh: 1.5em;

    .card-text-headline {
      font-size: calc(24px + (38 - 24) * (100vw - 350px) / (750 - 350));
    }
    .card-text {
      font-size: calc(16px + (30 - 16) * (100vw - 350px) / (750 - 350));
    }
  }
}

@media only screen and (min-width: 992px) {

  .card-content {
    --max-lines: 8;
    --lh: 1.5em;

    .card-text-headline {
      font-size: 36px;
    }
    .card-text {
      font-size: 18px;
    }
  }
}
.add-impuls {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
</style>
