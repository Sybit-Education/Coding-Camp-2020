<template>
  <div id="impulse-list" class="impulse-list">
    <loading-indicator v-if="isLoading" message="Impulse werden geladen ..." />
    <template v-else-if="user && $store.state.Userdata.userdata">
      <div v-if="hasUnassignedImpulse">
        <div v-for="impulse in notAssignedImpulseList" :key="impulse.id" class="impulse-card-wrapper">
          <impulse-card :impulse="impulse"></impulse-card>
        </div>
      </div>
      <div v-else>
        <p>
          Aktuell gibt es keine weiteren Impulse zum Annehmen.
        </p>
        <p>
          Sicher hast du schon welche
          <router-link to="/assigned-impulse">favorisiert</router-link>.
        </p>
      </div>
    </template>
    <div v-else v-for="impulse in impulseList" :key="impulse.id" class="impulse-card-wrapper">
      <impulse-card :impulse="impulse"></impulse-card>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import LoadingIndicator from '@/components/_base/LoadingIndicator.vue'
import ImpulseCard from '@/components/cards/ImpulseCard'
import { $auth } from '@/firebase-config'
export default {
  name: 'ImpulseListNew',
  data () {
    return {
    }
  },
  created () {
    this.fetchUserData().then(() => {
      this.fetchList()
    })
  },
  components: {
    LoadingIndicator,
    ImpulseCard
  },
  computed: {
    user () {
      return $auth.currentUser
    },
    isLoading () {
      return (this.impulseList.length === 0)
    },
    newImpulseList () {
      const impulseListData = this.impulseList
      const MONTH_IN_MILLISECONDS = 2592000000
      const newListData = impulseListData.filter(impulse => new Date((new Date(impulse.publishingDate).getTime()) + MONTH_IN_MILLISECONDS).getTime() > new Date().getTime())
      return newListData
    },
    notAssignedImpulseList () {
      const impulseListData = this.impulseList
      const assignedListData = this.assignedList.map((impulse) => impulse.impulseId)
      const finalNotAssignedImpulseList = impulseListData.filter((impulse) => !assignedListData.includes(impulse.id))
      return finalNotAssignedImpulseList
    },
    hasUnassignedImpulse () {
      return this.notAssignedImpulseList.length > 0
    },
    ...mapGetters({
      impulseList: 'Impulse/getList',
      assignedList: 'Userdata/assignedImpulseMap'
    })
  },
  methods: {
    ...mapActions('Impulse', ['fetchList']),
    ...mapActions('Userdata', ['fetchUserData'])
  }
}
</script>

<style scoped>
.impulse-list {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: hidden;
  scrollbar-width: none;
}

.impulse-list::-webkit-scrollbar {
  display: none;
}

.impulse-card-wrapper {
  flex: 0 0 auto;
  width: 85%;
  scroll-snap-align: center;
  margin-left: 16px;
}

@media only screen and (min-width: 768px) {
  .impulse-card-wrapper {
    width: 75%;
  }
}
@media only screen and (min-width: 992px) {
  .impulse-list {
    flex-direction: column;
    width: 400px;
  }
  .impulse-card-wrapper {
    margin-left: 0;
    width: 100%;
    margin-bottom: 32px;
  }
}
</style>
