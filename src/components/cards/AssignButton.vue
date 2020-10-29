<template>
    <div>
        <b-button pill v-if="!isAssigned" id="button" @click="assign" class="bg-info d-flex"><vue-fontawesome icon="plus-circle" color="white" size="2"></vue-fontawesome></b-button>
        <b-button pill v-if="isAssigned && canBeChecked" @click="addPoints" id="button2" class="bg-success d-flex"><vue-fontawesome icon="check-circle" color="white" size="2"></vue-fontawesome></b-button>
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
      console.log('impulseId', this.impulseId)
      const response = this.impulseIsAssigned(this.impulseId)
      console.log('isAssigned -> response', response)
      return this.impulseIsAssigned(this.impulseId)
    },
    canBeChecked () {
      return this.impulseIsCheckable(this.impulseId)
    },
    ...mapActions('Userdata', ['addPointsToUser']),
    ...mapActions('Userdata', ['fetchById']),
    ...mapActions('Userdata', ['assignImpulse'])
  },
  methods: {
    assign () {
      this.assignImpulse(this.impulseId)
      this.showAssignedNotification()
    },
    addPoints () {
      this.addPointsToUser(this.impulseId)
      this.showCheckedNotification()
    },
    showCheckedNotification () {
      this.$notify({
        group: 'notification',
        title: 'Abgeschlossen!',
        type: 'success',
        text: 'Du hast die Challenge für heute Abgeschlossen'
      })
    },
    showAssignedNotification () {
      this.$notify({
        group: 'notification',
        title: 'Angenommen!',
        type: 'success',
        text: 'Die Challenge wurde angenommen!'
      })
    },
    ...mapGetters({
      impulseIsAssigned: 'Userdata/impulseIsAssigned',
      impulseIsCheckable: 'Userdata/impulseIsCheckable',
      allPointsFromImpulse: 'Userdata/allPointsFromImpulse'
    })
  }
}

</script>
