<template>
  <div>
    <h6>axio</h6>
    <div v-if="load">Load</div>
    <!-- {{ data3 }} -->
    <p>{{ target }}</p>
    <select name="data3" id="data3" v-model="target" @change="changeSelect">
      <option
        v-for="item in data3"
        :key="item.ScenicSpotID"
        :value="item.ScenicSpotID"
      >
        {{ item.ScenicSpotName }}
      </option>
    </select>
    <div>
      <!-- {{ info.Position }} -->
      <div id="map"></div>
      {{ info }}
    </div>
    <!-- <List v-if="data3" :mydata="data3" /> -->
  </div>
</template>

<script>
// import axios from "axios";
import List from "@/components/ShopList.vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
export default {
  components: { List },
  data() {
    return {
      data3: [],
      load: false,
      target: "",
      info: {},
      map: null,
    };
  },
  methods: {
    changeSelect() {
      // this.info = this.data3.find((item) => {
      //   return item.ScenicSpotID === this.target;
      // });
      this.info = this.data3.find((item) => item.ScenicSpotID === this.target);
      const pos = this.info.Position;
      this.map.setView([pos.PositionLat, pos.PositionLon], 15);
    },
    getData3() {
      this.load = true;
      this.axios
        .get("/data/Taoyuan.json")
        .then((response) => {
          //handle success
          this.data3 = response.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          //always executed
          this.load = false;
        });
    },
    initMap() {
      this.map = L.map("map").setView([25.056, 121.501], 10);

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(this.map);

      // L.marker([51.5, -0.09])
      //   .addTo(map)
      //   .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
      //   .openPopup();
    },
  },
  mounted() {
    this.getData3();
    this.initMap();
  },
};
</script>
<style lang="scss" scoped>
#map {
  width: 100%;
  height: 20rem;
}
</style>