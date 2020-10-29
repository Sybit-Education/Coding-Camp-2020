<template>
    <b-jumbotron class="bg-white">
    <h3 class="mb-5 card-title">{{ impulse.title }}</h3>

    <p v-if="impulse.description" v-html="impulse.description" class="card-description"><p>

    <hr class="my-4">

    <h5>
     Für mich:
    </h5>
    <p v-html="impulse.forMe" class="for-me"></p>
    <hr class="my-4">
     <h5>
     Für die Welt:
    </h5>
    <p v-html="impulse.forWorld" class="mb-5 for-world"></p>
  </b-jumbotron>
</template>

<script>
export default {
  props: {
    impulse: {
      type: Object
    }
  },
  mounted () {
    this.routeToHomeWhenNoImpulseIsAvailable()
  },
  methods: {
    routeToHomeWhenNoImpulseIsAvailable () {
      if (this.impulse === undefined) {
        this.$router.push({ name: 'Home' })
      }
    }
  }

}
</script>

<style lang="scss" scoped>
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
