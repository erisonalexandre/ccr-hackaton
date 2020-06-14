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
      <span class="user-name">
        {{ user.firstName }}
      </span>
      <div class="user-secondary-info">
        <span>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.2678 10.6256V8.62093C12.2678 8.19021 11.8649 7.84101 11.3679 7.84101H11.1327V0.522502C11.1327 0.457035 11.0947 0.395944 11.0317 0.359854L10.4605 0.0326445C10.311 -0.0530238 10.1115 0.0399092 10.1115 0.195293V2.54574L9.94133 2.1478C9.71241 1.61259 9.12336 1.25738 8.46473 1.25738H4.53199C3.86949 1.25738 3.27785 1.61671 3.05174 2.1564L2.88863 2.54574V0.195293C2.88863 0.0399305 2.6892 -0.0530238 2.53961 0.0326445L1.96839 0.359832C1.90537 0.395922 1.86745 0.457014 1.86745 0.522481V7.84101H1.63223C1.13525 7.84101 0.732357 8.19019 0.732357 8.62093V10.6256H0.348974C0.224734 10.6256 0.124023 10.7128 0.124023 10.8205V11.8984C0.124023 12.0061 0.224734 12.0934 0.348974 12.0934H1.31951V12.61C1.31951 12.8254 1.52096 13 1.76946 13H2.96174C3.21025 13 3.4117 12.8254 3.4117 12.61V12.0934H9.58851V12.61C9.58851 12.8254 9.78998 13 10.0384 13H11.2307C11.4792 13 11.6807 12.8254 11.6807 12.61V12.0934H12.6512C12.7755 12.0934 12.8762 12.0061 12.8762 11.8984V10.8206C12.8762 10.7129 12.7755 10.6256 12.6512 10.6256L12.2678 10.6256ZM3.1867 3.63182H9.81346V5.55293H3.1867V3.63182ZM3.0326 10.0799H2.26405C2.02922 10.0799 1.83885 9.91494 1.83885 9.71142V9.70212C1.83885 9.4986 2.02922 9.33361 2.26405 9.33361H3.03258C3.26741 9.33361 3.45777 9.4986 3.45777 9.70212V9.71142C3.4578 9.91494 3.26743 10.0799 3.0326 10.0799ZM8.02944 10.1886H4.97071C4.72221 10.1886 4.52076 10.014 4.52076 9.79866V7.32792C4.52076 7.11257 4.72221 6.93798 4.97071 6.93798H8.02944C8.27792 6.93798 8.47937 7.11259 8.47937 7.32792V9.79864C8.47939 10.014 8.27792 10.1886 8.02944 10.1886ZM10.7361 10.0799H9.96755C9.73275 10.0799 9.54236 9.91494 9.54236 9.71142V9.70212C9.54236 9.4986 9.73275 9.33361 9.96755 9.33361H10.7361C10.9709 9.33361 11.1613 9.4986 11.1613 9.70212V9.71142C11.1613 9.91494 10.9709 10.0799 10.7361 10.0799ZM7.96103 8.36505H5.03192C4.9089 8.36505 4.8092 8.27864 4.8092 8.172V8.1681C4.8092 8.06148 4.9089 7.97509 5.03192 7.97509H7.96103C8.08405 7.97509 8.18375 8.06148 8.18375 8.1681V8.172C8.18375 8.27864 8.08405 8.36505 7.96103 8.36505ZM7.96103 7.58514H5.03192C4.9089 7.58514 4.8092 7.49872 4.8092 7.39211V7.3882C4.8092 7.28161 4.9089 7.1952 5.03192 7.1952H7.96103C8.08405 7.1952 8.18375 7.28161 8.18375 7.3882V7.39211C8.18375 7.49872 8.08405 7.58514 7.96103 7.58514ZM7.96103 9.92486H5.03192C4.9089 9.92486 4.8092 9.83845 4.8092 9.73183V9.72793C4.8092 9.62131 4.9089 9.5349 5.03192 9.5349H7.96103C8.08405 9.5349 8.18375 9.62131 8.18375 9.72793V9.73183C8.18375 9.83845 8.08405 9.92486 7.96103 9.92486ZM7.96103 9.14494H5.03192C4.9089 9.14494 4.8092 9.05853 4.8092 8.95194V8.94803C4.8092 8.84142 4.9089 8.75501 5.03192 8.75501H7.96103C8.08405 8.75501 8.18375 8.84142 8.18375 8.94803V8.95194C8.18375 9.05853 8.08405 9.14494 7.96103 9.14494Z" fill="black"/>
          </svg>
          {{ user.vehiclePlate }}
        </span>
        <span>
          {{ user.birthday }}
        </span>
      </div>
      <q-btn class="item text-black" color="yellow" icon="settings"/>
    </div>
  </div>
  <div class="body">
    <div>
      <div style="display: flex;">
        <img src="/statics/svg/road.svg" style="width: 25px" class="q-mr-md q-ml-md" alt="">
        <p style="margin: 0; font-size: 18px;"><b>Rotas</b></p>
      </div>
      <hr>
    </div>
    <div>
      <div v-for="(trip, index) in trips" :key="index">
        <table style="width: 100%; padding: 10px;">
          <tr>
            <td><span>Ponto de partida:</span> {{ trip.start }}</td>
            <td><span>Km:</span> {{ trip.kmTraveled }}</td>
          </tr>
          <tr>
            <td><span>Ponto de destino:</span> {{ trip.destination }}</td>
            <td><span>Horas:</span> {{ trip.timeTraveled }}</td>
          </tr>
          <tr>
            <td><span>Data:</span> {{ trip.date }}</td>
          </tr>
        </table>
        <hr>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { addTimes } from '../services/addTime'
export default {
  name: 'PageProfile',
  components: [
    'QAvatar',
    'QIcon'
  ],
  beforeCreate () {
    const { isLogged } = this.$store.state.application

    if (!isLogged) {
      this.$router.push({ name: 'BeginSession' })
    }
  },
  data () {
    const { user, rankings } = this.$store.state.application
    const { trips } = user
    const kmTraveled = ('' + trips.reduce((value, trip) => value + trip.kmTraveled, 0)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    const arrTripsTimes = trips.map((t) => t.timeTraveled)
    const allTimeTraveled = addTimes(arrTripsTimes).split(':')
    const hours = allTimeTraveled[0]
    const minutes = allTimeTraveled[1]

    return {
      user,
      trips,
      rankings,
      kmTraveled,
      hours,
      minutes
    }
  }
}
</script>

<style lang="scss" scoped>
  tr {
    line-height: 13px;
    font-size: 11px;
    span {
      color: #9E260E;
    }
  }
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
    justify-content: center;
  }

  .user-name {
    font-size: 25px;
  }

  .user-secondary-info {
    font-size: 15px;
    color: gray;
  }

  .user-secondary-info > * {
    margin: 10px 0 0 0;
  }

  .body {
    display: flex;
    flex-direction: column;
  }

  .body-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    min-height: 8vh;
    height: 60px;
    padding: 0 24px;
  }

  .icon {
    flex: 1;
  }

  .label {
    flex: 3;
  }

  .content {
    flex: 6;
    color: #9E260E;
  }

  .button-rotas {
    width: 120px;
    align-self: flex-end;
    margin: 8px 24px 0 0;
  }
</style>
