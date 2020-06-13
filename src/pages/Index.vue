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
      isLogged: true,
      isLoading: true
    }
  },
  created: function() {
    console.log("PageIndex logged");
    setTimeout(() => {
      setTimeout(() => {
        this.isLoading = false;
      }, 5000);
      this.isLogged = !this.isLogged;
    }, 2000);
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