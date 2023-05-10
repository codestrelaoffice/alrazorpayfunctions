const functions = require("firebase-functions");

// // Create and deploy your first function

// // https://firebase.google.com/docs/functions/get-started

//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
// const functions = require("firebase-functions");
const Razorpay = require("razorpay");
// test accesslige key
var test_key_id = "rzp_test_M9aqnxvLMQo6VC";
var key_id = "rzp_live_n1im1rcGlUYmyU";
var test_key_secret = "hbAlfVs0EdoEZqy9uKz4ggQ5";
//  test accesslife
var key_secret = "nuYSZGm2PvUjbnZphjPcIDRA";
var request = require("request");
const cors = require('cors')({origin: true});
var instance = new Razorpay({
    key_id: key_id,
    key_secret: key_secret
});
var testinstance = new Razorpay({
    key_id: test_key_id,
    key_secret: test_key_secret
});


//For Payment request
exports.getpayments = functions.https.onRequest((req, res) => {
    return instance.all()

})
exports.geTestpayments = functions.https.onRequest((req, res) => {
    return testinstance.all()

})

//All donations made to us are eligible for tax exception under 80G of IT Act
