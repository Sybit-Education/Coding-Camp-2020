<template>
    <b-container>
        <h2 class="heading1">Passwort Vergessen</h2>
        <p class="reset-description">Geben Sie ihre E-Mail Adresse ein, um Ihr Passwort wieder herzustellen.</p>
        <input v-model="email" class="email-input" type="email" name="email" placeholder="Ihre E-Mail">
            <center><button @click="resetPassword()" class="btn">Zurücksetzen</button></center>
    </b-container>
</template>
<script>
export default {
  data () {
    return {
      email: ''
    }
  },
  methods: {
    resetPassword () {
      this.$store.dispatch('Auth/requestResetPassword', {
        email: this.email
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.heading1{
margin-top: 20px;
margin-left: auto;
margin-right: auto;
text-align: center;
}

.email-input{
width: 100%;
margin: auto;
}

.reset-description{
text-align: center;
margin-top: 20px;
}

.btn{
margin-top: 20px;
text-align: center;
border-color: white;
color: white;
background-color: #F33D88 !important;
}

</style>
