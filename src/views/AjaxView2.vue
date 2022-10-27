<template>
    <p>資料來源：https://www.travel.taipei/open-api/swagger/ui/index#/Attractions/Attractions_All</p>
  <button @click="nextPage">Next Page</button>
  <!-- {{travelData}} -->
  <hr>
  {{travelData.total}}
  <hr>
  {{dataTest[0]}}
  <hr>
  <!-- {{travelData.data[0].address}} -->
  <div v-for="item in dataTest" :key="item.id">
    <p>{{item.id}}</p>
    <h2>{{item.name}}</h2>
    <p>{{item.introduction}}</p>

  </div>
</template>

<script>
export default{
  data(){
    return{
      travelData:[],
      page: 0,
      load: false,
      dataTest:[]
    }
  },
  methods: {
    getData(){
      this.load=true
      fetch(`/travelapi/zh-tw/Attractions/All?page=${this.page}`,{
        method: 'GET',
        headers: {
          "accept": "application/json"
        }
      })
      .then(response => response.json())
      .then(result => {
        this.travelData = result
        this.dataTest = this.travelData.data
        this.load=false
      })
      .catch(error => console.log('error', error));
    },
    nextPage(){
      this.page +=1
      this.getData()
    }
  },
  mounted(){
    this.nextPage()
  }
}
</script>
