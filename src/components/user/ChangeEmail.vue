<template>
  <!-- if you want automatic padding use "layout-padding" class -->
  <div class="layout-padding">
    <h1>Mailadres aanpassen</h1>
    <q-field label="Nieuw mailadres" :label-width="3">
      <q-input name="email" v-model="email" />
    </q-field>
    <q-field label="Herhaal mailadres" :label-width="3">
      <q-input name="repeat_email" v-model="repeat" />
    </q-field>
    <q-btn color="green" :disabled="!emailCheck">Opslaan</q-btn>
    <q-btn @click="cancelChange">Annuleren</q-btn>
  </div>
</template>

<script>
import {
  QField,
  QInput,
  QBtn
} from 'quasar'
import isEmail from 'isemail'

export default {
  data () {
    return {
      email: '',
      repeat: ''
    }
  },

  computed: {
    emailCheck () {
      return isEmail.validate(this.email) && this.email === this.repeat
    }
  },

  methods: {
    cancelChange () {
      this.$router.replace('/')
    }
  },

  components: {
    QField,
    QInput,
    QBtn
  }
}
</script>

<style>
</style>
