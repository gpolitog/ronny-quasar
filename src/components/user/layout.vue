<template>
  <!-- Configure "view" prop for QLayout -->
  <q-layout view="hHh Lpr fff" :left-class="{'bg-grey-2': true}">
    <q-toolbar slot="header">
      <!-- opens drawer below -->
      <button class="hide-on-drawer-visible" @click="$refs.drawer.open()">
        <i>menu</i>
      </button>

      <q-toolbar-title>Ronny</q-toolbar-title>
    </q-toolbar>

    <!-- Navigation Tabs
    <q-tabs slot="navigation">
    <q-route-tab slot="title" icon="view_quilt" to="/layout/about" replace hide="icon" label="About" />
    <q-route-tab slot="title" icon="view_day" to="/layout/toolbar" replace hide="icon" label="Toolbar" />
    <q-route-tab slot="title" icon="view_day" to="/layout/tabs" replace label="Tabs" />
    <q-route-tab slot="title" icon="input" to="/layout/drawer" replace label="Drawer" />
  </q-tabs>
-->

<!-- Left Side Panel -->
<div slot="left">
  <q-list no-border link inset-delimiter>
    <q-side-link item to="/apps">
      <q-item>
        <q-item-side icon="apps" />
        <q-item-main label="Apps" />
      </q-item>
    </q-side-link>
    <q-side-link item to="/change-email">
      <q-item>
        <q-item-side icon="email" />
        <q-item-main label="Mailadres aanpassen" />
      </q-item>
    </q-side-link>
    <q-side-link item to="/change-password">
      <q-item>
        <q-item-side icon="vpn key" />
        <q-item-main label="Wachtwoord aanpassen" />
      </q-item>
    </q-side-link>
    <q-side-link item to="/logout">
      <q-item>
        <q-item-side icon="exit to app" />
        <q-item-main label="Afmelden" />
      </q-item>
    </q-side-link>
  </q-list>
</div>

<!-- Right Side Panel
<div slot="right">
...
</div>
-->

<router-view />

<!-- Footer
<q-toolbar slot="footer">
...
</q-toolbar>
-->
</q-layout>
</template>

<script>
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QIcon,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain,
  QSideLink
} from 'quasar'

export default {
  data () {
    return {}
  },
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    QSideLink
  }
}
</script>

<style>
</style>
