<template>
  <b-navbar id="navigationBar">
    <b-container>
      <b-navbar-brand>
        <h1>
          <router-link to="/">
            <b-img :src="logo" class="logo" alt="Sei ein Held" />
          </router-link>
          {{ headerTitle }}
        </h1>
      </b-navbar-brand>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  props: {
    headerTitle: {
      type: String
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
  width: 100%;

  h1 {
    font-size: 1.25rem;
  }
  .logo {
    width: 2rem;
    height: 2rem;
  }
}
</style>
