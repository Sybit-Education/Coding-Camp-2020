<template>
  <span>
    <b-button
      pill
      v-if="!isAssigned"
      @click="assign"
      class="assign-button m-2"
      >
      <template>
        <vue-fontawesome
          icon="plus-circle"
          color="white"
          size="1.75"
        />
        <span v-if="showLabel" class="m-2">
          Annehmen
        </span>
      </template>
    </b-button>
    <b-button
      pill
      v-if="isAssigned && isCheckable"
      @click="addPoints"
      class="assign-button mx-2"
      >
      <template>
        <vue-fontawesome
          icon="check-circle"
          color="white"
          size="1.75"
        />
        <span v-if="showLabel" class="m-2">
          Heute gemacht!
        </span>
      </template>
    </b-button>
  </span>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AssignButton',
  props: {
    showLabel: {
      type: Boolean,
      default: false
    },
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
      if (this.user) {
        this.$store.dispatch('Userdata/assignImpulse', this.impulseId)
        this.showAssignedNotification()
      } else {
        this.$router.push('/login')
      }
    },
    addPoints () {
      if (this.user) {
        this.$store.dispatch('Userdata/addPointsToUser', this.impulseId)
        this.showCheckedNotification()
      } else {
        this.$router.push('/login')
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

</style>
