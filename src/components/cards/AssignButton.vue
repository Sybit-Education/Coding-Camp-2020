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
        size="1.5"
      ></vue-fontawesome
    ></b-button>
    <b-button
      pill
      v-if="isAssigned && canBeChecked"
      @click="addPoints"
      id="button2"
      class="d-flex assign-button"
      ><vue-fontawesome
        icon="check-circle"
        color="white"
        size="1.5"
      ></vue-fontawesome
    ></b-button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AssignButton',
  props: {
    impulseId: String
  },
  computed: {
    isAssigned () {
      return this.impulseIsAssigned(this.impulseId)
    },
    canBeChecked () {
      return this.impulseIsCheckable(this.impulseId)
    },
    getSelectedPointsById () {
      return this.getSelectedPoints(this.impulseId)
    },
    ...mapGetters({
      impulseIsAssigned: 'Userdata/impulseIsAssigned',
      impulseIsCheckable: 'Userdata/impulseIsCheckable',
      allPointsFromImpulse: 'Userdata/allPointsFromImpulse',
      getSelectedPoints: 'Impulse/getSelectedPoints'
    })
  },
  methods: {
    assign () {
      this.$store.dispatch('Userdata/assignImpulse', this.impulseId)
      this.showAssignedNotification()
    },
    addPoints () {
      this.$store.dispatch('Userdata/addPointsToUser', this.impulseId)
      this.showCheckedNotification()
    },
    showCheckedNotification () {
      this.$notify({
        group: 'notification',
        title: 'Abgeschlossen!',
        type: 'success',
        text: 'Du hast die Challenge für heute Abgeschlossen sie haben ' + this.getSelectedPointsById + ' punkte gutgeschrieben bekommen'
      })
    },
    showAssignedNotification () {
      this.$notify({
        group: 'notification',
        title: 'Angenommen!',
        type: 'success',
        text: 'Die Challenge wurde angenommen sie haben ' + this.getSelectedPointsById + ' punkte gutgeschreiben bekommen'
      })
    },
    ...mapActions('Userdata', ['addPointsToUser']),
    ...mapActions('Userdata', ['fetchById']),
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
