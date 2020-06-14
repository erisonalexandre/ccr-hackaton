<template>
  <div class="container">
    <div class="row align-center">
      <h4 class="col-8"><b>Cadastre-se</b></h4>
      <q-avatar class="background-yellow" text-color="white" icon="person" size="100px"/>
    </div>

    <div>
      <q-form>
        <div class="mb-3">
          <q-input v-model="text" filled label="Nome" />
        </div>
        <div class="mb-3">
          <q-input v-model="text" filled label="Sobrenome" />
        </div>
        <div class="mb-3">
          <q-input v-model="text" filled label="Data de nascimento" />
        </div>
        <div class="mb-3">
          <q-input v-model="text" filled label="Placa de caminhão" />
        </div>
        <div class="mt-40">
          <q-btn label="Avançar" type="submit" rounded class="w-100 background-yellow text-white"/>
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageSignUp'
}
</script>

<style lang="scss">
  .container {
    padding: 0px 10px;
  }
  .mb-3 {
    margin-bottom: 15px;
  }
  .mt-40 {
    margin-top: 40px;
  }
  .w-100 {
    width: 100%;
  }
  .background-yellow {
    background-color: #F1C232
  }
  .q-btn__wrapper:before {
    box-shadow: none;
  }
</style>
