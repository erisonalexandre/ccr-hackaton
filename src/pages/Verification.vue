<template>
  <div class="container text-center w-100" style="padding-top: 35px">
    <img src="/statics/img/logo-background-white.png" alt="">

    <div class="row align-center mb-40">
      <h4 class="col-8 text-ccr-primary"><b>Verificação</b></h4>
      <p>Digite o código de acesso de 6 digítos que chegou para você</p>
    </div>

    <div>
      <q-form @submit.prevent="pass">
        <div class="mb-40">
          <q-input
            filled
            input-class="text-center"
            class="text-center"
            style="font-size:25px"
            v-model="number"
            placeholder="1  1  1   1  1  1"
            mask="#  #  #   #  #  #"
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
  name: 'Verification',
  data () {
    return {
      number: null
    }
  },
  methods: {
    pass () {
      this.$router.push({ name: 'Signup' })
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
