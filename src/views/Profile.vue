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
      <h4 class="mt-5 ml-2">Dein Score</h4>
      <div class="d-flex justify-content-center mt-3">
        <b-button class="logout-button" v-if="user" @click="signOut()">Abmelden</b-button>
      </div>
    </b-container>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import { $auth } from '@/firebase-config'
import Avatar from '@/components/_base/Avatar.vue'
import UserDisplayName from '@/components/_base/UserDisplayName.vue'

export default {
  name: 'Profile',
  components: {
    UserDisplayName,
    Avatar
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
