<template>
  <div id="impulse-edit" >
    <b-form @submit.prevent="addItem">
      <b-form-group label="Titel" label-for="title"
        description="Titel des Impuls">
        <b-input id="title" size="sm" v-model="impulse.title" placeholder="Titel" required/>
      </b-form-group>

      <b-form-group label="Veröffentlichungsdatum" label-for="publishingDate"
        description="Wann soll dieser Impuls öffentlich werden?">
        <b-datepicker id="publishingDate" size="sm" v-model="impulse.publishingDate" name="publishingDate"
          locale="de" calendarLocale="de" start-weekday="1" placeholder="Datum auswählen"></b-datepicker>
      </b-form-group>

      <b-form-group label="Kategorie" label-for="category"
        description="Kategorie des Impuls">
        <category-selection v-model="impulse.category" v-on:categoryChange="updateCategory"></category-selection>
      </b-form-group>

      <b-form-group label="Was bringt es mir?" label-for="forMe"
        description="Welche Vorteile habe ich, wenn ich diesen Impuls umsetze?">
        <editor id="forMe" size="sm" v-model="impulse.forMe" name="forMe" />
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

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Editor from '@/components/_base/Editor.vue'
import CategorySelection from '@/components/admin/_base/CategorySelection.vue'

export default {
  name: 'ImpulseEdit',
  components: {
    Editor,
    CategorySelection
  },
  data () {
    return {
      impulse: {
        title: '',
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

<style scoped>

</style>
