<template>
  <div id="LoginView" class="d-flex flex-row justify-content-center">
    <div class="col-md-8">
      <b-card title="Anmelden">
        <b-card-body>
          <b-row align-h="center">
            <b-col>
              <b-button variant="danger" @click="signInWithGoogle()">
                <img src="../assets/Google.png" class="SignInWithGoogleIcon"/>
                Mit Google anmelden
              </b-button>
            </b-col>
          </b-row>
          <div class="or-line">oder</div>
          <b-form @submit.prevent="signInWithEmailAndPassword()">
            <b-form-group label="E-Mail">
              <b-input
                name="e-mail"
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
                name="password"
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
            <b-link id="singUp-anchor" to="/signup">Jetzt registrieren</b-link>

          </b-form>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    redirect () {
      return this.$route.query.nextUrl
    }
  },
  methods: {
    signInWithGoogle () {
      this.$store.dispatch('Auth/signInWithGoogle', {
        redirect: this.redirect
      })
    },
    signInWithEmailAndPassword () {
      this.$store.dispatch('Auth/signInWithEmail', {
        email: this.email,
        password: this.password,
        redirect: this.redirect
      })
    }
  }
}
</script>

<style scoped>
  #singUp-anchor {
    margin-left: 10px
  }

  .SignInWithGoogleIcon {
    width: 10%;
    margin-right: 16px;
  }

  .forgot-password {
    padding-right: 1rem;
    margin-bottom: 24px;
    justify-content: flex-end;
    margin-top: -15px;
    font-size: 14px;
  }

  .or-line {
    overflow: hidden;
    text-align: center;
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
  }

  .or-line:before,
  .or-line:after {
    background-color: rgba(0,0,0,.125);
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 50%;
  }

  .or-line:before {
    right: 0.5em;
    margin-left: -50%;
  }

  .or-line:after {
    left: 0.5em;
    margin-right: -50%;
  }
</style>
