class A2HSService {
    token = 'a2hs-flag'
    promptIntercepted = false
    isStandalone = false
    deferredPrompt
    userInstalled = false
    whereIsShare = 'unten'

    // user agent
    isChrome = false
    isExplorer = false
    isExplorer11 = false
    isFirefox = false
    isSafari = false
    isOpera = false
    isEdgeDesktop = false
    isEdgeiOS = false
    isEdgeAndroid = false
    userAgent = ''

    isIOS = false
    isMobile = false

    // For testing debug display only
    promptSaved = false
    customButtonClicked = false
    deferredPromptShown = false
    deferredPromptRejected = false

    // Detects if device is in standalone mode
    isInStandaloneMode = () => ('standalone' in window.navigator)

    init () {
      this.checkUserAgent()
      this.trackStandalone()

      window.addEventListener('beforeinstallprompt', (evt) => {
        console.log('beforeinstallprompt')
        // show the add button
        a2hsService.promptIntercepted = true
        // Prevent Chrome 67 and earlier from automatically showing the prompt
        // no matter what, the snack-bar shows in 68 (06/16/2018 11:05 AM)
        evt.preventDefault()
        // Stash the event so it can be displayed when the user wants.
        a2hsService.deferredPrompt = evt
        a2hsService.promptSaved = true
      })
      window.addEventListener('appinstalled', (evt) => {
        console.log('appinstalled')
        a2hsService.trackInstalled()
        // hide the add button
        a2hsService.promptIntercepted = false
      })
      window.addEventListener('DOMContentLoaded', (evt) => {
        let displayMode = 'browser tab'
        if (navigator.standalone) {
          displayMode = 'standalone-ios'
        }
        if (window.matchMedia('(display-mode: standalone)').matches) {
          displayMode = 'standalone'
        }
        // Log launch display mode to analytics
        console.log('DISPLAY_MODE_LAUNCH:', displayMode)
      })
    }

    showAddToHomeScreen () {
      return (localStorage.getItem(this.token) != null)
    }

    checkUserAgent () {
      this.userAgent = navigator.userAgent.toLowerCase()
      const uaString = this.userAgent

      this.isChrome = /chrome/.test(uaString)
      this.isExplorer = /msie/.test(uaString)
      this.isExplorer11 = /rv:11/.test(uaString)
      this.isFirefox = /firefox/.test(uaString)
      this.isSafari = /safari/.test(uaString)
      this.isOpera = /opr/.test(uaString)
      this.isEdgeDesktop = /edge/.test(uaString)
      this.isEdgeiOS = /edgios/.test(uaString)
      this.isEdgeAndroid = /edga/.test(uaString)

      this.isIOS = /ipad|iphone|ipod/.test(uaString)
      this.isMobile = /mobile/.test(uaString)
      if ((this.isChrome) && (this.isSafari)) {
        this.isSafari = false
      }
      if ((this.isChrome) && ((this.isEdgeDesktop) ||
        (this.isEdgeiOS) ||
        (this.isEdgeAndroid))) {
        this.isChrome = false
      }
      if ((this.isSafari) && ((this.isEdgeDesktop) ||
        (this.isEdgeiOS) ||
        (this.isEdgeAndroid))) {
        this.isSafari = false
      }
      if ((this.isChrome) && (this.isOpera)) {
        this.isChrome = false
      }

      if (/ipad/.test(uaString)) {
        this.whereIsShare = 'oben'
      }
      console.log('checkUserAgent', this)
    }

    trackStandalone () {
      // called once from app.component
      if (window.matchMedia('(display-mode: standalone)').matches) {
        this.isStandalone = true
      }
      console.log('trackStandalone', this.isStandalone)
    }

    trackInstalled () {
      console.log('setting this.userInstalled true')
      this.userInstalled = true
    }

    addToHomeScreen () {
      // call on custom button click
      this.customButtonClicked = true

      if (!this.deferredPrompt) {
        console.log('deferredPrompt null')
        return
      }

      // Show the prompt
      this.deferredPrompt.prompt()
      this.deferredPromptShown = true

      // Wait for the user to respond to the prompt
      this.deferredPrompt.userChoice
        .then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            // no matter the outcome, the prompt cannot be reused ON MOBILE
            // for 3 months or until browser cache is cleared?
          } else {
            this.deferredPromptRejected = true
          }
        })
    }

    showHide (checkWhat) {
      if (checkWhat) {
        return 'block'
      } else {
        return 'none'
      }
    }

    browserPromptBtn () {
      if (this.promptIntercepted && !this.userInstalled) {
        return 'block'
      } else {
        return 'none'
      }
    }

    iOSSafariHow2 () {
      if (this.isSafari && this.isIOS && !this.isStandalone) {
        return 'block'
      } else {
        return 'none'
      }
    }

    showHideButtoniOS () {
      if (this.isIOS && !this.userInstalled) {
        return 'block'
      } else {
        return 'none'
      }
    }

    trueOrFalse (checkWhat) {
      if (checkWhat) {
        return 'green'
      } else {
        return 'red'
      }
    }
}

export const a2hsService = new A2HSService()
