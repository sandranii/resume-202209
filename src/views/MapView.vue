<template>
  <div class="about">
    <h1>This is a map page</h1>
    <HelloWorld msg="地圖" :title="'怎麼沒看到'" />
    <HelloWorld msg="你好" :title="'🌹'" :song="'vue好難'" />
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  data() {
    return {
      title: "🐢",
      num: 99,
    };
  },
};
</script>