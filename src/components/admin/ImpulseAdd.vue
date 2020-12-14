<template>
  <b-container id="impulse-edit" >
    <b-form @submit.prevent="addItem">
      <b-form-group label="Titel" label-for="title"
        description="Titel des Impuls">
        <b-input id="title"  v-model="impulse.title" placeholder="Titel" required/>
      </b-form-group>
      <b-row>
        <b-form-group label="Status" class="col"
          description="Status der Veröffentlichung">
          <publishing-state-selection  :publishingState="impulse.publishingState" />
        </b-form-group>
        <b-form-group label="Veröffentlichungsdatum" class="col" label-for="publishingDate"
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
      </b-row>
      <b-row>
        <b-form-group label="Kategorie" class="col"
          description="Kategorie des Impuls">
          <category-selection :impulseCategoryId="impulse.category" v-on:categoryChange="updateCategory" />
        </b-form-group>
        <b-form-group label="Punkte" class="col"
          description="Punkte, die man für den Impuls bekommen kann">
          <b-input v-model="impulse.points" type="number" placeholder="Punkte" required/>
        </b-form-group>
      </b-row>
      <b-form-group label="Was bringt es mir?" label-for="forMe"
        description="Welche Vorteile habe ich, wenn ich diesen Impuls umsetze?">
        <editor id="forMe" v-model="impulse.forMe" name="forMe" />
      </b-form-group>

      <b-form-group
        label="Was bringt es der Welt?"
        label-for="forWorld"
        description="Was hat die ganze Welt davon?">
        <editor id="forWorld" v-model="impulse.forWorld" name="forWorld" />
      </b-form-group>

      <b-form-group label="Erklärung" label-for="description"
        description="Erklärung zum Impuls">
        <editor id="description" v-model="impulse.description" name="description" />
      </b-form-group>

      <b-form-group>
        <b-button type="submit" variant="primary" class="mt-3 mr-3">Hinzufügen</b-button>
      </b-form-group>
    </b-form>

  </b-container>
</template>

<script>
import firebase from 'firebase/app'
import { mapActions } from 'vuex'
import Editor from '@/components/_base/Editor.vue'
import CategorySelection from '@/components/admin/_base/CategorySelection.vue'
import PublishingStateSelection from '@/components/admin/_base/PublishingStateSelection.vue'

export default {
  name: 'ImpulseEdit',
  components: {
    Editor,
    CategorySelection,
    PublishingStateSelection
  },
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
      this.$router.push('/admin')
    },
    updateCategory (categoryId) {
      this.impulse.category = categoryId
    },
    ...mapActions('Impulse', ['add'])
  }
}
</script>
