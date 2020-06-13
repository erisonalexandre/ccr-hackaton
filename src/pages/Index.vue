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

export default {
  name: 'PageIndex',
  components: {
    HalfCircleSpinner
  },
  data () {
    return {
      isLoading: true,
      isLogged: false,
      userSession: 'oenfaeifu01923g89'
    }
  },
  created: function() {
    // timeout to represent the api to validate if application contains an user
    // if has an user, and it's logged, navigate to 
    setTimeout(() => {
      // solve loading
      this.isLoading = false;
      this.isLogged = this.userSession === 'oenfaeifu01923g89';
      if(this.isLogged) {
        this.$router.push('tabs')
      } else {
        this.$router.push('login/Signup')
      }
    }, 3000);
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