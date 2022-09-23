<template>
  <div class="images">
    {{ count }}
    <img v-for="item in count" :key="item" :src="imgURL + item" />
    <button @click="count += 1">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgURL: "https://picsum.photos/200/200/?random=",
      count: 3,
    };
  },
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
