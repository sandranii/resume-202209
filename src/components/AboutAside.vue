<template>
  <div class="aside">
    <h1>{{ name_ch }}</h1>
    <h2>{{ name_en }}</h2>
    <div class="img_container">
        <img src="@/assets/photo2.jpg" alt="">
    </div>
    <p class="intro">{{ intro }}
    </p>
    <!-- <ul>
      <li>{{ bullet1 }}</li>
      <li>{{ bullet2 }}</li>
      <li>{{ bullet3 }}</li>
      <li>{{ bullet4 }}</li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: "AboutAside",
  props: {
    name_ch: String,
    name_en: String,
    title: String,
    intro: String,
    date: String,
    section: String,
    bullet1: String,
    bullet2: String,
    bullet3: String,
    bullet4: String,
  },
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
  .aside {
  margin: auto;
  width: 30vw;
  box-sizing: border-box;
  padding: 0 50px;
  font-size: 14px;
  h1{
    color: #000;
  }
  h2{
    color: #1F3864;
  }
  .img_container{
    // box-sizing: border-box;
    // padding: 100px;
    width: 20vw;
    height: 20vw;
    margin: auto;
    margin-top: 20px;
    background-color: #000;
    overflow: hidden;
    img{
        object-fit: cover;
        width: 100%;
        height: 100%;
        object-position: center center;
    }
  }
  .intro{
    margin: 25px 10px;
    text-align: left;
    line-height: 1.5;
    
  }
}

}

</style>
