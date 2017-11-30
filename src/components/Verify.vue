<template>
  <div class="window-height window-width bg-light row items-center justify-center">
    <div class="row col-xs-10 col-sm-8 col-md-6 col-lg-4 shadow-4 bg-white sm-gutter" style="padding-right: 16px; padding-bottom: 16px">
      <h1 style="padding-left: 1rem">Proficiat!</h1>
      <p style="padding-left: 1rem">Er is een mail verzonden naar het opgegeven mailadres met een verificatiecode. Gelieve deze hieronder in te geven:</p>
      <p>{{email}}</p>
      <div class="col-12">
        <q-input class="no-margin" float-label="Code (8 cijfers)" v-model="code" :length="8" />
      </div>

      <div class="col-xs-12 col-sm-6">
        <q-btn class="no-margin full-width" @click="doLogin" loader :disabled="!checkCode" color="primary">Verifieer</q-btn>
      </div>

      <div class="col-xs-12 col-sm-6">
        <q-btn class="no-margin full-width" @click="toLogin">Naar login</q-btn>
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

export default {
  data () {
    console.log(this.base)
    console.log(atob(this.base))
    console.log(JSON.parse(atob(this.base)).email)
    return {
      code: '',
      email: this.$root.email
    }
  },

  props: ['base'],

  computed: {
    checkCode () {
      return !isNaN(this.code) && this.code.length === 8
    }
  },

  components: {
    QBtn,
    QField,
    QInput
  },

  methods: {
    toLogin () {
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
            console.log('Verified')
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
        name: this.name,
        email: this.email,
        password: this.password
      }))
    }
  }
}
</script>
