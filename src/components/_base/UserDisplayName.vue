<template>
  <span>
    <span v-if="!isEditable">{{ dName }}</span>
    <b-input-group v-if="isEditable">
      <b-input name="display-name" v-model="dName" placeholder="öffentlicher Name" class="profile-display-name" v-bind:readonly="isReadOnly"></b-input>
      <b-input-group-append>
        <b-button class="profile-display-button" @click="editOrSaveDisplayName(name)"><vue-fontawesome icon="edit" size="1.2" id="profile-display-icon"></vue-fontawesome></b-button>
      </b-input-group-append>
    </b-input-group>
  </span>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { $auth } from '@/firebase-config'

export default {
  name: 'UserDisplayName',
  data () {
    return {
      name: null,
      isReadOnly: true
    }
  },
  async created () {
    await this.fetchById(this.user.uid)
  },
  props: {
    isEditable: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    user () {
      return $auth.currentUser
    },
    dName: {
      get () {
        return this.displayName
      },
      set (value) {
        this.saveDisplayName(value)
      }
    },
    ...mapGetters({
      userData: 'Userdata/userData',
      displayName: 'Userdata/displayName'
    })
  },
  methods: {
    ...mapActions('Userdata', ['fetchById', 'saveDisplayName']),
    editOrSaveDisplayName () {
      const icon = document.getElementById('profile-display-icon')
      if (icon.classList.contains('fa-edit')) {
        icon.classList.remove('fa-edit')
        icon.classList.add('fa-save')
        this.isReadOnly = false
      } else {
        icon.classList.remove('fa-save')
        icon.classList.add('fa-edit')
        this.isReadOnly = true
      }
    }
  }
}
</script>
<style lang="scss">
.profile-display-name{
  border: none;
  border-bottom: 2px solid $color-grey;
  padding-left: 0px;
  border-radius: 0px;

  &:active, &:focus{
    outline: none !important;
    box-shadow: none;
  }

  &[type='text']{
    font-size: 24px;
    }
  &:read-only{
    background-color: white;
    border: none
  }
}
.profile-display-button{
  background-color: white;
  border: none;
  color: $color-grey;

  &:active, &:focus, &:active, &:hover{
    outline: none !important;
    box-shadow: none !important;
    background-color: white !important;
    color: $color-grey !important;
  }
}

</style>
