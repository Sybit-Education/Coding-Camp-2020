<template>
  <div id="admin-view">
    <main-header :headerTitle="'Administration'" />
    <b-container fluid>
      <b-row>
        <b-col>
          <h3>
            Liste der Impulse ({{ this.rows }})
            <b-button class="float-right" variant="primary" size="sm"
              v-b-modal="'modal-impulse-create'">
              + Neuer Impuls
            </b-button>
            <impulse-add-modal />
          </h3>
            <b-table
              id="impulseList"
              ref="impulseListTable"
              :items="impulseList"
              :busy="isBusy"
              :fields="fields"
              :per-page="perPage"
              :current-page="currentPage"
              :sort-by="sortBy"
              :sort-desc="sortDesc"
              :selectable="true"
              primary-key="id"
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
                <div>{{ data.value }}</div>
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
        <b-col cols="4" md="6" sm="12">
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
import ImpulseAddModal from '@/components/admin/ImpulseAddModal.vue'

export default {
  name: 'Administration',
  components: {
    MainHeader,
    ImpulseEdit,
    CategoryLabel,
    ImpulseAddModal
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
  mounted () {
    this.isBusy = true
    this.fetchListAdmin()
      .finally(() => {
        this.isBusy = false
      })
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
