const express = require("express");
const bodyParser = require("body-parser");
const engines = require("consolidate");
const paypal = require("paypal-rest-sdk");

const app = express();

app.engine("ejs", engines.ejs);
app.set("views", "./views");
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

paypal.configure({
  mode: "sandbox", //sandbox or live
  client_id:
    "AVvmtD8N9BqVz4kiR_PCVc7J-USK6nsa1B1Lg1mW2t7ea-D-npjcinGIDKcdGZNjsydrYfp2n9GwYzuV",
  client_secret:
    "EFu4BS4LmtKf6BYvhZTZT_qsBYnuv1ESPS4xlqyjuj11RA631rKSTEQSS7qPOpniDcD5z8Pg8BLe9KOK",
});

app.get("/", (req, res) => {
  res.render("index");
  // res.send("It Works!");
});

//var amt = null;

app.get("/paypal", (req, res) => {
    //app.get("/paypal/:amt", (req, res) => {
        // amt = req.params.amt;
  var create_payment_json = {
    intent: "sale",
    payer: {
      payment_method: "paypal",
    },
    redirect_urls: {
      return_url: "http://192.168.0.147:3000/success",
      cancel_url: "http://192.168.0.147:3000/cancel",
    },
    transactions: [
      {
        item_list: {
          items: [
            {
              name: "item",
              sku: "item",
              price: "1.00",
              //price:amt,
              currency: "USD",
              quantity: 1,
            },
          ],
        },
        amount: {
          currency: "USD",
          total: "1.00",
          //total:amt
        },
        description: "This is the payment description.",
      },
    ],
  };

  paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
      throw error;
    } else {
      console.log("Create Payment Response");
      console.log(payment);
    //   for(let i=0; i<payment.links.length;i++){
    //     if(payment.links[i].rel === 'approval_url'){
    //         res.redirect(payment.links[1].href);
    //     }
    //   }
      res.redirect(payment.links[1].href);
      // res.send("ok");
    }
  });
});

// app.get("/success", (req,res)=>{
//     res.send("Success");
// });

app.get("/cancel", (req, res) => {
  res.send("Cancel");
});

app.get("/success", (req, res) => {
  // res.send("Success");
  var PayerID = req.query.PayerID;
  var paymentId = req.query.paymentId;
  var execute_payment_json = {
    payer_id: PayerID,
    transactions: [
      {
        amount: {
          currency: "USD",
          total: "1.00",
          //total:amt
        },
      },
    ],
  };

  paypal.payment.execute(
    paymentId,
    execute_payment_json,
    function (error, payment) {
      if (error) {
        console.log(error.response);
        throw error;
      } else {
        console.log("Get Payment Response");
        console.log(JSON.stringify(payment));
        res.render("success");
        //res.sendFile(__dirname + "success.ejs")
      }
    }
  );
});

app.get("/cancel", (req, res) => {
  // res.send("Cancel");
  res.render("cancel");
});

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
