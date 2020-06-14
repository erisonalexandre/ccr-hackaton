<template>
  <div class="container">
    <q-btn class="item" color="black" label="Polícia" />
    <q-btn class="item" color="red" label="Central CCR" />
    <q-btn class="item" color="green" label="Suporte via WhatsApp" />
  </div>
</template>

<script>
export default {
  name: 'PageEmergency'
}
</script>

<style scoped>
  .container {
    display: flex;
    min-height: calc(100vh - 72px);
    flex-direction: column;
    justify-content: center;

  }

  .item {
    margin: 10px 20px;
    height: 8vh;
    min-height: 50px;
  }
</style>