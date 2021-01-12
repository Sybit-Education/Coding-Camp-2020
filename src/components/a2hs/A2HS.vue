<template>
<span>
  <a2hs-browser-prompt v-if="browserPromptBtn" />
  <ios-safari-how2 v-if="iOSSafariHow2" />
</span>
</template>

<script>
import { a2hsService } from './a2hs.service'

export default {

  name: 'a2hs',
  data () {
    return {
      showAdToHs: true
    }
  },
  created () {
    // a2hsService - START
    a2hsService.checkUserAgent()
    a2hsService.trackStandalone()
    window.addEventListener('beforeinstallprompt', (e) => {
      console.log('beforeinstallprompt')
      // show the add button
      a2hsService.promptIntercepted = true
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      // no matter what, the snack-bar shows in 68 (06/16/2018 11:05 AM)
      e.preventDefault()
      // Stash the event so it can be displayed when the user wants.
      a2hsService.deferredPrompt = e
      a2hsService.promptSaved = true
    })
    window.addEventListener('appinstalled', (evt) => {
      console.log('appinstalled')
      a2hsService.trackInstalled()
      // hide the add button
      a2hsService.promptIntercepted = false
    })

    this.showAdToHs = localStorage.getItem(a2hsService.token) != null
  },
  computed: {
    iOSSafariHow2 () {
      return this.showAdToHs && a2hsService.iOSSafariHow2()
    },
    browserPromptBtn () {
      return this.showAdToHs && a2hsService.browserPromptBtn()
    }
  }
}
</script>

<style>

</style>
