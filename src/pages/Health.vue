<template>
  <div class="container">
    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section>
          <h5 class="text-center">Desafio do dia</h5>
          <div class="row items-center" style="margin-bottom: 20px">
            <img class="col-2" src="/statics/svg/water-bottle.svg" alt="">
            <span class="col-9 q-ml-sm" style="font-size: 18px">Beba 10 copos de água e Ganhe 20 pontos!</span>
          </div>
        </q-card-section>

        <q-card-actions align="center" class="botoes-modal" style="padding: 10px 45px">
          <q-btn label="Aceitar" v-close-popup />
          <q-btn label="Recusar" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <div class="container-btn-desafios">
      <q-btn label="Desafios" class="btn-desafios" @click="confirm = true"/>
    </div>
    <div class="listagem">
      <div class="item row">
        <div class="col-4">
          <img src="/statics/svg/camping.svg" alt="">
          <span>Sono</span>
        </div>
        <div class="col-8">
          {{ sleep }}
        </div>
      </div>
      <div class="item row">
        <div class="col-4">
          <img src="/statics/svg/sofa.svg" alt="">
          <span>Descanço</span>
        </div>
        <div class="col-8">
          {{ rest }}
        </div>
      </div>
      <div class="item row">
        <div class="col-4">
          <img src="/statics/svg/haltere.svg" alt="">
          <span>Exercícios</span>
        </div>
        <div class="col-8">
          {{ execise }}
        </div>
      </div>
      <div class="item row">
        <div class="col-4">
          <img src="/statics/svg/water-bottle.svg" alt="">
          <span>Água</span>
        </div>
        <div class="col-8">
          {{ drinkWater }}
        </div>
      </div>
      <div class="item row">
        <div class="col-4">
          <img src="/statics/svg/balanca.svg" alt="">
          <span>Peso</span>
        </div>
        <div class="col-8">
          {{ weight }}
        </div>
      </div>
      <div class="item row">
        <div class="col-4">
          <img src="/statics/svg/painel-de-controle.svg" alt="">
          <span>Dados Importantes</span>
        </div>
        <div class="col-8">
          {{ importantData }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHealth',
  data () {
    const { health } = this.$store.state.application
    const execise = health.filter((h) => h.type === 'exercise').length
    const sleep = health.filter(h => h.type === 'sleep').length
    const rest = health.filter(h => h.type === 'rest').length
    const drinkWater = health.filter(h => h.type === 'drink_water').length
    const weight = health.filter(h => h.type === 'weight').length
    const importantData = health.filter(h => h.type === 'important_data').length

    return {
      confirm: null,
      execise,
      sleep,
      rest,
      drinkWater,
      weight,
      importantData
    }
  },
  beforeCreate () {
    const { isLogged } = this.$store.state.application
    if (!isLogged) {
      this.$router.push({ name: 'BeginSession' })
    }
  }
}
</script>

<style lang="scss" scoped>
  .container-btn-desafios {
    display: flex;
    justify-content: center;
    .btn-desafios {
      margin: 30px 0;
      width: 100%;
      height: 75px;
      background-color: #9E260E;
      color: white;
      font-weight: bold;
      font-size: 20px;
    }
  }
  @media (max-width: 530px) {
    .col-4 {
      width: 50%;
    }
    .col-8 {
      width: 50%;
    }
  }
  @media (max-width: 370px) {
    .col-4 {
      width: 60%;
    }
    .col-8 {
      width: 40%;
    }
  }
  .q-card {
    background-color: #9E260E;
    color: white;
  }
  .botoes-modal {
    button {
      color: black;
      padding: 2px 10px;
      &:first-child {
        background-color: #F1C232;
        margin-right: auto;
      }
      &:last-child {
        background-color: #e2e0e0;
      }
    }
  }
  .container {
    padding: 0 15px;

    .listagem {
      padding: 0 10px;
      margin-bottom: 20px;

      .row {
        margin-bottom: 35px;
      }

      .col-4 {
        display: flex;

        span {
          align-items: center;
          display: flex;
          margin-left: 8px;
          font-weight: 500;
          font-size: 18px;
        }
      }
      .col-8 {
        padding: 0 15px;
        background-color: #f2f2f2;
        display: flex;
        align-items: center;
        border: 1px solid #e2e0e0;
        font-size: 18px;
        font-weight: 500;
        color: #9E260E;
      }
    }
  }
</style>
