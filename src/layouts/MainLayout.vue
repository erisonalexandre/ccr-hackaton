<template>
  <q-layout view="lHh Lpr lFf">
    <q-footer elevated>
      <q-tabs
        indicator-color="yellow"
        class="text-white shadow-2"
        style="background-color: #F1C232; text-size: 12px"
      >
        <q-route-tab to="Rewards" icon="emoji_events" label="Recompensas" />
        <q-route-tab to="Health" icon="favorite" label="Saúde" />
        <q-route-tab to="Maps" icon="room" label="Mapa" />
        <q-route-tab to="Profile" icon="account_circle" label="Perfil" />
        <q-route-tab to="Emergency" icon="campaign" label="Emergência" />
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
<style lang="scss">
  .q-tabs__content{
    display: flex;
    justify-content: space-around;
  }
  a.q-tab {
    padding: 0;
  }
  a.q-tab .q-tab__icon {
    font-size: 34px;
  }
  a.q-tab .q-tab__label {
    font-size: 9px;
    padding-top: 7px;
  }
  .q-router-link--active {
    color: #9E260E;
  }
</style>
