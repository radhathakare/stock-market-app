<template>
  <div id="app">
  <NavbarHeader/>
  <div class="content">
   <StockPrice/>     
  </div>
  <FinancialChart/>
  <StockCarousal/>
  
  <AppFooter/>
  </div>
  
</template>

<script>
import NavbarHeader from "../components/Navbar/header.vue";
import StockPrice from "../components/Stockprice.vue"
import FinancialChart from "../components/FinancialChart.vue";
import AppFooter from "../components/Footer/Footer.vue";
import StockCarousal from "../components/Stockcarousal.vue";

export default {
  name: 'PriceView',

  components: {
    NavbarHeader,
    StockPrice,
    FinancialChart,
    AppFooter,
    StockCarousal
   
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.content{
  padding:90px 20px;
}




</style>
