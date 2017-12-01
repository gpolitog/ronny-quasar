<template>
  <div class="window-height window-width bg-light row items-center justify-center">
    <div class="row col-xs-10 col-sm-8 col-md-6 col-lg-4 shadow-4 bg-white sm-gutter" style="padding-right: 16px; padding-bottom: 16px">
      <p class="caption" style="font-size: 1.5rem; padding-left: 1rem; padding-top: 1rem">Registreren</p>

      <div class="col-12">
        <q-input class="no-margin" float-label="Naam (of nickname)" v-model="name" />
      </div>

      <div class="col-12">
        <q-input class="no-margin" float-label="E-mail" v-model="email" />
      </div>

      <div class="col-12">
        <q-input ref="passwordInput" type="password" class="no-margin" float-label="Wachtwoord" v-model="password" />
      </div>

      <div class="col-12">
        <q-input ref="passwordInput" type="password" class="no-margin" float-label="Herhaal wachtwoord" v-model="repeatPassword" />
      </div>

      <div class="col-xs-12 col-sm-6">
        <q-btn class="no-margin full-width" @click="doLogin" loader :disabled="!checkRegister" color="primary">Registreer<br/>TODO: Recaptcha</q-btn>
      </div>

      <div class="col-xs-12 col-sm-6">
        <q-btn class="no-margin full-width" @click="cancelRegister">Annuleer</q-btn>
      </div>
    </div>
  </div>
</template>

<script>
// TODO: Recaptcha
import {
  Alert,
  QBtn,
  QField,
  QInput
} from 'quasar'
import isEmail from 'isemail'

export default {
  data () {
    return {
      name: '',
      email: '',
      password: '',
      repeatPassword: ''
    }
  },

  computed: {
    checkRegister () {
      return this.name.length && this.password.length && this.password === this.repeatPassword && isEmail.validate(this.email)
    }
  },

  components: {
    QBtn,
    QField,
    QInput
  },

  methods: {
    cancelRegister () {
      this.$router.replace('/login')
    },

    doLogin (event, done) {
      // Build request
      const vue = this
      let http = new XMLHttpRequest()
      http.open('POST', 'http://localhost:3000/local/register', true)
      http.setRequestHeader('Content-type', 'application/json')

      // Redirect to / (apps) after successful login
      // Show error on invalid credentials or banned account
      http.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status === 200) {
            const response = JSON.parse(this.responseText)

            if (response.success) {
              const base = btoa(JSON.stringify({
                email: vue.email,
                token: response.token
              }))
              vue.$router.replace(`/verify/${base}`)
              return done()
            }
          }
          vue.alert = Alert.create({html: 'Ongeldige combinatie email/wachtwoord. Probeer opnieuw!'})
          vue.alertShown = true
          vue.password = ''
          vue.$refs.passwordInput.focus()

          done()
        }
      }

      // Send request with credentials
      http.send(JSON.stringify({
        name: this.name,
        email: this.email,
        password: this.password
      }))
    }
  }
}
</script>
