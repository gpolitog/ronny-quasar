<template>
  <!-- Configure "view" prop for QLayout -->
  <q-layout ref="layout" view="hHh lpr fff" :left-class="{'bg-grey-2': true}">
    <q-toolbar slot="header">
      <!-- opens drawer below -->
      <q-btn flat class="hide-on-drawer-visible" @click="$refs.layout.toggleLeft()()">
        <q-icon name="menu" />
      </q-btn>

      <q-toolbar-title>Ronny Admin</q-toolbar-title>
    </q-toolbar>

    <!-- Left Side Panel -->
    <div slot="left">
      <q-list no-border link inset-delimiter>
        <q-side-link item to="/admin/users">
          <q-item>
            <q-item-side icon="group" />
            <q-item-main label="Gebruikers" />
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

    <router-view />

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
  QTabs,
  QRouteTab,
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
    QTabs,
    QRouteTab,
    QBtn
  }
}
</script>

<style>
</style>
