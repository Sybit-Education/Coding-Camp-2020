<template>
  <b-badge
    class="publishing-state"
    v-if="publishingState"
    v-bind:style="color"
    v-text="publishingState.name"
  />
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PublishingStateLabel',
  props: {
    publishingStateId: {
      type: String,
      required: false
    }
  },
  data () {
    return {
      publishingState: null
    }
  },
  mounted () {
    this.publishingState = this.getSelected(this.publishingStateId)
  },
  computed: {
    color () {
      return this.publishingState ? `background-color: ${this.publishingState.color}` : ''
    },
    ...mapGetters({
      getSelected: 'PublishingState/getSelected'
    })
  }
}
</script>
