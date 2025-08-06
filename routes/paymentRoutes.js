const express = require('express');
const { createCheckoutSession } = require('../controllers/paymentController');

const router = express.Router();

// Route to create Stripe checkout session
router.post('/create-checkout-session', createCheckoutSession);

module.exports = router;
