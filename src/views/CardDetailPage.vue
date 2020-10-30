<template>
  <b-container>
    <b-row>
      <b-col class="d-flex justify-content-end mb-n3 mr-2 mt-2">
        <b-button pill to="/"><vue-fontawesome  icon="times" color="white" size="1"></vue-fontawesome></b-button>
      </b-col>
    </b-row>
    <div id="impulse-detail-view" class="my-4 mb-6 mx-2 p-2">
      <h3 class="mb-5 card-title">{{ impulse.title }}</h3>

      <p v-if="impulse.description" v-html="impulse.description" class="card-description"><p>
      <hr class="my-4">

      <h5>Was bringt das mir?</h5>
      <p v-html="impulse.forMe" class="for-me"></p>
      <hr class="my-4">

      <h5>Was bringt es der Welt?</h5>
      <p v-html="impulse.forWorld" class="for-world"></p>
    </div>
  </b-container>
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
