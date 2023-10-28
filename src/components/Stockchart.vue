<template>
  <div class="stock-chart d-flex justify-content-center">
    <div class="table-responsive">
      <div class="col-12">
        <table class="stock-chart table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Close Price</th>
              <th>High Price</th>
              <th>Low Price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(company, symbol) in stocks" :key="symbol">
              <td>{{ company.name }}</td>
               <td>{{ company.data[0].time}}</td>
              <td>₹{{ company.data[0].close }}</td>
              <td>₹{{ company.data[0].high }}</td>
              <td>₹{{ company.data[0].low }}</td>
              <td><button class="buy-btn">BUY</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'StockChart',
  data() {
    return {
      stocks: {},
      charts: {},
    };
  },
  mounted() {
    
    this.fetchStockData();
  },
  methods: {
    fetchStockData() {
      axios.get('http://localhost:3000/api/stocks')
        .then((response) => {
          this.stocks = response.data;
          
        })
        .catch((error) => {
          console.error(error);
        });
    },
    
  },
};
</script>




<style scoped>
.stock-container {
  box-sizing: border-box;
  margin: 0;
  max-width: 1128px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 24px;
  padding-right: 24px;
  color: white;
}
.stock-chart {
  justify-content: center;
  align-items: center;
  text-align: left;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  display: table;
  padding:80px 0;
  border-collapse: collapse;
  color: white;
}
.stock-chart table th {
  font-weight: bold;
  font-size: 1em;
  text-align: left;
  color: #185875;
  padding: 20px;
  font-size: 20px;
}
.stock-chart table td {
  box-sizing: border-box;
  margin: 10px;
  padding: 20px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  border-bottom: 1px solid rgba(244, 244, 244, 0.3);
  color: white;
}
.buy-btn {
  color: white;
  border: 1px solid #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  background: transparent;
  height: 54px;
  cursor: pointer;
  padding: 8px 20px;
}
#chart-container {
  color: white;
}
</style>
