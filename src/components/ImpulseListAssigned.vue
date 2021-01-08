<template>
  <div id="impulse-list" class="impulse-list">
    <loading-indicator v-if="isLoading" message="Impulse werden geladen ..." />
    <div v-else-if="!hasAssignedImpulse">
      <b-container>
        <p>
          Du hast noch keine Impulse angenommen.
        </p>
        <p>
          Du kannst in der
          <router-link to="/">Übersicht</router-link>
          Impulse favorisieren.
        </p>
      </b-container>
    </div>
    <div
      v-for="impulse in assignedImpulseList"
      :key="impulse.id"
      class="impulse-card-wrapper">
      <impulse-card
        :impulse="impulse"
        to="/assigned"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import LoadingIndicator from '@/components/_base/LoadingIndicator.vue'
import ImpulseCard from '@/components/cards/ImpulseCard.vue'

export default {
  name: 'ImpulseListAssigned',
  created () {
    this.fetchUserData()
      .then(() => {
        this.fetchList()
      })
  },
  components: {
    LoadingIndicator,
    ImpulseCard
  },
  computed: {
    isLoading () {
      return (this.impulseList.length === 0)
    },
    assignedImpulseList () {
      const impulseListData = this.impulseList
      const assignedListData = this.assignedList.map((impulse) => impulse.impulseId)
      const finalAssignedImpulseList = impulseListData.filter((impulse) => assignedListData.includes(impulse.id))
      return finalAssignedImpulseList
    },
    hasAssignedImpulse () {
      return this.assignedImpulseList.length > 0
    },
    ...mapGetters({
      impulseList: 'Impulse/getList',
      assignedList: 'Userdata/assignedImpulseMap'
    })
  },
  methods: {
    impulseListLoaded () {
      const impulseId = this.$router.currentRoute.hash.replace('#', '')
      console.log('*impulseListLoaded', impulseId)
      if (impulseId) {
        this.$nextTick(() => {
          this.$root.$emit('scrollToCard', impulseId)
        })
      } else {
        console.log('no impulseId')
      }
    },
    ...mapActions('Impulse', ['fetchList']),
    ...mapActions('Userdata', ['fetchUserData'])
  },
  watch: {
    hasAssignedImpulse (newValue, oldValue) {
      if (newValue) {
        this.impulseListLoaded()
      }
    }
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
