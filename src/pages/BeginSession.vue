<template>
  <div class="container text-center w-100" style="margin-top: 15%">
    <div class="row align-center mb-40">
      <h4 class="col-8 text-ccr-primary"><b>Iniciar Sessão</b></h4>
      <p>Enviaremos uma mensagem para seu WhatsApp ou um SMS para verificar seu número de telefone.</p>
    </div>

    <div>
      <q-form @submit.prevent="pass">
        <div class="row mb-40">
          <q-input
            filled
            v-model="phone"
            class="col-2"
            style="border-right: 1px solid #e0dede;"
            placeholder="+55"
            mask="+##"
            required
          />
          <q-input
            filled
            class="col-10"
            v-model="phone"
            placeholder="Escreva seu número"
            mask="### - ####"
            required
          />
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
  name: 'PageSignUp',
  methods: {
    pass () {
      this.$router.push({ name: 'Verification', params: { userId: '123' } })
    }
  }
}
</script>

<style lang="scss">
  .container {
    padding: 0px 10px;
  }
  .mb-40 {
    margin-bottom: 40px;
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
  .text-ccr-primary {
    color: #9E260E
  }
  .q-btn__wrapper:before {
    box-shadow: none;
  }
</style>
