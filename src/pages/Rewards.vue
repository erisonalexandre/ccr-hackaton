<template>
  <div class="container">
    <q-img
        class="thumbnail"
        :src="rankings.prizeThumbnail"
        spinner-color="red"
        :ratio="16/9"
      />

    <hr />

    <span class="title">
      Colocações da semana
    </span>

    <hr />

    <div class="podium">
      <div v-for="users in rankings.podium" v-bind:key="users.position">
        <div v-bind:class="[users.isUser ? 'user-winner' : 'user-podium']">
          <q-avatar class="user-position" rounded size="48px">
          <q-img :ratio="1" :src="users.profilePicture" />
          <q-badge floating color="red">{{ users.position }}</q-badge>
        </q-avatar>

          <q-field class="user-name" borderless stack-label>
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

    <span class="label">
      Minha colocação:
    </span>

    <div class="my-score">
      <q-avatar class="user-position" rounded size="48px">
        <q-img :ratio="1" :src="user.profilePicture" />
        <q-badge floating color="red">{{ rankings.position }}</q-badge>
      </q-avatar>

      <q-field class="user-name" borderless stack-label>
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
    const { isLogged } = this.$store.state.application
    if (!isLogged) {
      this.$router.push({ name: 'BeginSession' })
    }
  },
  data () {
    const { rankings, user } = this.$store.state.application
    return {
      rankings,
      user
    }
  }
}
</script>

<style scoped>
  hr {
    margin: 12px 4px;
  }

  .container {
    display: flex;
    flex-direction: column;
    margin: 24px 8px 8px 8px;
  }

  .thumbnail {
    height: 100%;
  }

  .container > .title {
    font-size: 20px;
    align-self: center;
  }

  .label {
    color: gray;
  }

  .prize > .prize-title {
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
    flex: 1;
    margin: 0 8px 0 0;
    align-self: center;
  }

  .user-name {
    flex: 4;
    padding: 0 8px 0 0;
  }

  .user-points {
    flex: 4;
  }
</style>
