<template>
  <div class="container">
    <div class="d-flex flex-row justify-content-center">
      <div class="col-md-8">
        <form @submit.prevent="signUpUser(user)">
          <b-card>
            <b-card-header>
              <h1>Registrieren</h1>
            </b-card-header>
            <b-card-body>
              <b-form-group label="E-Mail">
                <b-input
                  v-model="user.email"
                  type="email"
                  placeholder="E-Mail"
                  required
                  autofocus
                />
              </b-form-group>

              <b-form-group label="Passwort">
                <b-input
                  v-model="user.password"
                  type="password"
                  placeholder="Passwort"
                  required
                />
              </b-form-group>

              <b-form-group label="Passwort wiederholen">
                <b-input
                  v-model="user.passwordConfirmation"
                  type="password"
                  placeholder="Passwort"
                  required
                />
              </b-form-group>
              <b-button type="submit" variant="primary" >Registrieren</b-button>
              <b-link id="login-anchor" to="/login" >Anmelden</b-link>
            </b-card-body>
          </b-card>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data () {
    return {
      user: {
        email: '',
        password: '',
        passwordConfirmation: ''
      }
    }
  },
  methods: {
    async signUpUser (user) {
      if (user.password === user.passwordConfirmation) {
        await this.$store.dispatch('Auth/signUpWithEmail', user)
          .then(() => {
            this.$router.replace('profile')
          })
          .catch((e) => {
            Vue.notify({
              group: 'notification',
              title: 'Error',
              type: 'error',
              text: e
            })
          })
      } else {
        Vue.notify({
          group: 'notification',
          title: 'Error',
          type: 'error',
          text: 'Passwort stimmt nicht überein.'
        })
      }
    }
  }
}
</script>

<style scoped>
  #login-anchor {
    margin-left: 10px
  }
</style>
