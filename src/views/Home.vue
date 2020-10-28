<template>
  <div>
    <impulseCard/>
    <router-link to="SignUp">Sign-Up </router-link><br>
    <router-link to="login">Login</router-link>
  </div>
</template>
<script>
import impulseCard from '@/components/cards/ImpulseCard.vue'
export default {
  components: {
    impulseCard
  }
}
</script>
