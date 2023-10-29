<template>
  <div class="chart-container container">
  <div class="row justify-content-center">
  <div class="col-lg-8 col-md-8 col-sm-10">
    <h3>APPLE Last Market Session Time Series (Daily/Hourly) Information</h3>
    <div class="select-container">
      <label for="interval">Select Interval:</label>
      <select id="interval" v-model="selectedInterval" @change="loadData">
        <option value="daily">Daily</option>
        <option value="hourly">Hourly</option>
      </select>
    </div>
    <div class="chartContainer" ref="chartContainer"></div>
    </div>
     </div>
  </div>
</template>

<script>
import { createChart } from 'lightweight-charts';

export default {
  name : 'FinancialChart',
  data() {
    return {
      chart: null,
      candlestickSeries: null,
      selectedInterval: 'daily',
    };
  },
  mounted() {
    this.initChart();
    this.loadData();
  },
  methods: {
    initChart() {
      this.chart = createChart(this.$refs.chartContainer, {
       
        layout: {
          backgroundColor: '#f8f8f8',
        },
      });

      this.candlestickSeries = this.chart.addCandlestickSeries();
    },
    loadData() {
      const interval = this.selectedInterval;

      const dailyData = [
        { time: '2023-10-01', open: 100, high: 120, low: 90, close: 110, volume: 10000 },
        { time: '2023-10-02', open: 110, high: 130, low: 100, close: 120, volume: 12000 },
        { time: '2023-10-03', open: 120, high: 140, low: 110, close: 130, volume: 12000 },
        { time: '2023-10-04', open: 130, high: 150, low: 120, close: 160, volume: 12000 },
        { time: '2023-10-05', open: 160, high: 180, low: 130, close: 110, volume: 10000 },
        { time: '2023-10-06', open: 180, high: 190, low: 100, close: 120, volume: 12000 },
        { time: '2023-10-07', open: 120, high: 140, low: 160, close: 130, volume: 12000 },
        { time: '2023-10-08', open: 140, high: 170, low: 150, close: 160, volume: 12000 },
        
       
      ];

  
      const hourlyData = [
      { time: new Date('2023-10-01T01:00:00').getTime(), open: 110, high: 111, low: 108, close: 109, volume: 1000 },
      { time: new Date('2023-10-01T02:00:00').getTime(), open: 109, high: 112, low: 107, close: 110, volume: 1200 },
      { time: new Date('2023-10-01T03:00:00').getTime(), open: 112, high: 121, low: 104, close: 100, volume: 1200 },
      { time: new Date('2023-10-01T04:00:00').getTime(), open: 113, high: 125, low: 106, close: 106, volume: 1200 },
      { time: new Date('2023-10-01T05:00:00').getTime(), open: 119, high: 148, low: 103, close: 108, volume: 1200 },
      { time: new Date('2023-10-01T06:00:00').getTime(), open: 125, high: 130, low: 105, close: 109, volume: 1200 },
      { time: new Date('2023-10-01T07:00:00').getTime(), open: 135, high: 140, low: 108, close: 110, volume: 1200 },
      { time: new Date('2023-10-01T08:00:00').getTime(), open: 140, high: 150, low: 109, close: 111, volume: 1200 },
      { time: new Date('2023-10-01T09:00:00').getTime(), open: 150, high: 160, low: 110, close: 112, volume: 1200 },

      ];


      const data = interval === 'hourly' ? hourlyData : dailyData;
      this.candlestickSeries.setData(data);
    },
  },
};
</script>

<style scoped>
.chart-container {
  padding: 20px;
  color:white;
}

.select-container {
  margin-bottom: 20px;
  color:white;
}

.chart {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 15px;
}
.chartContainer{
    width: 100%;
    height: 300px; 
  }

@media (max-width: 768px) {
  .col-lg-8 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .chart-container {
    padding: 10px;
    display:block;
   margin-left:30px;
   margin-right: 30px;
    max-width:50%;
   
  }
  .chartContainer{
   
   
    width: 330px;
    height: 300px;
    justify-content:center;

  }
  
  
 
}


@media (min-width: 768px) and (max-width: 991.98px){
  .chart-container {
    display:block;
   margin-left:30px;
   margin-right: 30px;
  
  }
  .chartContainer{
    width: 330px;
    height: 300px;
    justify-content:center;

  }
  
}

</style>
