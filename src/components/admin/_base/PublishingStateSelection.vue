<template>
  <b-form-select
    v-model="publishingState"
    :options="list"
    value-field="value" text-field="name" />
</template>

<script>
export default {
  name: 'PublishingStateSelection',
  props: {
    publishingState: String
  },
  data () {
    return {
      list: [
        { value: 'draft', name: 'Entwurf' },
        { value: 'review', name: 'in Review' },
        { value: 'online', name: 'Veröffentlicht' }
      ]
    }
  }
}
</script>
