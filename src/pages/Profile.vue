<template>
<div class="container">
  <div class="profile">
    <q-avatar size="100px" class="profile-picture">
      <q-img
      :src="user.profilePicture"
      spinner-color="#F1C232"
      spinner-size="82px"
    />
    </q-avatar>
    <div class="profile-info">
      <span class="user-name">{{ user.firstName }}</span>
      <div class="user-secondary-info">
        {{ user.vehiclePlate }}
        {{ user.birthday }}
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'PageProfile',
  components: [
    'QAvatar'
  ],
  beforeCreate () {
    let { isLogged } = this.$store.state.application;
    if(!isLogged) {
      this.$router.push({ name: 'BeginSession' })
    }
  },
  data () {
    let { user } = this.$store.state.application;
    return {
      user
    }
  }
}
</script>

<style>
  .container {
    display: flex;
    min-height: calc(100vh - 72px);
    flex-direction: column;
  }

  .profile {
    min-height: 150px;
    height: 10vh;
    display: flex;
    flex-direction: row;
  }

  .profile-picture {
    margin: 25px 25px 0 25px;
    border-radius: 50%;
    max-width: 150px;
  }

  .profile-info {
    display: flex;
    flex-direction: column;
  }
</style>