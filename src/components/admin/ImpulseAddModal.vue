<template>
  <b-modal id="modal-impulse-create"
    title="Impuls anlegen"
    ok-title="Anlegen"
    cancel-title="Abbrechen"
    @ok="addItem">
    <div class="d-block">
      <b-form>
        <b-form-group label="Titel" label-for="title"
          description="Titel des Impuls">
          <b-input id="title"  v-model="impulse.title" placeholder="Titel" required/>
        </b-form-group>
        <b-form-group label="Veröffentlichungsdatum"
          label-for="publishingDate"
          description="Wann soll dieser Impuls öffentlich werden?">
          <b-datepicker
            id="publishingDate"
            name="publishingDate"
            v-model="impulse.publishingDate"
            :value-as-date="true"
            :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
            locale="de"
            calendarLocale="de"
            start-weekday="1"
            placeholder="Datum auswählen"></b-datepicker>
        </b-form-group>
      </b-form>
    </div>
  </b-modal>
</template>

<script>
import firebase from 'firebase/app'
import { mapActions } from 'vuex'

export default {
  name: 'ImpulseAddModal',
  data () {
    return {
      impulse: {
        title: '',
        publishingState: 'draft',
        category: null,
        description: '',
        forMe: '',
        forWorld: '',
        publishingDate: new Date()
      }
    }
  },
  methods: {
    async addItem () {
      const value = this.impulse.publishingDate
      this.impulse.publishingDate = firebase.firestore.Timestamp.fromDate(value)

      await this.add(this.impulse)

      this.impulse.title = ''
      this.impulse.publishingDate = new Date()
    },
    ...mapActions('Impulse', ['add'])
  }
}
</script>
