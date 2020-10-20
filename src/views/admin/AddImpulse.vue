<template>
  <div id="add-impulse" class="container">
    <main-header :headerTitle="'Administration'"></main-header>
    <h1>Neuer Impuls</h1>
    <b-button to="/admin" class="my-3" variant="primary">zurück</b-button>
    <impulse-add></impulse-add>

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

<style>

</style>
