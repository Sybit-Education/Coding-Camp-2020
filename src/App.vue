<template>
  <div id="app">
    <router-view class="router-view"/>
    <update-dialog />
    <A2HS />
    <bottom-navigation></bottom-navigation>
    <cookie-banner/>
    <notifications group="notification" class="mt-3" position="top center" />
  </div>
</template>

<script>
import BottomNavigation from '@/components/navigation/BottomNavigation.vue'
import CookieBanner from '@/components/element/CookieBanner.vue'
import UpdateDialog from '@/components/_base/UpdateDialog.vue'
import A2HS from '@/components/a2hs/A2HS.vue'
export default {
  name: 'App',
  components: {
    BottomNavigation,
    CookieBanner,
    UpdateDialog,
    A2HS
  },
  metaInfo () {
    return {
      title: 'Sei ein Held',
      meta: [
        { name: 'description', content: 'Sei ein Held' },
        { property: 'og:title', content: 'Sei ein Held' },
        { property: 'og:site_name', content: 'Sei ein Held' },
        { property: 'og:type', content: 'website' },
        { name: 'robots', content: 'index,follow' }
      ]
    }
  }
}
</script>
<style lang="scss">

.router-view {
  background-color: var(--background);
  min-height: calc(100vh - 10rem);
  margin-top: 4rem;
  margin-bottom: 4rem;
}

@media (display-mode: standalone) {
  /* All installed PWAs */
  body {
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
  }
}

@media (max-width: 576px) and (display-mode: standalone) {
  /* Installed PWAs on mobile devices */

  @supports (-webkit-overflow-scrolling: touch) {
    /* Installed PWAs on mobile Apple devices */
    .navbar-nav {
      padding-bottom: 20px;
    }
  }

  @supports not (-webkit-overflow-scrolling: touch) {
    /* Installed PWAs on mobile non-Apple devices */
  }
}
</style>
