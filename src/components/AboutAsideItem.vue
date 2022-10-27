<template>
  <div class="item">
    <h2>{{ msg }}</h2>
    <!-- <div class="title_area">
      <h3>
        {{ company }} | 
        <span>{{ title }}</span>
      </h3>
      <p>{{ date }}</p>
    </div> -->
    <ul>
      <li>
        {{ bullet1 }}
        <p>{{desc1}}</p>
        <a href="https://tibamef2e.com/cgd102/g2/">{{grouplink}}</a>
      </li>
      <li>
        {{ bullet2 }}
        <p>{{desc2}}</p>
        <a href="https://sandranii.github.io/Blossoming/">{{personallink}}</a>
      </li>
      <li>
        {{ bullet3 }}
        <p>{{desc3}}</p>
      </li>
      <li>
        {{ bullet4 }}
        <p>{{desc4}}</p>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  name: "AboutAsideItem",
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
    desc1:String,
    desc2:String,
    desc3:String,
    desc4:String,
    grouplink:String,
    personallink:String
  },
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
  .item {
  width: 30vw;
  margin: auto;
  .title_area{
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
    margin: 10px 0 5px 15px;
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
  }
  li {
    margin-left: 20px;
    margin-right: 10px;
    font-size: 14px;
  }
}

}

</style>
