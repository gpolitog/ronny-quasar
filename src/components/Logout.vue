<template>
  <div class="window-height window-width bg-light row items-center justify-center">
    <q-icon name="cached" color="primary" size="30px" class="animate-spin-reverse" />
    <big class="on-right">Afmelden ...</big>
  </div>
</template>

<script>
import { QIcon } from 'quasar'

export default {
  data () {
    return {}
  },
  components: { QIcon },
  mounted: function () {
    const vue = this
    let http = new XMLHttpRequest()
    http.open('GET', 'http://localhost:3000/logout', true)
    http.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        vue.$router.replace('/login')
      }
    }
    http.send()
  }
}
</script>

<style>
</style>
