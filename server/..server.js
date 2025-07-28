const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../client')));
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    message: 'Linear Dashboard is running!' 
  });
});

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body style="font-family: Arial; padding: 50px; text-align: center;">
        <h1>🎉 Linear Dashboard Deployed!</h1>
        <p>Your webhook dashboard is now running.</p>
        <p><a href="/health">Check Health Status</a></p>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
