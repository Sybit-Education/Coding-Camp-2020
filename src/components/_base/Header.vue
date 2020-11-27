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

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse v-if="isProfile" id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown no-caret right>
            <template v-slot:button-content>
              <vue-fontawesome icon="ellipsis-v" color="black" ></vue-fontawesome>
            </template>
            <b-dropdown-item v-b-modal.modal-delete-account variant="danger" to="/profile">
               <DeleteUserModal></DeleteUserModal>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
import DeleteUserModal from '@/components/element/DeleteUserModal'
export default {
  props: {
    headerTitle: {
      type: String
    }
  },
  components: {
    DeleteUserModal
  },
  computed: {
    isProfile () {
      return this.$router.history.current.path === '/profile'
    },
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
