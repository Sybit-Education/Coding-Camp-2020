<template>
  <div class="assign-button-wrapper">
    <b-button
      pill
      v-if="!isAssigned"
      id="button"
      @click="assign"
      class="d-flex assign-button"
      ><vue-fontawesome
        icon="plus-circle"
        color="white"
        size="1.75"
      ></vue-fontawesome
    ></b-button>
    <b-button
      pill
      v-if="isAssigned && isCheckable"
      @click="addPoints"
      id="button2"
      class="d-flex assign-button"
      ><vue-fontawesome
        icon="check-circle"
        color="white"
        size="1.75"
      ></vue-fontawesome
    ></b-button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AssignButton',
  props: {
    impulseId: {
      type: String,
      required: true
    }
  },
  computed: {
    isAssigned () {
      return this.isAssignedImpulse(this.impulseId)
    },
    isCheckable () {
      return this.isCheckableImpulse(this.impulseId)
    },
    getSelectedPointsById () {
      return this.getSelectedPoints(this.impulseId)
    },
    ...mapGetters({
      isAssignedImpulse: 'Userdata/isAssignedImpulse',
      isCheckableImpulse: 'Userdata/isCheckableImpulse',
      getSelectedPoints: 'Impulse/getSelectedPoints'
    })
  },
  methods: {
    assign () {
      if (this.user === null) {
        this.$router.push('/login')
      } else {
        this.$store.dispatch('Userdata/assignImpulse', this.impulseId)
        this.showAssignedNotification()
      }
    },
    addPoints () {
      if (this.user === null) {
        this.$router.push('/login')
      } else {
        this.$store.dispatch('Userdata/addPointsToUser', this.impulseId)
        this.showCheckedNotification()
      }
    },
    showCheckedNotification () {
      this.$notify({
        group: 'notification',
        title: 'Abgeschlossen!',
        type: 'success',
        text: 'Du hast die Challenge für heute abgeschlossen und ' + this.getSelectedPointsById + ' Punkte gutgeschrieben bekommen'
      })
    },
    showAssignedNotification () {
      this.$notify({
        group: 'notification',
        title: 'Angenommen!',
        type: 'success',
        text: 'Die Challenge wurde angenommen. Es wurden ' + this.getSelectedPointsById + ' Punkte gutgeschreiben.'
      })
    },
    ...mapActions('Userdata', ['addPointsToUser']),
    ...mapActions('Userdata', ['fetchUserData']),
    ...mapActions('Userdata', ['assignImpulse'])
  }
}
</script>

<style lang="scss" scoped>
.assign-button-wrapper {
  position: absolute;
  bottom: 15px;
  right: 15px;
}

.assign-button{
  background-color: transparent;
  border: none;
}

.assign-button:focus,
.assign-button:active{
  background-color: transparent;
  border: none;
  outline: none;
  box-shadow: none;
}
</style>
