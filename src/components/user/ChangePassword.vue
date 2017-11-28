<template>
  <!-- if you want automatic padding use "layout-padding" class -->
  <div class="layout-padding">
    <h1>Wachtwoord aanpassen</h1>
    <q-field label="Huidige wachtwoord" :label-width="3">
      <q-input name="password" v-model="oldPass" type="password" />
    </q-field>
    <q-field label="Nieuw wachtwoord" :label-width="3">
      <q-input name="new_password" v-model="newPass" type="password" />
    </q-field>
    <q-field label="Herhaal wachtwoord" :label-width="3">
      <q-input name="repeat_password" v-model="repeatPass" type="password" />
    </q-field>
    <q-btn color="green" :disabled="!passwordCheck">Opslaan</q-btn>
    <q-btn @click="cancelChange">Annuleren</q-btn>
  </div>
</template>

<script>
import {
  QField,
  QInput,
  QBtn
} from 'quasar'

export default {
  data () {
    return {
      oldPass: '',
      newPass: '',
      repeatPass: ''
    }
  },

  computed: {
    passwordCheck () {
      return this.oldPass.length && this.newPass.length && this.repeatPass.length && this.newPass === this.repeatPass
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
