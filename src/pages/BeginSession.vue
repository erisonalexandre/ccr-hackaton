<template>
  <div class="container text-center w-100" style="background-color: #980000; height: 100vh;">
    <div class="align-center mb-40">
      <h4 class="text-ccr-yellow" style="margin-bottom: 3px; margin-top: 0px; padding-top: 5px">MINHA ESTRADA</h4>
      <img src="/statics/img/logo-background-red.png" alt="" style="width: 120px">
      <h4 class=" text-ccr-yellow" style="margin-top: 3px">Iniciar Sessão</h4>
      <p class="text-white">Enviaremos uma mensagem para seu WhatsApp ou um SMS para verificar seu número de telefone.</p>
    </div>

    <div>
      <q-form @submit.prevent="pass">
        <div class="row mb-40">
          <q-input
            filled
            v-model="ddd"
            class="col-2"
            style="border-right: 1px solid #e0dede;"
            placeholder="+00"
            mask="+##"
            required
          />
          <q-input
            filled
            class="col-10"
            v-model="phone"
            placeholder="9999 - 99999"
            mask="#### - #####"
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
  name: 'BeginSession',
  data () {
    return {
      ddd: null,
      phone: null
    }
  },
  methods: {
    pass () {
      this.$router.push({ name: 'Verification' })
    }
  }
}
</script>

<style lang="scss" scoped>
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
  .text-ccr-yellow {
    color: #F1C232
  }
  .q-btn__wrapper:before {
    box-shadow: none;
  }
  h3 {
    font-family: Kadwa;
    font-weight: bold;
  }
  .q-input {
    background-color: white;
    font-size: 15px;
    &:first-child {
      border-radius: 10px 0 0 10px;
    }

    &:last-child {
      border-radius: 0 10px 10px 0;
    }
  }
</style>
