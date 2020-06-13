<template>
  <q-layout view="lHh Lpr lFf">
    <q-footer elevated>
      <q-tabs
        v-model="tab"
        indicator-color="yellow"
        class="text-white shadow-2"
        style="background-color: #F1C232"
      >
        <q-route-tab to="Emergency" label="Emergência" />
        <q-route-tab to="Maps" label="Mapa" />
        <q-route-tab to="Health" label="Saúde" />
        <q-route-tab to="Profile" label="Perfil" />
        <q-route-tab to="Rewards" label="Recompensas" />
      </q-tabs>
    </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout'
}
</script>
