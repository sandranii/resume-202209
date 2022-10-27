<template>
    <p>資料來源：https://tdx.transportdata.tw/api-service/swagger/basic/cd0226cf-6292-4c35-8a0d-b595f0b15352#/Tourism/TourismApi_ScenicSpot_2240_1</p>
  <!-- <button @click="nextPage">Next Page</button> -->
  <!-- {{travelData}} -->
    <div v-for="item in data" :key="item.id">
        <!-- {{item}} -->
        <h2>{{item.Name}}</h2>
        <li>{{item.Toldescribe}}</li>
        <li>{{item.Description}}</li>

    </div>
</template>

<script>
export default{
  data(){
    return{
        data:[]
    }
  },
  created(){
    this.axios.get("https://api.kcg.gov.tw:443/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c")
    .then((res)=>{
        this.data = res.data.data.XML_Head.Infos.Info
        console.log('this.data', this.data);
    })
  },
}
</script>
