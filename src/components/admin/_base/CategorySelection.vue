<template>
  <b-form-select
    :value="selectedValue"
    :options="list"
    value-field="value"
    text-field="name" >
    <template v-slot:first>
      <b-form-select-option :value="null" disabled>
        -- Kategorie auswählen --
      </b-form-select-option>
    </template>
  </b-form-select>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CategorySelection',
  props: {
    impulseCategoryId: {
      type: String,
      required: false
    }
  },
  data () {
    return {
      selectedValue: ''
    }
  },
  mounted () {
    this.fetchList()
      .then(() => {
        this.selectedValue = this.impulseCategoryId
      })
  },
  computed: {
    ...mapGetters({
      list: 'Category/getList'
    })
  },
  watch: {
    impulseCategoryId (newValue, oldValue) {
      if (newValue !== oldValue) {
        this.selectedValue = this.impulseCategoryId
      }
    },
    selectedValue (newValue, oldValue) {
      if (newValue !== oldValue) {
        this.$emit('categoryChange', this.selectedValue)
      }
    }
  },
  methods: {
    ...mapActions('Category', ['fetchList'])
  }
}
</script>
