<template>
  <b-badge
    v-bind:style="color"
    v-text="name" />
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'CategoryLabel',
  props: {
    categoryId: {
      type: String,
      required: true
    }
  },
  mounted () {
    this.fetchList()
  },
  computed: {
    name () {
      return this.getSelected(this.categoryId).name
    },
    color () {
      return 'background-color: ' + this.getSelected(this.categoryId).color + ';'
    },
    ...mapGetters({
      getSelected: 'Category/getSelected'
    })
  },
  methods: {
    ...mapActions('Category', ['fetchList'])
  }
}
</script>
