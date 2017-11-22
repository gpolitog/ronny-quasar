<template>
  <div class="window-height window-width bg-light row items-center justify-center">
    <div class="row col-xs-10 col-sm-8 col-md-6 col-lg-4 shadow-4 bg-white sm-gutter" style="padding-right: 16px; padding-bottom: 16px">
      <div class="col-12">
        <q-input class="no-margin" float-label="E-mail" v-model="email" />
      </div>

      <div class="col-12">
        <q-input ref="passwordInput" type="password" class="no-margin" float-label="Wachtwoord" v-model="password" />
      </div>

      <div class="col-12">
        <q-btn class="no-margin full-width" @click="doLogin" loader :disabled="!emailPasswordCheck">Aanmelden</q-btn>
      </div>

      <div class="col-xs-12 col-sm-6">
        <q-btn color="blue-9" class="no-margin full-width">Inloggen met Facebook</q-btn>
      </div>

      <div class="col-xs-12 col-sm-6">
        <q-btn color="red-6" class="no-margin full-width">Inloggen met Google</q-btn>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Alert,
  QBtn,
  QField,
  QInput
} from 'quasar'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },

  computed: {
    emailPasswordCheck () {
      return this.email.length && this.password.length
    }
  },

  components: {
    QBtn,
    QField,
    QInput
  },

  methods: {
    doLogin (event, done) {
      // Close alert if shown
      if (this.alertShown) {
        this.alert.dismiss()
        this.alertShown = false
      }

      // Build request
      const vue = this
      let http = new XMLHttpRequest()
      http.open('POST', 'http://localhost:3000/local/login', true)
      http.setRequestHeader('Content-type', 'application/json')

      // Redirect to / (apps) after successful login
      // Show error on invalid credentials or banned account
      http.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status === 200) {
            vue.$router.replace('/')
          } else {
            vue.alert = Alert.create({html: 'Ongeldige combinatie email/wachtwoord. Probeer opnieuw!'})
            vue.alertShown = true
            vue.password = ''
            vue.$refs.passwordInput.focus()
          }
          done()
        }
      }

      // Send request with credentials
      http.send(JSON.stringify({
        username: this.email,
        password: this.password
      }))
    }
  }
}
</script>
