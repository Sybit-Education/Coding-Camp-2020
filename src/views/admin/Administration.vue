<template>
  <div id="admin">
    <main-header :headerTitle="'Administration'"></main-header>
    <b-link to="/admin/new">Neuer Impuls</b-link>
    <b-row>
      <b-col md="6">
        <h2>Liste der Impulse ({{ this.rows }})</h2>
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
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="impulseList"
        ></b-pagination>
      </b-col>
      <b-col md="6">
        <impulse-edit :impulse="selectedImpulse" />
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
      showOverlay: false
    }
  },
  created () {
    this.showOverlay = true
    this.fetchListAdmin()
    this.showOverlay = false
  },
  async mounted () {
    this.$refs.impulseListTable.selectRow(this.selectedRow)
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
