<template>
  <div class="home">
    <img alt="photo" src="../assets/photo2.jpg" />
    <HelloWorld msg="Hello0000 it's me" :title="'🐢'" />
    <MainItem :info="title" :count="num" @numadd="numAddOne" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import MainItem from "@/components/MainItem.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    MainItem,
  },
  data() {
    return {
      title: "🐢",
      num: 99,
    };
  },
  methods: {
    numAddOne(val) {
      this.num += val;
    },
  },
};
</script>
