<template>
  <div id="admin-view">
    <main-header :headerTitle="'Administration'" />
    <b-container fluid>
      <b-row>
        <b-col md="6">
          <h3>
            Liste der Impulse ({{ this.rows }})
            <b-button to="/admin/new" class="float-right" variant="primary" size="sm">+ Neuer Impuls</b-button>
          </h3>
            <b-table
              id="impulseList"
              ref="impulseListTable"
              :items="impulseList"
              :busy="isBusy"
              :fields="fields" primary-key="id"
              :per-page="perPage"
              :current-page="currentPage"
              :sort-by="sortBy"
              :sort-desc="sortDesc"
              :selectable="true"
              select-mode="single"
              @row-selected="rowSelected"
              @row-clicked="rowClicked"
              sticky-header="740px"
              hover small show-empty
              >
              <template #table-busy>
                <div class="text-center text-danger my-2">
                  <b-spinner class="align-middle"></b-spinner>
                  <strong>Loading...</strong>
                </div>
              </template>
              <template v-slot:cell(title)="data">
                <div><b>{{ data.value }}</b></div>
                <category-label :categoryId="data.item.category" />
              </template>
              <template v-slot:cell(publishingDate)="data">
                <p>{{ data.value.toDate() | Date }}</p>
              </template>
            </b-table>
            <b-pagination
            align="fill"
              v-model="currentPage"
              :total-rows="rows"
              :per-page="perPage"
              aria-controls="impulseList"
            />
        </b-col>
        <b-col md="6" >
          <template v-if="isClicked">
            <h3 class="col-12">Impuls bearbeiten</h3>
            <impulse-edit class="col-12" :impulse="selectedImpulse" />
          </template>
          <div v-else class="d-flex justify-content-center align-items-center">
            <h4 class="text-center my-5 py-3">
            Wähle einen Impuls aus, um diesen zu bearbeiten.
            </h4>
          </div>
        </b-col>
      </b-row>
    </b-container>
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
      isBusy: true,
      isClicked: false
    }
  },
  async mounted () {
    this.isBusy = true
    await this.fetchListAdmin()
    this.isBusy = false
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

<style lang="scss" scoped>
.container-fluid {
  margin-top: 1.5rem;
  margin-bottom: 6rem;
}
</style>
