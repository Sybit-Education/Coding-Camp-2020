<template>
  <b-form-select
    :value="selectedValue"
    :options="list"
    value-field="value"
    text-field="name"
    required />
</template>

<script>
export default {
  name: 'PublishingStateSelection',
  props: {
    publishingState: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      selectedValue: '',
      list: [
        { value: '', name: '-- Status auswählen --', disabled: true },
        { value: 'draft', name: 'Entwurf' },
        { value: 'review', name: 'in Review' },
        { value: 'online', name: 'Veröffentlicht' }
      ]
    }
  },
  watch: {
    publishingState (newValue, oldValue) {
      if (newValue !== oldValue) {
        this.selectedValue = newValue
      }
    },
    selectedValue (newValue, oldValue) {
      if (newValue !== oldValue) {
        this.$emit('publishingStateChange', newValue)
      }
    }
  }
}
</script>
