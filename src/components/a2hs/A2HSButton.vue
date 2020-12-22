<template>
  <button class="btn-a2hs mat-typography"
    type="button"
    @click="addToHomeScreen()">Add Shortcut To Home/Apps Screen
  </button>
</template>

<script>
import { a2hsService } from './a2hs.service'

export default {

  methods: {
    addToHomeScreen () {
      a2hsService.addToHomeScreen()
    }
  }

}
</script>

<style lang="sass">
.btn-a2hs
  font-size: 75%
  font-weight: 700
  white-space: normal
  border: 1px solid rgba(0, 0, 0, .5)
  padding: 10px 5px 10px 5px
  margin-bottom: 10px
  border-radius: .25rem
  background-color: #ffc107

</style>
