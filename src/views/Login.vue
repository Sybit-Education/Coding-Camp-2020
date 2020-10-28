<template>
  <div class="d-flex flex-row justify-content-center">
    <div class="col-md-8">
      <b-card>
        <b-card-header>
          <h1>Anmelden</h1>
        </b-card-header>
        <b-card-body>
          <b-form @submit.prevent="signInWithEmailAndPassword()">
          <b-row align-h="center">
            <b-col>
              <b-button variant="danger" @click="signInWithGoogle()">
                <img src="../assets/Google.png" class="SignInWithGoogleIcon"/> Mit Google anmelden
              </b-button>
              </b-col>
          </b-row>
          <hr />

              <b-form-group label="E-Mail">
                <b-input
                  v-model="email"
                  type="email"
                  placeholder="E-Mail"
                  class="form-control"
                  required
                  autofocus
                />
              </b-form-group>

              <b-form-group label="Passwort">
                <b-input
                  v-model="password"
                  type="password"
                  placeholder="Passwort"
                  class="form-control"
                  required
                />
              </b-form-group>
              <b-row class="forgot-password">
              <router-link :to="{ name: 'ResetPassword' }">Passwort vergessen?</router-link>
              </b-row>
              <b-button type="submit" variant="primary">
                Anmelden
              </b-button>
              <b-link id="singUp-anchor" to="/signup">Registrieren</b-link>
          </b-form>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signInWithGoogle () {
      this.$store.dispatch('Auth/signInWithGoogle')
    },
    signInWithEmailAndPassword () {
      this.$store.dispatch('Auth/signInWithEmail', {
        email: this.email,
        password: this.password
      }
      )
    }
  }
}
</script>

<style scoped>
  #singUp-anchor {
    margin-left: 10px
  }

  .SignInWithGoogleIcon{
    width: 10%;
    margin-right: 16px;
  }

  .forgot-password{
    padding-right: 1rem;
    margin-bottom: 16px;
    justify-content: flex-end;
  }
</style>
