<template>
  <div class="container">
    <q-dialog v-model="modalLogged" persistent>
      <q-card>
        <q-card-section>
          <div class="row items-center text-center" style="margin-bottom: 20px">
            <span class="col-12" style="font-size: 18px">Para acessar essa página você precisa está cadastrado na nossa plataforma</span>
          </div>
        </q-card-section>

        <q-card-actions align="center" class="botoes-modal">
          <q-btn label="Cadastrar" @click="cadastrar" />
          <q-btn label="cancelar" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <span class="title">
      Precisando de ajuda?
    </span>
    <span class="subtitle">
      Toque em um dos contatos abaixo!
    </span>
    <q-btn type="a" href="tel:190" class="item" color="black" label="Polícia" />
    <q-btn type="a" href="tel:0800000290" class="item" color="red" label="Central CCR" />
    <q-btn type="a" href="whatsapp://send?phone=5531985262283&text=Eu%20preciso%20de%20ajuda%21" class="item" color="green" label="Suporte via WhatsApp" />
  </div>
</template>

<script>
export default {
  name: 'PageEmergency',
  data () {
    return {
      modalLogged: false
    }
  },
  methods: {
    cadastrar () {
      this.$router.push({ name: 'BeginSession' })
    }
  },
  beforeRouteLeave (to, from, next) {
    if (to.name !== 'Emergency' && to.name !== 'BeginSession') {
      const { isLogged } = this.$store.state.application

      if (!isLogged) {
        this.modalLogged = true
        return false
      }
    }
    return next()
  }
}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    min-height: calc(100vh - 72px);
    flex-direction: column;
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

  .q-card {
    background-color: #9E260E;
    color: white;
  }
  .botoes-modal {
    button {
      color: black;
      &:first-child {
        background-color: #F1C232;
      }
      &:last-child {
        background-color: #e2e0e0;
      }
    }
  }
</style>
