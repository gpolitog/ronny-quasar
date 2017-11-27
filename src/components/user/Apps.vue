<template>
  <!-- if you want automatic padding use "layout-padding" class -->
  <div class="layout-padding">
    <h1>Apps</h1>
    <div>
      <app-card />
      <app-card />
    </div>
  </div>
</template>

<script>
import AppCard from './AppCard'

export default {
  data () {
    return {}
  },

  components: {
    AppCard
  }
}
</script>

<style>
</style>
