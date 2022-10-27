<template>
  <nav>
    <router-link v-for="item in pageRoutes" :key="item.path" :to="item.path">
      {{ item.chName ? item.chName : item.name }} |
    </router-link>

    <!-- 
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/shop">專案介紹</router-link> |
    <router-link to="/map">地圖</router-link> -->
  </nav>
  <nav>
    <router-link
      v-for="item in 4"
      :key="item"
      :to="{
        name: 'shop',
        params: {
          productID: item,
        },
      }"
    >
      商品{{ item }}
    </router-link>
  </nav>
  <router-view />
</template>

<script>
import { routes } from "@/router/index.js";
// console.log(routes);
export default {
  data() {
    return {
      //routes: routes
      routes, //省略寫法
    };
  },
  computed: {
    pageRoutes() {
      // const route = this.routes.filter(item => {
      //   console.log(item);
      //   return item.name !== "404"
      // })
      const route = this.routes.filter((item) => item.name !== "404");
      return route;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
