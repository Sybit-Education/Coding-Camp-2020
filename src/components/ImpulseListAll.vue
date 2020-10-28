<template>
  <div id="impulse-list" class="impulse-list">
    <loading-indicator v-if="isLoading" message="Impulse werden geladen ..." />
    <div v-else v-for="impulse in impulseListSample" :key="impulse.id" class="impulse-card-wrapper">
      <!-- TODO: Hier gehört die impuls Card hin -->
      <impulse-card :impulse="impulse"></impulse-card>
    </div>
  </div>
</template>

<script>
import LoadingIndicator from '@/components/_base/LoadingIndicator.vue'
import ImpulseCard from '@/components/cards/ImpulseCard.vue'
export default {
  name: 'ImpulseListAll',
  data () {
    return {
      impulseListSample: [
        {
          title: 'Lukas bitte mehr Stückseife kaufen',
          description: 'Am besten wäre es, wenn ihr keine Flüssigseife mehr kauft sondern eher Stückseife benutzt.'
        },
        {
          title: 'Moin Meyster',
          description: 'Moin servus moin'
        },
        {
          title: 'Coding Camp',
          description: 'Sei ein Held'
        },
        {
          title: 'Agile Bodensee',
          description: 'Yeeehaaa'
        }
      ]
    }
  },
  components: {
    LoadingIndicator,
    ImpulseCard
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
