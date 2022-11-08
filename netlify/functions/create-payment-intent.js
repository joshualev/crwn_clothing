require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Request receives an amount value
// Pass this value into stripe to make a payment intent that stripe will then register
// if successful, we return that intent to the front end
// if unsuccessful, we return a status 400 and error
exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "aud",
      payment_method_types: ["card"],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error });

    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};
