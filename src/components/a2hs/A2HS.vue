<template>
<span>
  <A2HSButton v-if="browserPromptBtn" />
  <A2HSSafari v-if="iOSSafariHow2" />
</span>
</template>

<script>
import { a2hsService } from './a2hs.service'
import A2HSSafari from './A2HSSafari.vue'
import A2HSButton from './A2HSButton.vue'
export default {

  name: 'a2hs',
  data () {
    return {
      showAddToHs: true
    }
  },
  components: {
    A2HSSafari, A2HSButton
  },
  created () {
    // a2hsService - START
    a2hsService.init()
    this.showAddToHs = a2hsService.showAddToHomeScreen()
  },
  computed: {
    iOSSafariHow2 () {
      return this.showAddToHs && a2hsService.iOSSafariHow2()
    },
    browserPromptBtn () {
      return true // this.showAddToHs && a2hsService.browserPromptBtn()
    }
  }
}
</script>
