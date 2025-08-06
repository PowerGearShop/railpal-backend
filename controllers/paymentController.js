const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || '');

/**
 * Controller to create a Stripe checkout session.
 * Expects `priceId` in the request body. You should configure your products
 * and price IDs in the Stripe Dashboard. In test mode you can use test price IDs.
 */
exports.createCheckoutSession = async (req, res) => {
  const { priceId, mode = 'subscription' } = req.body;

  if (!priceId) {
    return res.status(400).json({ error: 'Missing priceId in request body' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode,
      success_url: process.env.SUCCESS_URL || 'https://example.com/success',
      cancel_url: process.env.CANCEL_URL || 'https://example.com/cancel',
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create Stripe checkout session' });
  }
};
