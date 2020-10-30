<template>
  <div>
    <b-container class="mt-4">
      <b-row>
        <b-col class="ml-2">
          <headline title="Profil"></headline>
        </b-col>
      </b-row>
      <b-row class="avatar-name align-self mt-3">
        <b-col cols="4">
          <avatar v-if="user"/>
        </b-col>
        <b-col class="align-self-center">
          <user-display-name :isEditable="true"/>
          <small>{{ user.email }}</small>
        </b-col>
      </b-row>
      <hr />
      <b-row>
        <b-col>
          <b-button-group vertical>
            <b-button v-if="user" @click="signOut()">Abmelden</b-button>
            <delete-user-modal v-if="user"></delete-user-modal>
          </b-button-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import { $auth } from '@/firebase-config'
import Avatar from '@/components/_base/Avatar.vue'
import UserDisplayName from '@/components/_base/UserDisplayName.vue'
import DeleteUserModal from '@/components/element/DeleteUserModal.vue'
export default {
  name: 'Profile',
  components: {
    UserDisplayName,
    Avatar,
    DeleteUserModal
  },
  async created () {
    await this.fetchById(this.user.uid)
  },
  computed: {
    user () {
      return $auth.currentUser
    },
    ...mapGetters({
      isAdmin: 'Userdata/isAdmin'
    })
  },
  methods: {
    ...mapActions({
      signOut: 'Auth/signOut',
      fetchById: 'Userdata/fetchById'
    })
  }
}
</script>
