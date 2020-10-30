<template>
  <div class="card-body">
    <div class="card-content">
      <router-link :to="{ name: 'KartenDetail', params: { impulse: impulse }}">
        <div class="card-text card-text-headline">{{ impulse.title }}</div>
        <div class="card-text card-text-space">
          <p v-if="impulse.description" v-html="impulseDescription"></p>
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
    impulseDescription () {
      return `${this.impulse.description.slice(0, 110).trim()}... <span style="color:black; font-weight: bold;">mehr Infos.</s>`
    },
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
.card-body{
  margin-left: auto;
  margin-right: auto;
  min-width: 263px;
  max-width: 620px;
  position:relative;
  padding: 0;
  height: auto;
  color: black;
}

.card-background{
  width: 100%;
}

.card-background img{
  width: 100%;
}

.card-content{
  position: absolute;
  height: 100%;
  width: 100%;
}

.card-text {
  height: 60%;
  text-align: start;
  padding-top: 25px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 15px;
  word-wrap: break-word;
  text-decoration: none;
  color: black;
}

.card-text-headline{
  font-weight: bold;
  font-size: 18px;
}

.card-text-space{
  padding-top: 35px;
}

.add-impuls{
  position: absolute;
  bottom: 10px;
  right: 10px;
}
</style>
