const express = require('express');
const fs = require('fs'); // For reading the JSON data file
const app = express();
const cors = require('cors');
const port = 3000; // You can change this to any port you prefer

// Read the JSON data file
const stockData = JSON.parse(fs.readFileSync('data.json', 'utf8'));
app.use(cors({ origin: 'https://price-of-stock.netlify.app' }));

app.get('/api/stocks', (req, res) => {
  res.json(stockData);
});
app.get('/price', (req, res) => {
  res.redirect(301, 'https://price-of-stock.netlify.app/price');
});
// API route to get mock stock market data
app.get('/api/search', (req, res) => {
  const symbol = req.query.symbol;
  const period = req.query.period;

  if (!symbol || !period) {
    res.status(400).json({ error: 'Both symbol and period query parameters are required.' });
  } else if (!stockData[symbol]) {
    res.status(404).json({ error: 'Symbol not found.' });
  } else {
    // Return data for the specified symbol and period
    res.json(stockData[symbol]);
  }
});

app.listen(port, () => {
  console.log(`Mock stock market application is running on port ${port}`);
});
