const express = require("express");
const bodyParser = require("body-parser");
// const cors = require("cors");
const webPush = require("web-push");
const path = require("path");
const { json } = require("body-parser");
let db = require("./model/db");
// let subScriber = require('./model/subscriber')
require("dotenv").config();

const port = process?.env?.port || 3666;

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

db.sequelize
  .authenticate()
  .then(() => {
    console.error(
      `express server connected to "${
        process?.env?.SERVERHOST || "NA"
      }" database "${process?.env?.DBNAME || "NA"}"`
    );

    db.sequelize.sync();
  })
  .catch((err) => {
    console.error(
      `ERROR - Unable to connect to the database: "${process.env.DB_NAME}"`,
      err
    );
  });

app.get("/", (req, res) => {
  res.send("welcome to localhost");
});

app.post("/subscribe", async (req, res) => {
  const { endpoint, keys } = req.body;
  try {
    // Check if subscriber already exists in database
    const subscriber = await db.Subscriber.findOne({ where: { endpoint } });
    if (subscriber) {
      // If subscriber already exists, update their keys
      await subscriber.update({ keys });
    } else {
      // If subscriber does not exist, create a new record
      await db.Subscriber.create({ endpoint, keys });
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(`Error saving subscriber: ${error.message}`);
    res.sendStatus(500);
  }
});

app.post("/send-notification", async (req, res) => {
  //   const { title, message } = req.body;
  const users = await db.Subscriber.findAll();
  //   const payload = JSON.stringify({ title, message });

  try {
    const sendNotifications = users.map(async (user) => {
      await webPush.sendNotification(
        user,
        JSON.stringify({
          title: "Image Notification",
          body: "👋 sent from push notification",
          // image: "https://zefayar-uat.hutechweb.com/08a4491b2e23b6e7.png",
        })
      );
    });
    // await Promise.all(sendNotifications);
    res.status(200).json({ message: "Notification sent successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error sending notification" });
  }
});

app.listen(port, (err) => {
  if (!err) {
    console.log("server running at port 3666");
  }
});
