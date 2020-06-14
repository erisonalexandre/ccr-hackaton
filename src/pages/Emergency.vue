<template>
  <div class="container">
    <span class="title">
      Precisando de ajuda?
    </span>
    <span class="subtitle">
      Toque em um dos contatos abaixo!
    </span>
    <q-btn type="a" href="tel:190" class="item" color="black" label="Polícia" />
    <q-btn type="a" href="tel:0800000290" class="item" color="red" label="Central CCR" />
    <q-btn type="a" href="whatsapp://send?phone=5551999723625&text=Eu%20preciso%20de%20ajuda%21" class="item" color="green" label="Suporte via WhatsApp" />
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
    justify-content: flex-start;
    background-color: #9E260E;
  }

  .item {
    margin: 24px;
    padding: 24px 0;
    min-height: 50px;
    transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  }

  .item:active {
    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 5px 8px rgba(0, 0, 0, 0.14), 0 1px 14px rgba(0, 0, 0, 0.12);
  }

  .title {
    text-align: center;
    padding: 20px 0;
    font-size: 40px;
    align-self: center;
    color: #F1C232;
  }

  .subtitle {
    text-align: center;
    padding: 10px 0;
    font-size: 25px;
    align-self: center;
    color: white;
  }
</style>
