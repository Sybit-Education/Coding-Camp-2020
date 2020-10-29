<template>
<router-link :to="{ name: 'KartenDetail', params: { impulse: impulse }}">
  <div class="card-body">
    <div class="card-content">
      <div class="card-text"><p>{{ impulse.title }}</p></div>
      <div class="card-text card-text-space">
        <p v-if="impulse.description" v-html="impulseDescription"></p>
    </div>
  </div>
  <div class="card-background">
    <img src="@/assets/cards/Card-blue.svg">
  </div>
  </div>
</router-link>
</template>
<script>
import AssignButton from '@/components/cards/AssignButton.vue'
export default {
  props: {
    impulse: {
      type: Object
    }
  },
  computed: {
    impulseDescription () {
      return `${this.impulse.description.slice(0, 110).trim()}... <span style="color:black; font-weight: bold;">mehr Infos.</s>`
    }
  }
}
</script>
<style lang="scss" scoped>
.card-body{
  margin-left: auto;
  margin-right: auto;
  width: 263px;
  position:relative;
  padding: 0;
  height: 409px;
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

.card-text{
  height: 50%;
  text-align: start;
  padding-top: 25px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 15px;
  word-wrap: break-word;
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
