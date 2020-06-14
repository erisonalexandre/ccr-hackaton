<template>
  <div class="container">
    <div class="prize">
      <span class="label">Prêmio da semana: </span>
      <br>
      <span class="title">{{ rankings.prize }}</span>
    </div>

    <hr />

    <div class="podium">
      <div v-for="users in rankings.podium">
        <div v-bind:class="[users.isUser ? 'user-winner' : 'user-podium']">
          <q-field class="user-position" outlined stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline">{{ users.position }}°</div>
            </template>
          </q-field>

          <q-field class="user-name" outlined stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline">{{ users.name }}</div>
            </template>
          </q-field>

          <q-field class="user-points" outlined stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline">{{ users.points }} pontos</div>
            </template>
          </q-field>
        </div>
      </div>
    </div>

    <hr />

    <span>
      Minha colocação:
    </span>
    <div class="my-score">
      <q-field class="user-position" outlined stack-label>
        <template v-slot:control>
          <div class="self-center full-width no-outline">{{ rankings.position }}°</div>
        </template>
      </q-field>

      <q-field class="user-name" outlined stack-label>
        <template v-slot:control>
          <div class="self-center full-width no-outline">Eu</div>
        </template>
      </q-field>

      <q-field class="user-points" outlined stack-label>
        <template v-slot:control>
          <div class="self-center full-width no-outline">{{ rankings.points }} pontos</div>
        </template>
      </q-field>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageRewards',
  beforeCreate () {
    let { isLogged } = this.$store.state.application;
    if(!isLogged) {
      this.$router.push({ name: 'BeginSession' })
    }
  },
  data () {
    let { rankings } = this.$store.state.application;
    return {
      rankings
    }
  }
}
</script>

<style scoped>
  hr {
    margin: 4px;
  }

  .container {
    display: flex;
    flex-direction: column;
    margin: 8px;
  }

  .prize > .label {
    color: gray;
  }

  .prize > .title {
    font-size: 25px;
  }

  .user-podium, .my-score {
    padding: 8px;
    display: flex;
    flex-direction: row;
  }
  .user-winner {
    background-color: #F1C232;
    padding: 8px;
    display: flex;
    flex-direction: row;
  }

  .user-position {
    flex: 2;
    padding: 0 8px 0 0;
  }

  .user-name {
    flex: 4;
    padding: 0 8px 0 0;
  }

  .user-points {
    flex: 4;
  }
</style>