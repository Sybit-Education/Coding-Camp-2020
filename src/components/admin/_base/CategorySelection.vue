<template>
  <b-form-select
    :value="selectionId"
    :options="getList"
    size="sm"
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
      required: true
    }
  },
  data () {
    return {
      selectionId: ''
    }
  },
  mounted () {
    this.fetchList()
      .then(() => {
        this.selectionId = this.impulseCategoryId
      })
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
