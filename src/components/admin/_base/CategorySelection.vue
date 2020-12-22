<template>
  <b-form-select
    v-model="selectedValue"
    :options="list"
    value-field="value"
    text-field="name"
    required>
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
    categoryId: {
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
    this.selectedValue = this.$props.publishingState
    this.fetchList()
      .then(() => {
        this.selectedValue = this.categoryId
      })
  },
  computed: {
    ...mapGetters({
      list: 'Category/getList'
    })
  },
  watch: {
    categoryId (newValue, oldValue) {
      if (newValue !== oldValue) {
        this.selectedValue = this.categoryId
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
