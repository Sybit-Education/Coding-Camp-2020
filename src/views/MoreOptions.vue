<template>
<b-container>
  <b-row>
    <b-col>
      <headline title="Optionen"></headline>
    </b-col>
  </b-row>
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
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import { $auth } from '@/firebase-config'

export default {
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
