<template>
  <!-- <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg" />
  </q-page> -->
  <h1>Rewards Page</h1>
</template>

<script>
export default {
  name: 'PageRewards',
  beforeCreate () {
    let { isLogged } = this.$store.state.application;
    if(!isLogged) {
      this.$router.push({ name: 'BeginSession' })
    }
  }
}
</script>
