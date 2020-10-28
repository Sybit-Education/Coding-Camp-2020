<template>
    <div>
        <b-row>
            <b-col>
                 <b-avatar size="40px" class="mt-3 mb-2 ml-2"></b-avatar>
            </b-col>
        </b-row>
        <b-container>
          <b-row class="avatar-name align-self-center">
            <b-col cols="3">
              <avatar v-if="user" />
            </b-col>
            <b-col class="align-self-center">
              <user-display-name :isEditable="true"/>
              <small>{{user.email}}</small>
            </b-col>
          </b-row>
        </b-container>
            <b-row class="mt-3 border" >
              <b-col class="flex-row  d-flex justify-content-between align-items-center pt-2">
                <p>Platz</p><p>8</p><p>Punkte</p><p>9999</p>
                </b-col>
            </b-row>
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
<style lang="scss" scoped>
.border{
  border: 3px solid black !important;
}
</style>
