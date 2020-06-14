<template>
  <div>
    <div class="loading" v-if="isLoading">
      <half-circle-spinner
        :animation-duration="1000"
        :size="60"
        color="#9E260E"
      />
    </div>
    <div v-if="!isLoading">
      <div>
        <h1>Index Page</h1>
        <div v-if="isLogged">
          <h2>user is logged</h2>
        </div>
        <div v-if="!isLogged">
          <h2>user is not logged</h2>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
import { HalfCircleSpinner } from 'epic-spinners'
import { getSession } from '../services/getSession'

export default {
  name: 'PageIndex',
  components: {
    HalfCircleSpinner
  },
  data () {
    return {
      isLoading: true,
      isLogged: this.$store.state.application.user?.islogged
    }
  },
  beforeDestroy () {
    this.isLoading = false
  },
  created () {
    const { application } = this.$store.state
    const { user } = application

    getSession().then(session => {
      this.isLogged = user.userSession === session
      this.$router.push('tabs')
    }).catch(r => {
      console.error(r)
    })
  }
}
</script>

<style>
#q-app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: -webkit-fill-available;
}
</style>
