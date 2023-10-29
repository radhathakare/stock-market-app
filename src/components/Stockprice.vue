<template>
  <div class="container stockprice">
  <div class="row">
  <div class="user-data">
    <div class="selectdata">
      <label for="stockSymbol">Select a Stock Instrument:</label>
      <input type="text" id="stockSymbol" v-model="selectedSymbol" />
    </div>
    <button class="fetchdata" @click="fetchStockData">Fetch Data</button>
  </div>
    <table class="table-container" v-if="dataFetched">
      <thead>
        <tr>
          <th>Company Name</th>
          <th>Date</th>
          <th>Close Price</th>
          <th>High Price</th>
          <th>Low Price</th>
          <th>Volume</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(entry, index) in stocks.data" :key="index">
          <td>{{ stocks.name }}</td> 
          <td>{{ entry.time }}</td>
          <td>₹{{ entry.close }}</td>
          <td>₹{{ entry.high }}</td>
          <td>₹{{ entry.low }}</td>
          <td>{{ entry.volume }}</td>
        </tr>
      </tbody>
    </table>

    </div>
  </div>
</template>

<script>
import axios from 'axios';


export default {
    name: 'StockPrice',
  data() {
    return {
      selectedSymbol: '', 
      selectedInterval: 'daily', // Default to daily interval
      stocks: {},
      dataFetched: false, 
    };
  },
  methods: {
    fetchStockData() {
      const apiUrl = `https://stock-data-a9sg.onrender.com/api/search?symbol=${this.selectedSymbol}&period=${this.selectedInterval}`;

      axios
        .get(apiUrl)
        .then((response) => {
          this.stocks = response.data;
          this.dataFetched = true; // Set dataFetched to true when data is successfully fetched
        })
        .catch((error) => {
          console.error(error);
          this.dataFetched = false; // Set to false in case of an error
        });
    },
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.stockprice{
  padding:40px 0;
}
.user-data{
    margin:0px 0;
    position:relative;
    display: inline-flex;
    justify-content:center;
}
.fetchdata{
  color: white;
    border: 1px solid #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background: transparent;
    height: 34px;
    cursor: pointer;
    padding: 10px 18px;
}
.table-container{
 padding:80px 0;
}

.user-data {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.selectdata {
  display: flex;
  align-items: center;
  gap: 10px;
}

.label {
  font-size: 16px;
  font-weight: bold;
}

.input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.button {
  background-color: #007BFF;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #0056b3;
}

.table-container {
  width: 100%;
  border-collapse: collapse;
  margin: 20px;
  font-family: Arial, sans-serif;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.table-container th,
.table-container td {
  border: 1px solid rgba(17, 153, 249, 0.5);
  padding: 10px;
  text-align: left;
  border-radius: 8px;
  
  
}

.table-container th {
  font-weight: bold;
}

.table-container tr:nth-child(even) {
  background-color: #f2f2f2;
}

.table-container tr:hover {
  background-color: #e0e0e0;
}
</style>