const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

/**
 * Create a Stripe Checkout session.
 * @param {Object} params
 * @param {string} params.priceId - The Stripe price ID for the product.
 * @param {string} params.mode - 'subscription' or 'payment'
 */
async function createCheckoutSession({ priceId, mode = 'subscription' }) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode,
    success_url: process.env.SUCCESS_URL || 'http://localhost:3000/success',
    cancel_url: process.env.CANCEL_URL || 'http://localhost:3000/cancel',
  });
  return session;
}

module.exports = {
  createCheckoutSession,
};
