<template>
  <div>
  <b-button  v-b-modal.modal-1 variant="outline-primary">Account Löschen</b-button>

<b-modal id="modal-1" title="Account Löschen" hide-footer>
    <b-row>
        <b-col>
            <p>Bestätigen Sie mit der eingabe ihres Passwortes das Löschen ihres Accounts.</p>
        </b-col>
    </b-row>
    <b-row>
        <b-col>
            <b-form-input type="password" placeholder="Passwort" required v-model="password"></b-form-input>
        </b-col>
    </b-row>
     <b-row class="py-3 modal-grey mb-n3">
        <b-col cols="12" class="d-flex justify-content-end">
          <b-button
            @click="deleteAccount()"
            class="d-inline"
            variant="danger"
          >Löschen
          </b-button>
          <b-button
            @click="hideModal()"
            class="d-inline ml-2"
            variant="secondary"
          >
            Abbrechen
          </b-button>
        </b-col>
      </b-row>
  </b-modal>

  </div>
</template>

<script>
export default {
  data () {
    return {
      password: ''
    }
  },
  methods: {
    deleteAccount () {
      this.$store.dispatch('Auth/deleteUser', this.password)
    },
    hideModal () {
      this.$bvModal.hide('modal-delete-account')
    }
  }
}
</script>
