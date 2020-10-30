<template>
  <div id="impulse-list" class="impulse-list">
    <loading-indicator v-if="isLoading" message="Impulse werden geladen ..." />
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
  async created () {
    if (this.user !== null) {
      await this.fetchById(this.user.uid)
    }
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
    newImpulseList () {
      const impulseListData = this.impulseList
      const MONTH_IN_MILLISECONDS = 2592000000
      const newListData = impulseListData.filter(impulse => new Date((new Date(impulse.publishingDate).getTime()) + MONTH_IN_MILLISECONDS).getTime() > new Date().getTime())
      return newListData
    },
    ...mapGetters({
      impulseList: 'Impulse/getList'
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
