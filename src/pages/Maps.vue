<template>
  <div>
    <div class="container-input-position">
      <q-input v-model="firstMarker" filled label="Inserir local de partida"/>
      <q-input v-model="secondMarker" filled label="Para onde ?"/>
    </div>
    <GmapMap
    ref="mapRef"
    :center="center"
    :zoom="13"
    :options="{
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false,
      disableDefaultUi: false
    }"
    map-type-id="roadmap"
    style="width: 100%; height: calc(100vh - 72px)"
  >
    <template v-for="(m, index) in markers">
      <gmap-info-window :options="m.infoOptions" :position="m.position" :key="index + 'asd'">
      </gmap-info-window>
      <GmapMarker
        :key="index"
        :position="m.position"
        :clickable="true"
        :draggable="false"
        @click="openDirection(m.infoOptions.content)"
      />
    </template>
  </GmapMap>
  </div>
</template>
<script>
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    region: 'BR',
    language: 'pt-BR',
    key: 'AIzaSyDv10Tc4CGtRSJ6t8TsSX1M_p6TtEQ_42M',
    libraries: 'places, directions' // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
    // If you want to set the version, you can do so:
    // v: '3.26',
  },
  // If you intend to programmatically custom event listener code
  // (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  // instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  // you might need to turn this on.
  // autobindAllEvents: false,
  // If you want to manually install components, e.g.
  // import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  // Vue.component('GmapMarker', GmapMarker)
  // then set installComponents to 'false'.
  // If you want to automatically install all the components this property must be set to 'true':
  installComponents: true
})
export default {
  name: 'MapaUnidades',
  data () {
    return {
      firstMarker: null,
      secondMarker: null,
      center: { lat: -3.0868934, lng: -60.0350299 },
      markers: [
        {
          position: {
            lat: -3.07196,
            lng: -60.04842
          },
          infoOptions: {
            content:
              'Avenida Desembargador João Machado, 4923 - Alvorada Manaus - AM',
            // optional: offset infowindow so it visually sits nicely on top of our marker
            pixelOffset: {
              width: 0,
              height: -35
            }
          }
        },
        {
          position: {
            lat: -3.107118,
            lng: -60.017634
          },
          infoOptions: {
            content: 'Rua Rio Tarauacá, 3 - Vieiralves Manaus - AM',
            // optional: offset infowindow so it visually sits nicely on top of our marker
            pixelOffset: {
              width: 0,
              height: -35
            }
          }
        }
      ]
    }
  },
  mounted () {
    // this.geolocation()
    // this.$refs.mapRef.$mapPromise.then((map) => {
    //     this.directionsService = new google.maps.DirectionsService()
    //     this.directionsDisplay = new google.maps.DirectionsRenderer()
    //     this.directionsDisplay.setMap(map)
    //     var vm = this
    //     vm.directionsService.route({
    //         origin: this.currentLocation,
    //         destination: {lat: -3.10713,lng: -60.01763},
    //         travelMode: 'DRIVING'
    //     }, function (response, status) {
    //         if (status === 'OK') {
    //             vm.directionsDisplay.setDirections(response)
    //         } else {
    //             console.log('Directions request failed due to ' + status)
    //         }
    //     })
    // })
  },
  methods: {
    openDirection (destino) {
      if (window.mobilecheck) {
        window.open(`google.navigation:q=${destino}`)
      } else {
        window.open(`http://maps.google.com/maps?z=3&daddr=${destino}`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .container-input-position {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;

    label {
      background-color: white;
      width: 90%;
      border-radius: 5px;
      margin-top: 5px;
    }
  }
</style>
