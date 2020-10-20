<template>
  <div id="admin">
    <main-header :headerTitle="'Administration'"></main-header>
    <b-row>
      <b-col xl="6">
        <b-row>
          <b-col cols="12" md="6">
        <h2>Liste der Impulse ({{ this.rows }})</h2>
          </b-col>
          <b-col cols="12" md="6" class="d-flex align-items-center justify-content-start justify-content-md-end py-3 py-md-0">
            <b-button to="/admin/new" variant="primary">Neuer Impuls +</b-button>
          </b-col>
         </b-row>
        <b-overlay :show="showOverlay" rounded="sm">
          <b-table
            id="impulseList"
            ref="impulseListTable"
            :items="impulseList"
            :fields="fields" primary-key="id"
            :per-page="perPage"
            :current-page="currentPage"
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            :selectable="true"
            select-mode="single"
            @row-selected="rowSelected"
            @row-clicked="rowClicked"
            hover small
            >
            <template v-slot:cell(title)="data">
              <div><b>{{ data.value }}</b></div>
              <category-label :categoryId="data.item.category" />
            </template>
            <template v-slot:cell(publishingDate)="data">
              <p>{{ data.value | Date }}</p>
            </template>
          </b-table>
        </b-overlay>
      <b-col cols="12" md="12" class="mt-4">
        <b-pagination
        align="fill"
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="impulseList"
        ></b-pagination>
        </b-col>
      </b-col>
      <b-col xl="6" class="d-flex justify-content-center align-items-center">
        <impulse-edit class="col-12" :impulse="selectedImpulse" v-if="isClicked"/>
        <h4 class="text-center mb-5 mb-md-0 mt-3 mt-md-0 py-3 py-md-0" v-else>Klicke einen Impuls an, um ihn zu bearbeiten.</h4>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import MainHeader from '@/components/_base/Header'
import CategoryLabel from '@/components/_base/CategoryLabel.vue'
import ImpulseEdit from '@/components/admin/ImpulseEdit.vue'

export default {
  name: 'Administration',
  components: {
    MainHeader,
    ImpulseEdit,
    CategoryLabel
  },
  data () {
    return {
      fields: [
        { key: 'title', label: 'Titel', sortable: true },
        { key: 'publishingDate', label: 'Veröffentlichung', sortable: true }
      ],
      sortBy: 'publishingDate',
      sortDesc: true,
      perPage: 10,
      currentPage: 1,
      selectedImpulse: {},
      selectedRow: 0,
      showOverlay: false,
      isClicked: false
    }
  },
  created () {
    this.showOverlay = true
    this.fetchListAdmin()
    this.showOverlay = false
  },
  computed: {
    ...mapGetters({
      impulseList: 'Impulse/getListAdmin'
    }),
    rows () {
      return this.impulseList.length
    }
  },
  methods: {
    /** called by select row in table to update selected impulse in store */
    rowSelected (rows) {
      this.isClicked = true
      if (rows[0] && rows[0].id) {
        this.selectedImpulse = rows[0]
      } else {
        this.$refs.impulseListTable.selectRow(this.selectedRow)
      }
    },
    rowClicked (index) {
      this.selectedRow = index
    },
    ...mapActions('Impulse', ['fetchListAdmin'])
  }

}
</script>

<style>
</style>
