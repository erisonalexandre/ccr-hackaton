<template>
  <div>
    <div class="container-input-position">
      <GmapAutocomplete
        @focus="focusFirstPlace"
        @blur="blurFirstPlace"
        @input="searchPlace"
        @place_changed="setPlace"
        :placeholder="firstMarkerText"
        :options="{
          componentRestrictions: {country: 'br'}
        }">
      </GmapAutocomplete>
      <div v-show="showPositionNow" class="pac-target-input" style="margin-top: -5px" @click="getCurrentPosition">
        <q-icon name="room" /><span style="margin: 0 10px;">localização atual</span>
      </div>
      <GmapAutocomplete
        placeholder="Para onde ?"
        @place_changed="setSecondPlace"
        :options="{
          componentRestrictions: {country: 'br'}
        }">
      </GmapAutocomplete>
      <div class="w-100" style="width: 90%; padding: 15px 0">
        <p style="margin-bottom: 2px">{{ directions ? `Distancia: ${directions.routes[0].legs[0].distance.text}` : '' }}</p>
        <p>{{ directions ? `Duração estimada: ${directions.routes[0].legs[0].duration.text}` : '' }}</p>
      </div>
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
      style="width: 100%; height: calc(100vh - 45px)"
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
    <DirectionsRenderer />
  </GmapMap>
  </div>
</template>
<script>
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import { Plugins } from '@capacitor/core'
import DirectionsRenderer from '../plugins/DirectionsRenderer.js'

const { Geolocation } = Plugins
Vue.use(VueGoogleMaps, {
  load: {
    region: 'BR',
    language: 'pt-BR',
    key: 'AIzaSyCDZqK-w65EKQmpZmMYhnMMsVhzLeJ1MtY',
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
  name: 'Maps',
  data () {
    return {
      firstMarkerText: null,
      firstMarker: null,
      secondMarker: null,
      center: { lat: -3.0868934, lng: -60.0350299 },
      markers: [
        // {
        //   position: {
        //     lat: -3.07196,
        //     lng: -60.04842
        //   },
        //   infoOptions: {
        //     content:
        //       'Avenida Desembargador João Machado, 4923 - Alvorada Manaus - AM',
        //     // optional: offset infowindow so it visually sits nicely on top of our marker
        //     pixelOffset: {
        //       width: 0,
        //       height: -35
        //     }
        //   }
        // },
        // {
        //   position: {
        //     lat: -3.107118,
        //     lng: -60.017634
        //   },
        //   infoOptions: {
        //     content: 'Rua Rio Tarauacá, 3 - Vieiralves Manaus - AM',
        //     // optional: offset infowindow so it visually sits nicely on top of our marker
        //     pixelOffset: {
        //       width: 0,
        //       height: -35
        //     }
        //   }
        // }
      ],
      place: null,
      showPositionNow: false,
      currentPosition: null,
      geoId: null,
      directions: null
    }
  },
  components: {
    DirectionsRenderer
  },
  computed: {
    google: VueGoogleMaps.gmapApi
  },
  mounted () {
    // this.getCurrentPosition()

    // we start listening
    // this.geoId = Geolocation.watchPosition({}, (position, err) => {
    //   console.log('New GPS position: ', position)
    //   this.position = position
    // })
  },
  methods: {
    getCurrentPosition () {
      Geolocation.getCurrentPosition().then(position => {
        let { latitude, longitude } = position.coords
        this.firstMarker = { lat: latitude, lng: longitude }
        this.firstMarkerText = 'Localização atual'
      })
      this.createDirections()
    },
    searchPlace (event) {
      const { value } = event.target
      if (value.length > 0) {
        if(this.firstMarkerText === 'Localização atual') {
          this.firstMarkerText = 'Inserir local de partida'
        }
        this.showPositionNow = false
      } else {
        this.showPositionNow = true
      }
    },
    focusFirstPlace () {
      this.showPositionNow = true
    },
    blurFirstPlace () {
      setTimeout(() => {
        this.showPositionNow = false
      }, 30)
    },
    setPlace (place) {
      this.place = place
      let { lat, lng } = place.geometry.location
      this.firstMarker = { lat: lat(), lng: lng() }
      this.createDirections()
    },
    setSecondPlace (place) {
      this.place = place
      let {lat, lng} = place.geometry.location
      this.secondMarker = { lat: lat(), lng: lng() }
      this.createDirections()
    },
    createDirections () {
      console.log(this.firstMarker)
      if (this.firstMarker && this.secondMarker) {
        this.$refs.mapRef.$mapPromise.then((map) => {
          if (!this.directionsService) {
            this.directionsService = new this.google.maps.DirectionsService()
          }
          if (!this.directionsDisplay) {
            this.directionsDisplay = new this.google.maps.DirectionsRenderer()
            this.directionsDisplay.setMap(map)
          }
          var vm = this
          vm.directionsService.route({
            origin: this.firstMarker,
            destination: this.secondMarker,
            travelMode: 'DRIVING'
          }, function (response, status) {
            if (status === 'OK') {
              console.log(response)
              vm.directions = response
              vm.directionsDisplay.setDirections(response)
            } else {
              console.log('Directions request failed due to ' + status)
            }
          })
        })
      }
    },
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
  .pac-target-input {
    background-color: #f2f2f2;
    width: 90%;
    border-radius: 5px;
    margin-top: 5px;
    height: 48px;
    padding: 10px;
    border: 1px solid #d0cfcf;
  }
</style>
