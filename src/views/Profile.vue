<template>
  <div id="profile" class="container">
    <main-header :headerTitle="'Profil'"></main-header>
    <b-row class="avatar-name align-self-center">
      <b-col cols="3">
        <avatar v-if="user" />
      </b-col>
      <b-col class="align-self-center">
        <user-display-name :isEditable="true"/>
        <small>{{user.email}}</small>
      </b-col>
    </b-row>
    <hr />
    <b-list-group>
      <b-list-group-item v-if="isAdmin" to="/admin">Administration</b-list-group-item>
    </b-list-group>
    <div class="main-container"></div>
    <b-button class="logout-button" v-if="user" @click="signOut()">Abmelden</b-button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { $auth } from '@/firebase-config'
import Avatar from '@/components/_base/Avatar.vue'
import UserDisplayName from '@/components/_base/UserDisplayName.vue'
import MainHeader from '@/components/_base/Header'

export default {
  name: 'Profile',
  components: {
    Avatar,
    UserDisplayName,
    MainHeader
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

<style lang="scss" scoped>
.avatar-name{
  margin-top: 16px;
}
.row{
  margin-left: 0;
  margin-right: 0;
}

.logout-button{
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, -50%);
}

.main-container{
  height: 200px;
  padding-bottom: 100px;
}

#profile{
  position: relative;
}
</style>
