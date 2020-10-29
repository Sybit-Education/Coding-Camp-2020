<template>
  <div>
    <div class="d-flex justify-content-center pt-5">
      <impulse-list-new></impulse-list-new>
    </div>
  </div>
</template>
<script>
import ImpulseListNew from '@/components/ImpulseListNew.vue'
export default {
  components: {
    ImpulseListNew
  }
}
</script>
<style scoped>
.container {
  height: 100vh;
}
</style>
