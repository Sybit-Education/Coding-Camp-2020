<template>
  <b-navbar id="navigationBar">
    <b-container>
      <b-navbar-brand>
        <span v-if="backlink" class="back-link mr-2">
          <router-link :to="backlink">&lt;Zurück</router-link>
        </span>
        <router-link v-else to="/">
          <b-img :src="logo" class="logo d-inline-block align-top" alt="Sei ein Held" />
        </router-link>
        <span class="header-title">{{ headerTitle }}</span>
      </b-navbar-brand>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  props: {
    headerTitle: {
      type: String
    },
    backlink: {
      type: String,
      required: false
    }
  },
  computed: {
    logo () {
      return require('@/assets/logo.png')
    }
  }
}
</script>

<style lang="scss" scoped>
#navigationBar {
  background-color: $color-yellow;
  width: 100vw;

  header-title {
    font-weight: 500;
  }
  .logo {
    width: 2rem;
    height: 2rem;
  }
  .back-link {
    font-weight: 500;
  }
  .back-link {
    a:hover {
      text-decoration: none;
    }
  }
}
</style>
