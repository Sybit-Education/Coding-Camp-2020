<template>
  <b-button class="btn-a2hs fixed-bottom"
    type="button"
    @click="addToHomeScreen()">Shortcut zum Home/Apps Screen hinzufügen
  </b-button>
</template>

<script>
import { a2hsService } from './a2hs.service'

export default {
  name: 'A2HSButton',

  methods: {
    addToHomeScreen () {
      a2hsService.addToHomeScreen()
    }
  }

}
</script>

<style lang="scss" scoped>
.btn-a2hs {
  margin: 10px 5px 80px 5px;
}
</style>
