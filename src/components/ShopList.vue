 
<template>
  <div class="shopList">
    <div v-for="item in mydata" :key="item.id">
      {{ item }}
    </div>
  </div>
</template>


<script>
export default {
  props: {
    mydata: { type: Array },
  },
};
</script>