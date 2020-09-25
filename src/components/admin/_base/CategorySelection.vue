<template>
  <b-form-select
    v-model="selectionId"
    :options="getList"
    value-field="value" text-field="name" >
    <template v-slot:first>
      <b-form-select-option :value="null" disabled>-- Bitte Kategorie auswählen --</b-form-select-option>
    </template>
  </b-form-select>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CategorySelection',
  props: {
    impulseCategoryId: String
  },
  data () {
    return {
      selectionId: ''
    }
  },
  created () {
    this.fetchList()
  },
  computed: {
    ...mapGetters({
      getList: 'Category/getList'
    })
  },
  watch: {
    impulseCategoryId (newValue, oldValue) {
      if (newValue !== oldValue) {
        this.selectionId = this.impulseCategoryId
      }
    },
    selectionId (newValue, oldValue) {
      if (newValue !== oldValue) {
        this.$emit('categoryChange', this.selectionId)
      }
    }
  },
  methods: {
    ...mapActions('Category', ['fetchList'])
  }
}
</script>
