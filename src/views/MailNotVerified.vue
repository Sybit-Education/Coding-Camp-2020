<template>
  <div class="container">
    <main-header :headerTitle="'E-Mail verifizieren'"></main-header>
    <div class="m-3">
      <p>Deine E-Mail ist noch nicht verifiziert.</p>
      <p>Bitte schau in dein Postfach und verifiziere deine E-Mail.</p>
    </div>
    <div class="m-3 text-center">
      <b-button variant="primary" to="/login">Anmelden</b-button>
    </div>
  </div>
</template>

<script>
import MainHeader from '@/components/_base/Header'

export default {
  name: 'MailNotFound',
  components: {
    MainHeader
  }
}
</script>

<style>

</style>
