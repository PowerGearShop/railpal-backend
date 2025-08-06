const express = require('express');
const cors = require('cors');
require('dotenv').config();

const ocrRoutes = require('./routes/ocrRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/ocr', ocrRoutes);
app.use('/api/payment', paymentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
