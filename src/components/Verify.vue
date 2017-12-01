<template>
  <div class="window-height window-width bg-light row items-center justify-center">
    <div class="row col-xs-10 col-sm-8 col-md-6 col-lg-4 shadow-4 bg-white sm-gutter" style="padding-right: 16px; padding-bottom: 16px">
      <h1 style="padding-left: 1rem">Proficiat!</h1>
      <p style="padding-left: 1rem">Er is een verificatiecode verzonden naar "{{email}}". Gelieve deze hieronder in te vullen:</p>
      <p>Token {{token}}</p>
      <div class="col-12">
        <q-input class="no-margin" float-label="Code (8 cijfers)" v-model="pin" :length="8" />
      </div>

      <div class="col-xs-12 col-sm-6">
        <q-btn class="no-margin full-width" @click="verifyPin" loader :disabled="!checkPin" color="primary">Verifieer</q-btn>
      </div>

      <div class="col-xs-12 col-sm-6">
        <q-btn class="no-margin full-width" @click="toLogin">Naar login</q-btn>
      </div>
    </div>
  </div>
</template>

<script>
import {
  QBtn,
  QField,
  QInput
} from 'quasar'
import Auth from '../Auth'

export default {
  data () {
    const details = JSON.parse(atob(this.base))
    return {
      pin: '',
      email: details.email,
      token: details.token
    }
  },

  props: ['base'],

  computed: {
    checkPin () {
      return !isNaN(this.pin) && this.pin.length === 8
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

    verifyPin (event, done) {
      // Build request
      const vue = this
      let http = new XMLHttpRequest()
      http.open('POST', 'http://localhost:3000/local/verify', true)
      http.setRequestHeader('Content-type', 'application/json')

      // Redirect to / (apps) after successful login
      // Show error on invalid credentials or banned account
      http.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status === 200) {
            Auth.login()
            vue.$router.replace('/')
          }
          done()
        }
      }

      // Send request with data
      http.send(JSON.stringify({
        token: this.token,
        pin: this.pin
      }))
    }
  }
}
</script>
