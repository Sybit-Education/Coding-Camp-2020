<template>
  <div>
    <div class="d-flex justify-content-center pt-5">
      <impulse-list-new></impulse-list-new>
    </div>
    <router-link to="SignUp">Sign-Up </router-link><br>
    <router-link to="login">Login</router-link>
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
