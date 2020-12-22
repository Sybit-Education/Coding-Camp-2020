<template>
  <b-badge
    class="category"
    v-if="category"
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
      required: false
    }
  },
  data () {
    return {
      category: null
    }
  },
  mounted () {
    if (this.categoryId) {
      this.fetchList()
        .then(() => {
          this.category = this.getSelected(this.categoryId)
        })
    }
  },
  computed: {
    name () {
      return this.category ? this.category.name : ''
    },
    color () {
      return this.category ? `background-color: ${this.category.color}` : ''
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
