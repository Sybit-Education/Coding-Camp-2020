<template>
  <div>
    <impulse-list-all></impulse-list-all>
    <router-link to="SignUp">Sign-Up </router-link><br>
    <router-link to="login">Login</router-link>
  </div>
</template>
<script>
import ImpulseListAll from '@/components/ImpulseListAll.vue'
export default {
  components: {
    ImpulseListAll
  }
}
</script>
