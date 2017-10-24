<template>
  <!-- Configure "view" prop for QLayout -->
  <q-layout ref="layout" view="hHh lpr fff" :left-class="{'bg-grey-2': true}">
    <q-toolbar slot="header">
      <!-- opens drawer below -->
      <q-btn flat class="hide-on-drawer-visible" @click="$refs.layout.toggleLeft()()">
        <q-icon name="menu" />
      </q-btn>

      <q-toolbar-title>Ronny</q-toolbar-title>
    </q-toolbar>

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
  QSideLink,
  QBtn
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
    QSideLink,
    QBtn
  }
}
</script>

<style>
</style>
