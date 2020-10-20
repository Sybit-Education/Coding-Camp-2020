<template>
    <div>
        <b-button v-show="!isAssigned" @click="assignImpulse" pill><vue-fontawesome  icon="plus-circle" color="white" size="2"></vue-fontawesome></b-button>
        <b-button v-show="isAssigned && canBeChecked" @click="addPointsToUserAccount" pill><vue-fontawesome  icon="check" color="white" size="2"></vue-fontawesome></b-button>
        <vue-fontawesome v-b-tooltip.hover title="Kann erst ein Tag nach checken wieder gecheckt werden." v-show="isAssigned && !canBeChecked" icon="hourglass-start" color="white" size="2"></vue-fontawesome>
    </div>
</template>

<script>
export default {
  props: {
    isAssigned: Boolean,
    canBeChecked: Boolean
  },

  methods: {
    assignImpulse () {
      this.$emit('impulseAssigned')
    },
    addPointsToUserAccount () {
      this.$emit('impulsePointAdd')
    }
  }
}
</script>
