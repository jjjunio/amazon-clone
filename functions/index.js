const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51GxK2EFjdfjgcidOgeJxalCAhkanXRaIbojF67x1LvLAWsfi2tLvb84XUBLDrkzafZihAnRr1Fkxaom7FSNbq18G00VcnigVxE"
);

// API

// App config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello, world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //in cents
    currency: "USD",
  });
  //OK - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// example endpoint
// http://localhost:5001/clone-a6f70/us-central1/api
