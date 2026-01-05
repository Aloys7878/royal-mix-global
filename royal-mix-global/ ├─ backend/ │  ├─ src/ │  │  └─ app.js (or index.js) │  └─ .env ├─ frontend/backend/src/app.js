const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

// Route for Pi Validation Key
app.get('/validation-key.txt', (req, res) => {
  res.type('text/plain');
  res.send(process.env.PI_VALIDATION_KEY);
});

// Optional: test root route
app.get('/', (req, res) => {
  res.send('Royal Mix Global Backend Running');
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
