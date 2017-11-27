<template>
  <q-card inline style="width: 300px">
    <q-card-media>
      <img src="statics/quasar-logo.png">
    </q-card-media>
    <q-card-title>Stocky</q-card-title>
    <q-card-main>Een beursfuif</q-card-main>
  </q-card>
</template>

<script>
import {
  QCard,
  QCardMedia,
  QCardTitle,
  QCardMain,
  QCardActions
} from 'quasar'

export default {
  data () {
    return {}
  },

  components: {
    QCard,
    QCardMedia,
    QCardTitle,
    QCardMain,
    QCardActions
  }
}
</script>

<style>
</style>
