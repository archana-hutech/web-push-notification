const express = require("express");
const webPush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");
const { json } = require("body-parser");

const app = express();

//Set static path(put client-stuf)
app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json());

const publicVapidKey =
  "BHJ41X_cafhClIC1U8_KjLt7iOygI_6CrxjGOJm0PYD3q61r2LPzwZ1WQWVkw99lpWih-Cm4YSH_BZz_4QKn8c0";

const privateVapidKey = "8MnQIlqw0m_yckOi9ixe5VoBZKZJ0TF_9_tqLFj2f-Q";

webPush.setVapidDetails(
  "mailto:test@test.com",
  publicVapidKey,
  privateVapidKey
);

//Subscribe route (from the client) this is responsible for sending the notification directly to service worker
// app.post("/subscribe", (req, res) => {
//   //get pushSubscription object (from the client)
//   const subsciption = req.body;
//   console.log("7777", subsciption);
//   //send 201 status - resource created
//   res.status(201).json({});

//   //create payload
//   const payload = JSON.stringify({
//     title: "Push text",
//     body: "This is your first push notification",
//   });

//   //Pass object into sendNotification
//   webPush
//     .sendNotification(subsciption, payload)
//     .catch((err) => console.error(err));
// });

app.post("/push", (req, res) => {
  try {
    const { subscription, payload } = req?.body;
    if (subscription.endpoint) {
      webPush
        .sendNotification(subscription, JSON.stringify(payload))
        .catch(console.log);
      res.send("Notification sent successfuly");
    } else res.status(500).json({ error: "No subscription end point" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

const port = 5000;
app.listen(port, () => console.log(`server started on port ${port}`));
