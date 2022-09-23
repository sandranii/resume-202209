<template>
  <div class="about">
    <h1>This is an about page</h1>
    <HelloWorld msg="哈囉" :title="你好嗎" />
    <HelloWorld msg="Hey you" :title="'🐢'" :song="'就是你'" />
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
};
</script>