<template>
  <div class="card">
    <h1>{{ msg }}</h1>
    <div class="title_area">
      <h3>
        {{ company }} | 
        <span>{{ title }}</span>
      </h3>
      <p>{{ date }}</p>
    </div>
    <ul>
      <li>{{ bullet1 }}</li>
      <li>{{ bullet2 }}</li>
      <li>{{ bullet3 }}</li>
      <li>{{ bullet4 }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    title: String,
    company: String,
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
  .card {
  // display: block;
  // background-color: rgb(255, 233, 188);
  width: 600px;
  margin: auto;
  .title_area{
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
    margin: 10px;
    color: #454545;
      span{
        color: #1F3864;
      }
    }
    p{
      font-size: 13px;
    }
  }
  ul {
    margin-bottom: 20px;
    list-style-type: none;
    padding: 0;
    line-height: 2;
    text-align: left;
    // background-color: #ccc;
  }
  li {
    // display: inline-block;
    margin: 0 20px;
    font-size: 14px;
  }
  a {
    color: #42b983;
  }
}

}

</style>
