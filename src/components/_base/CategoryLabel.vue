<template>
  <b-badge class="category">{{ text }}</b-badge>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'CategoryLabel',
  props: {
    categoryId: {
      type: String,
      required: false,
      default: ''
    }
  },
  created () {
    this.fetchList()
  },
  computed: {
    text () {
      const category = this.getSelected(this.categoryId)
      let text = ''
      if (category) {
        text = category.name
      }
      return text
    },
    ...mapGetters({
      getSelected: 'Category/getSelected',
      getList: 'Category/getList'
    })
  },
  methods: {
    ...mapActions('Category', ['fetchList'])
  }
}
</script>

<style>

</style>
