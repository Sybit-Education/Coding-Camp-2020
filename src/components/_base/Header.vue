<template>
  <div id="profile-dropdown">

    <b-navbar id="navigationBar" class="container-fluid pt-0 pl-0">
      <b-navbar-brand><h2>{{ headerTitle }}</h2></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse v-if="isProfile" id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown no-caret right>
            <template v-slot:button-content>
              <vue-fontawesome icon="ellipsis-v" color="black" size="2"></vue-fontawesome>

            </template>
            <b-dropdown-item v-b-modal.modal-delete-account variant="danger" to="/profile">
               <DeleteUserModal></DeleteUserModal>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

  </div>
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
    }
  }
}
</script>

<style lang="scss" scoped>
#profile-dropdown {
  width: 100%;
  height: 75px;
  background-color: $color-yellow;
}

h2 {
  font-weight: bold;
  padding-left: 16px;
  line-height: 75px;
}

</style>
