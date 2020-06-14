<template>
  <div class="container">
    <div class="row align-center">
      <h4 class="col-8"><b>Cadastre-se no</b><br/><b class="text-ccr-primary">MINHA ESTRADA</b></h4>
      <q-avatar class="background-ccr-primary" text-color="white" icon="person" size="100px"/>
    </div>

    <div>
      <q-form @submit.prevent="register">
        <div class="mb-3">
          <q-input v-model="user.firstName" filled label="Nome" required/>
        </div>
        <div class="mb-3">
          <q-input v-model="user.lastName" filled label="Sobrenome" required/>
        </div>
        <div class="mb-3">
          <q-input v-model="user.birthday" filled label="Data de nascimento" :mask="'##/##/####'" required/>
        </div>
        <div class="mb-3">
          <q-input v-model="user.vehiclePlate" filled label="Placa de caminhão" :mask="'XXX-#X###'" required/>
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
  data () {
    return {
      user: {
        firstName: null,
        lastName: null,
        telephone: null,
        birthday: null,
        vehiclePlate: null
      }
    }
  },
  methods: {
    register () {
      console.log(this.$store.state)

      this.$store.commit('application/userState', this.user)
      this.$store.commit('application/userSessionState', 'jafsdhgas')
      this.$store.commit('application/isLoggedState', true)
      this.$router.push({ name: 'Maps' })
    }
  }
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
  .background-ccr-primary {
    background-color: #9E260E
  }
  .q-btn__wrapper:before {
    box-shadow: none;
  }
</style>
