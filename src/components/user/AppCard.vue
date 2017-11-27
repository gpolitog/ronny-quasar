<template>
  <q-card inline style="width: 300px">
    <q-card-media>
      <img :src="img">
    </q-card-media>
    <q-card-title>{{name}}</q-card-title>
    <q-card-main>{{description}}</q-card-main>
    <q-card-separator />
    <q-card-actions>
      <q-btn flat style="width: 100%" @click="launch">Naar {{name}}</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
import {
  QCard,
  QCardMedia,
  QCardTitle,
  QCardMain,
  QCardSeparator,
  QCardActions,
  QBtn,
  openURL
} from 'quasar'

export default {
  data () {
    return {}
  },

  props: ['name', 'description', 'img', 'url'],

  methods: {
    launch () {
      openURL(this.url)
    }
  },

  components: {
    QCard,
    QCardMedia,
    QCardTitle,
    QCardMain,
    QCardSeparator,
    QCardActions,
    QBtn
  }
}
</script>
