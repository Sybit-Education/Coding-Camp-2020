<template>
  <div>
    <main-header :headerTitle="title"></main-header>
    <b-container class="mt-4">
      <b-row class="avatar-name align-self mt-3">
        <b-col cols="4">
          <avatar v-if="user"/>
        </b-col>
        <b-col class="align-self-center">
          <user-display-name :isEditable="true"/>
          <small v-if="user">{{ user.email }}</small>
        </b-col>
      </b-row>
      <hr />

      <b-list-group class="mt-5">
        <b-button v-if="user" @click="signOut()">Abmelden</b-button>
        <delete-user-modal v-if="user"></delete-user-modal>
      </b-list-group>
    </b-container>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import Avatar from '@/components/_base/Avatar.vue'
import MainHeader from '@/components/_base/Header'
import UserDisplayName from '@/components/_base/UserDisplayName.vue'
import DeleteUserModal from '@/components/element/DeleteUserModal.vue'
export default {
  name: 'Profile',
  components: {
    UserDisplayName,
    Avatar,
    MainHeader,
    DeleteUserModal
  },
  mounted () {
    this.fetchUserData()
  },
  metaInfo () {
    return {
      title: this.title + ' | Sei ein Held - rette die Welt',
      meta: [
        { name: 'description', content: this.title },
        { property: 'og:title', content: this.title },
        { property: 'og:site_name', content: this.title },
        { property: 'og:type', content: 'website' },
        { name: 'robots', content: 'index,follow' }
      ]
    }
  },
  computed: {
    title () {
      return 'Profil'
    },
    ...mapGetters({

      user: 'Userdata/userData'
    })
  },
  methods: {
    ...mapActions({
      signOut: 'Auth/signOut',
      fetchUserData: 'Userdata/fetchUserData'
    })
  }
}
</script>
