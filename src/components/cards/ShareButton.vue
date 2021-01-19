<template>
  <b-button
    v-if="isShareable"
    @click="shareIt"
    class="share-button mx-2"
    pill>
    <vue-fontawesome
      icon="share-alt"
      color="white"
      size="1.75"
    />
    <span v-if="showLabel" class="m-2">
      Teilen &hellip;
    </span>
  </b-button>
</template>

<script>
export default {
  name: 'ShareButton',
  props: {
    showLabel: {
      type: Boolean,
      default: false
    },
    impulse: {
      type: Object,
      required: true
    }
  },
  computed: {
    isShareable () {
      if ('share' in navigator) {
        return true
      }
      return false
    }
  },

  methods: {
    shareIt () {
      const data = {
        title: 'Mach mit und sei auch ein Held',
        text: `Mach auch mit!
          Einer der Impulse in der kostenlosen App
          "Sei ein Held - rette die Welt"
          ist: ${this.impulse.title} 👉 `,
        url: `${window.location.origin}/impulse/${this.impulse.id}`
      }
      navigator.share(data)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
