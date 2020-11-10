<template>
<div id="more-options-view">
  <main-header :headerTitle="'Optionen'"></main-header>
<b-container>
  <b-row class="my-3">
    <b-col>
      <b-list-group>
        <b-list-group-item :to="{ name: 'About'}">Über die App</b-list-group-item>
        <b-list-group-item :to="{ name: 'Team'}">Das Team</b-list-group-item>
        <b-list-group-item :to="{ name: 'Privacy'}">Datenschutz</b-list-group-item>
        <b-list-group-item :to="{ name: 'Imprint'}">Impressum</b-list-group-item>
        <b-list-group-item v-if="isAdmin" to="/admin" variant="primary">Administration</b-list-group-item>
      </b-list-group>
    </b-col>
  </b-row>
</b-container>
</div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import { $auth } from '@/firebase-config'
import MainHeader from '@/components/_base/Header'

export default {
  components: {
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
      fetchById: 'Userdata/fetchById'
    })
  }
}
</script>
