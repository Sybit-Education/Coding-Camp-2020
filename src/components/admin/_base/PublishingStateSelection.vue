<template>
  <b-form-select
    v-model="selectedValue"
    :options="getList"
    value-field="value"
    text-field="name"
    required>
    <b-form-select-option :value="null" disabled >-- Status auswählen --</b-form-select-option>
  </b-form-select>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PublishingStateSelection',
  props: {
    publishingState: {
      type: String,
      required: false,
      default: null
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
  mounted () {
    this.selectedValue = this.$props.publishingState
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
  },
  computed: {
    ...mapGetters({
      getList: 'PublishingState/getList'
    })
  }
}
</script>
