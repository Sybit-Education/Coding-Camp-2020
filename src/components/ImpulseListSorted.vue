<template>
  <div id="impulse-list" class="impulse-list">
    <loading-indicator v-if="isLoading" message="Impulse werden geladen ..." />

    <div v-else v-for="impulse in assignedImpulseList" :key="impulse.id" class="impulse-card-wrapper">
      <impulse-card :impulse="impulse"></impulse-card>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import LoadingIndicator from '@/components/_base/LoadingIndicator.vue'
import { $auth } from '@/firebase-config'
import ImpulseCard from '@/components/cards/ImpulseCard.vue'

export default {
  name: 'ImpulseListSorted',
  async created () {
    await this.fetchById(this.user.uid)
    this.fetchList()
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
    assignedImpulseList () {
      const impulseListData = this.impulseList
      const assignedListData = this.assignedList.map((impulse) => impulse.impulseId)
      const finalAssignedImpulseList = impulseListData.filter((impulse) => assignedListData.includes(impulse.id))
      return finalAssignedImpulseList
    },
    ...mapGetters({
      impulseList: 'Impulse/getList',
      assignedList: 'Userdata/assignedImpulseMap'
    })
  },
  methods: {
    ...mapActions('Impulse', ['fetchList']),
    ...mapActions('Userdata', ['fetchById'])
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
