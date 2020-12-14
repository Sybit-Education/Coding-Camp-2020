<template>
  <div id="impulse-edit">
      <b-form @submit.prevent="save">
        <b-form-group label="Titel" label-for="title"
          description="Titel des Impuls">
          <b-input id="title" v-model="title" placeholder="Titel" required/>
        </b-form-group>

        <b-row>
          <b-form-group
            label="Veröffentlichungsstatus"
            label-for="publishingState"
            class="col"
            description="Status der Veröffentlichung des Impuls">
            <publishing-state-selection
              id="publishingState"
              :publishingState="publishingState"
              v-on:publishingStateChange="updatePublishingState"/>
          </b-form-group>

          <b-form-group
            label="Veröffentlichungsdatum"
            label-for="publishingDate"
            class="col"
            description="Wann soll dieser Impuls öffentlich werden?">
            <b-datepicker
              id="publishingDate"
              name="publishingDate"
              v-model="publishingDate"
              :value-as-date="true"
              :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
              locale="de"
              calendarLocale="de"
              start-weekday="1"
              placeholder="Datum auswählen"></b-datepicker>
          </b-form-group>
        </b-row>
        <b-row>
          <b-form-group label="Kategorie" label-for="category" class="col"
            description="Kategorie des Impuls">
            <category-selection id="category"
              :impulseCategoryId="category"
              v-on:categoryChange="updateCategory"></category-selection>
          </b-form-group>

          <b-form-group label="Punkte" label-for="points" class="col"
            description="Punkte, die man für den Impuls bekommen kann">
            <b-input id="points" v-model="points" placeholder="Punkte" required/>
          </b-form-group>
        </b-row>
        <b-form-group label="Was bringt es mir?" label-for="forMe"
          description="Welche Vorteile habe ich, wenn ich diesen Impuls umsetze?">
          <editor id="forMe" style="min-height:100px;" v-model="forMe" name="forMe" />
        </b-form-group>

        <b-form-group
          label="Was bringt es der Welt?"
          label-for="forWorld"
          description="Was hat die ganze Welt davon?">
          <editor id="forWorld" style="min-height:100px;" v-model="forWorld" name="forWorld" />
        </b-form-group>

        <b-form-group label="Erklärung" label-for="description"
          description="Erklärung zum Impuls">
          <editor id="description" style="min-height:200px;" v-model="description" name="description" />
        </b-form-group>

        <b-form-group>
          <b-button type="submit" class="mt-3 mr-3" variant="primary">Speichern</b-button>
          <b-button type="button" class="mt-3 mr-3 float-right" variant="danger" @click="$bvModal.show('modal-delete')">Löschen</b-button>
        </b-form-group>
      </b-form>

      <b-modal id="modal-delete" hide-footer>
        <template v-slot:modal-title>
          Impuls löschen?
        </template>
        <div class="d-block">
          Soll der Impuls <br />
          <b>{{ impulse.title }}</b><br />
          wirklich gelöscht werden?
        </div>
        <div class="text-right">
          <b-button class="mt-3 mr-3" variant="danger" @click="deleteItem">OK</b-button>
          <b-button class="mt-3" @click="$bvModal.hide('modal-delete')">Abbrechen</b-button>
        </div>
      </b-modal>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import { mapActions } from 'vuex'
import Editor from '@/components/_base/Editor.vue'
import CategorySelection from '@/components/admin/_base/CategorySelection.vue'
import PublishingStateSelection from '@/components/admin/_base/PublishingStateSelection.vue'

export default {
  name: 'ImpulseEdit',
  props: {
    impulse: {
      type: Object,
      required: false
    }
  },
  components: {
    Editor,
    CategorySelection,
    PublishingStateSelection
  },
  computed: {
    title: {
      get () {
        return this.impulse.title
      },
      set (value) {
        this.updateProperty({ impulse: this.impulse, prop: 'title', value: value })
      }
    },
    description: {
      get () {
        return this.impulse.description
      },
      set (value) {
        this.updateProperty({ impulse: this.impulse, prop: 'description', value: value })
      }
    },
    category: {
      get () {
        return this.impulse.category
      },
      set (value) {
        this.updateProperty({ impulse: this.impulse, prop: 'category', value: value })
      }
    },
    publishingDate: {
      get () {
        return (this.impulse && this.impulse.publishingDate) ? this.impulse.publishingDate.toDate() : null
      },
      set (value) {
        const timestamp = firebase.firestore.Timestamp.fromDate(value)
        this.updateProperty({ impulse: this.impulse, prop: 'publishingDate', value: timestamp })
      }
    },
    forMe: {
      get () {
        return this.impulse.forMe
      },
      set (value) {
        this.updateProperty({ impulse: this.impulse, prop: 'forMe', value: value })
      }
    },
    forWorld: {
      get () {
        return this.impulse.forWorld
      },
      set (value) {
        this.updateProperty({ impulse: this.impulse, prop: 'forWorld', value: value })
      }
    },
    points: {
      get () {
        return this.impulse.points
      },
      set (value) {
        this.updateProperty({ impulse: this.impulse, prop: 'points', value: value })
      }
    },
    publishingState: {
      get () {
        return this.impulse.publishingState
      },
      set (value) {
        this.updateProperty({ impulse: this.impulse, prop: 'publishingState', value: value })
      }
    }
  },
  methods: {
    async save () {
      await this.update(this.impulse)
        .then(() => {
          // TODO Okay - Notification
        })
    },
    async deleteItem () {
      await this.delete(this.impulse)
      this.$bvModal.hide('modal-delete')
    },
    updateCategory (categoryId) {
      this.updateProperty({
        impulse: this.impulse,
        prop: 'category',
        value: categoryId
      })
    },
    updatePublishingState (state) {
      this.updateProperty({
        impulse: this.impulse,
        prop: 'publishingState',
        value: state
      })
    },
    ...mapActions('Impulse', ['fetchList', 'fetchById', 'update', 'updateProperty', 'delete'])
  }
}
</script>
