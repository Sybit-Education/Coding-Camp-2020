<template>
  <b-form-select
    v-model="selectedState"
    :options="list"
    value-field="value" text-field="name" />
</template>

<script>
export default {
  name: 'PublishingStateSelection',
  props: {
    publishingState: {
      type: String,
      required: false,
      default: 'draft'
    }
  },
  data () {
    return {
      selectedState: '',
      list: [
        { value: null, name: '-- Status auswählen --', disabled: true },
        { value: 'draft', name: 'Entwurf' },
        { value: 'review', name: 'in Review' },
        { value: 'online', name: 'Veröffentlicht' }
      ]
    }
  },
  watch: {
    publishingState (newValue, oldValue) {
      if (newValue !== oldValue) {
        this.selectedState = newValue
      }
    },
    selectedState (newValue, oldValue) {
      if (newValue !== oldValue) {
        this.$emit('publishingStateChange', newValue)
      }
    }
  }
}
</script>
