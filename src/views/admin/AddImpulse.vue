<template>
  <div id="add-impulse">
    <main-header :headerTitle="'Administration'"></main-header>
    <b-container>
      <h1>Neuer Impuls</h1>
      <b-button to="/admin" class="my-3" variant="primary">zurück</b-button>
      <impulse-add></impulse-add>
    </b-container>
  </div>
</template>

<script>
import MainHeader from '@/components/_base/Header'
import ImpulseAdd from '@/components/admin/ImpulseAdd.vue'

export default {
  name: 'AddImpulse',
  components: {
    MainHeader,
    ImpulseAdd
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 1.5rem;
  margin-bottom: 6rem;
}
</style>
