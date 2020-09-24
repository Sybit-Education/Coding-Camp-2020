<template>
  <div id="add-impulse" class="container">
    <main-header :headerTitle="'Administration'"></main-header>
    <h1>Neuer Impuls</h1>
    <b-link to="/">Home</b-link> <b-link to="/admin">admin</b-link>
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
