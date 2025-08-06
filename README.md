# RailPal Backend

## Setup

1. Install dependencies:
    npm install
2. Copy `.env.example` to `.env` and fill in your Supabase and Stripe keys.
3. Start the server:
    node server.js

## Deployment (Render)

- Build command: npm install
- Start command: node server.js
- Environment variables:
  - SUPABASE_URL
  - SUPABASE_KEY
  - STRIPE_SECRET_KEY
  - SUCCESS_URL
  - CANCEL_URL
