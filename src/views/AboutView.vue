<template>
  <div class="about">
    <!-- <h1>This is an about page.</h1> -->
    <div class="about_aside">
      <AboutAside 
      :name_ch="'倪鈺娟'" 
      :name_en="'Sandra'"
      intro="前主管評語：工作態度認真，自我要求高。PM背景，個性積極進取、細心負責，擅於溝通協調，擁有領導及團隊合作能力，並能獨立作業。"
      />

      <AboutAsideItem
      msg="專業技能"
      :bullet1="'• 網頁前端技術:'"
      :desc1="'HTML5、CSS3、 JavaScript、 RWD、jQuery、Webpack 、 AJAX、 SASS、Vue.js、Gulp'"
      :bullet2="'• UI/UX 使用者介面設計:'"
      :desc2="'Figma、 wireframe/mockup 設計'"
      :bullet3="'• 網站程式設計與資料庫:'"
      :desc3="'PHP程式設計、MySQL資料庫、 Git版本控制'"
      />
      <AboutAsideItem
      msg="專題作品"
      :bullet1="'團體專題(組長)'"
      :grouplink="'按指穴'"
      :bullet2="'個人專題'"
      :personallink="'Blossoming'"
      />
      <AboutAsideItem
      msg="聯絡資訊"
      :bullet1="'生日:1996.09.05'"
      :bullet2="'電話:0916-240926'"
      :bullet3="'信箱:niyouu63@gmail.com'"
      :bullet4="'GitHub:https://github.com/sandranii'"
      />
      <AboutAsideItem
      msg="英語能力"
      :bullet1="'TOEIC: 970/ 990 (2019.05.20)'"
      :bullet2="'TOEIC S&W'"
      :bullet3="'Speaking:170/ 200'"
      :bullet4="'Writing: 170/ 200 (2020.02.16)'"
      />
    </div>
    <div class="about_main">
      <h2>專業訓練</h2>
      <about-card
      :company="'緯育 TibaMe 前端工程專業技術養成班 第77期'"
      :date="'2022.06 – 2022.10'" 
      :bullet1="'• 運用前端技術整合UI/UX思維'"
      :bullet2="'• 負責團體專題預約按摩頁面、資料庫建置、上線環境設置'"
      :bullet3="'• 優化團體專題Vue CLI寫法，增加網站效能'"
      
      />
      
      <h2>工作經歷</h2>
      <AboutCard
        :company="'群聯電子股份有限公司 (PHISON) | '" 
        :title="'PM'" 
        :date="'2021.01 – 2022.06'" 
        :bullet1="'• 蒐集彙整並產出Automotive SPICE(ASPICE) 車用規範文件'"
        :bullet2="'• 全英文回答顧問公司車用軟體開發流程評估Gap Analysis 問題，並獲得Level 1成績'"
        :bullet3="'• 試行四個半月車規專案，每週召開會議追蹤專案進度'"
        :bullet4="'• 協助車規規劃部完善群聯車用專案標準文件 SOP'"
      />
      <AboutCard
        :company="'業成集團_英特盛科技股份有限公司 (GIS-KY) | '" 
        :title="'PM'" 
        :date="'2020.05 – 2020.12'" 
        :bullet1="'• 追蹤新產品開發階段客戶欲商討之技術議題並掌控進度'"
        :bullet2="'• 與內部工程師、工廠溝通協調專案排程，準時達成客戶交期'"
        :bullet3="'• 每週彙整內部週報及用英文撰寫給予客戶之週報'"
      />
      <h2>學歷背景</h2>
      <AboutCard
        :company="'外貿協會國際企業人才培育中心 (ITI) | '" 
        :title="'兩年期英語組 '" 
        :date="'2018.07 – 2020.03'" 
        :bullet1="'• 培養創新思維，在與矽谷10x Innovation Lab合作之新創課程簡報中，詳細描述調酒材料包之消費者輪廓，獲第一名肯定'"
        :bullet2="'• 分析Google Analytics 資料，為銀行規劃數位通路行銷策略，並獲取2019年行銷簡報比賽第二名佳績'"
      />
      <AboutCard
        :company="'國立臺北大學 (NTPU) | '" 
        :title="'金融與合作經營學系學士 '" 
        :date="'2014.09 – 2018.06'" 
        :bullet1="'• GPA : 3.8 / 4'"
        :bullet2="'• 金瓜三號茶香酥、茶糖行銷企劃，為教師和學生族群客製化包裝'"
        :bullet3="'• 積極參與活動，如:系學會、排球隊、金融營，並擔任領導角色'"
      />
      <AboutCard
        :company="'法國巴黎ESCE高等對外貿易學院 | '" 
        :title="'交換學生 '" 
        :date="'2017.09 – 2017.12'" 
        :bullet1="'• 修習「策略品牌管理」，與多國學生合作完成義大利氣泡礦泉水審計報告，培養跨文化溝通技巧、快速適應力'"
        :bullet2="'• 積極參與國際學生社團活動，深入體驗法國當地傳統文化'"
      />
      <h2>社團經驗</h2>
      <AboutCard
        :company="'金融系系學會 | '" 
        :title="'公關部部長'" 
        :date="'2016.09 – 2017.06'" 
        :bullet1="'• 帶領36名學生於一日內參訪玉山銀行、新光銀行兩間企業'"
        :bullet2="'• 邀請社會企業「坪林街左邊」創辦人胡庭碩先生演講'"
      />
      <AboutCard
        :company="'金融系 | '" 
        :title="'女子排球隊隊長'" 
        :date="'2016.09 – 2017.06'" 
        :bullet1="'• 領導12位隊員積極練習，每週參與校內比賽，帶領團隊於2016北財盃順利晉級複賽'"
      />  
    </div>

    
  </div>
</template>
<script>
import AboutCard from "@/components/AboutCard.vue"
import AboutAside from "@/components/AboutAside.vue"
import AboutAsideItem from "@/components/AboutAsideItem.vue"

export default {
  name: "HomeView",
  components: {
    AboutCard,
    AboutAside,
    AboutAsideItem
  },
};
</script>
<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
  color: #404040;
  .about{
    display: flex;
    justify-content: center;
    width: 100vw;
    margin: auto;
    // background-color: #fa0;
    .about_aside{
      width: 30vw;
    }
    .about_main{

      h2{
        padding-top: 20px;
        // padding-bottom: 10px;
        text-align: left;
        width: 50vw;
        margin: auto;
        color: black;
        font-size: 22px;
      }
    }
  }
}
</style>