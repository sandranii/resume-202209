<template>
  <div class="shop">
    <!-- <h1>This is a page of my personal project.</h1> -->
    <h1>This is a shop page.</h1>
    <!-- <h2>Product: {{ $route }}</h2> -->
    <!-- <h2>Product: {{ $route.params }}</h2> -->
    <h2>Product: {{ $route.params.productID }}</h2>
    <!-- <div>
      <a href="https://github.com/sandranii/Blossoming">Blossoming</a>
    </div> -->

    <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="Select date and time"
    />
    <ImagesItem />
  </div>
</template>
<script>
// @ is an alias to /src
import ImagesItem from "@/components/ImagesItem.vue";

export default {
  components: {
    ImagesItem,
  },
  data() {
    return {
      value1: "",
    };
  },
};
</script>