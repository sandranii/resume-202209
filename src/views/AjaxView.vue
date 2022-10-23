<template>
  <div>
    <h6>XMLHttpRequest</h6>
    <div>{{ data1 }}</div>
    <List :mydata="data1" />
  </div>
  <!-- <div>
    <h6>fetchAPI</h6>
    <div>{{ data2 }}</div>
  </div>
  <div>
    <h6>axio</h6>
    <div>{{ data3 }}</div>
  </div> -->
</template>

<script>
// import axios from "axios";
import List from "@/components/ShopList.vue";
export default {
  components: { List },
  data() {
    return {
      data1: [],
      data2: [],
      data3: [],
      load: false,
    };
  },
  methods: {
    getData1() {
      const oReq = new XMLHttpRequest();
      oReq.open("GET", "https://dummyjson.com/products");
      oReq.send();
      oReq.onload = () => {
        console.log(oReq.response);
        const data = JSON.parse(oReq.response);
        this.data1 = data;
      };
      oReq.onerror = (err) => {
        console.log(err);
      };
    },
    // getData2() {
    //   fetch("https://dummyjson.com/products/1")
    //     .catch((error) => {
    //       console.log(error);
    //     })
    //     .then((response) => {
    //       return response.json();
    //     })
    //     .then((myJson) => {
    //       // console.log(myJson);
    //       this.data2 = myJson;
    //     });
    // },
    // getData3() {
    //   this.load = true;
    //   this.axios
    //     .get("https://dummyjson.com/products/1")
    //     .then((response) => {
    //       //handle success
    //       console.log(response.data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     })
    //     .finally(() => {
    //       //always executed
    //       this.load = false;
    //     });
    // },
  },
  mounted() {
    this.getData1();
    // this.getData2(),
    // this.getData3();
  },
};
</script>