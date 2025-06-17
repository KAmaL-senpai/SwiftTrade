require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const { SignupAuth, LoginAuth, LogoutAuth } = require("./controllers/AuthController");
const { userVerification } = require("./middlewares/AuthMiddleware");
const cookieParser = require("cookie-parser");

const { HoldingModel } = require("./models/HoldingModels");
const { PositionModel } = require("./models/PositionModel");
const { OrderModel } = require("./models/OrderModel");

const PORT = process.env.PORT || 8080;
const dburl = process.env.MONGO_URL;

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: [
      "https://swift-trade.vercel.app",
      "https://swift-trade-wbro.vercel.app",
    ],
    credentials: true,
  })
);


async function main() {
  await mongoose.connect(dburl);
}
main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => console.log(err));

// app.get("/addPosition", async (req, res) => {
//   let tempData = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   tempData.forEach((item) => {
//     let newHolding = new PositionModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });

//       newHolding.save();
//     console.log("Data Added")
//   });
//   res.send("It Worked");
// });

// app.get("/addholdings", async (req, res) => {
//   let tempData = [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//       price: 1522.35,
//       net: "+10.04%",
//       day: "+0.11%",
//     },
//     {
//       name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//       net: "+3.49%",
//       day: "+0.21%",
//     },
//     {
//       name: "INFY",
//       qty: 1,
//       avg: 1350.5,
//       price: 1555.45,
//       net: "+15.18%",
//       day: "-1.60%",
//       isLoss: true,
//     },
//     {
//       name: "ITC",
//       qty: 5,
//       avg: 202.0,
//       price: 207.9,
//       net: "+2.92%",
//       day: "+0.80%",
//     },
//     {
//       name: "KPITTECH",
//       qty: 5,
//       avg: 250.3,
//       price: 266.45,
//       net: "+6.45%",
//       day: "+3.54%",
//     },
//     {
//       name: "M&M",
//       qty: 2,
//       avg: 809.9,
//       price: 779.8,
//       net: "-3.72%",
//       day: "-0.01%",
//       isLoss: true,
//     },
//     {
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2193.7,
//       price: 2112.4,
//       net: "-3.71%",
//       day: "+1.44%",
//     },
//     {
//       name: "SBIN",
//       qty: 4,
//       avg: 324.35,
//       price: 430.2,
//       net: "+32.63%",
//       day: "-0.34%",
//       isLoss: true,
//     },
//     {
//       name: "SGBMAY29",
//       qty: 2,
//       avg: 4727.0,
//       price: 4719.0,
//       net: "-0.17%",
//       day: "+0.15%",
//     },
//     {
//       name: "TATAPOWER",
//       qty: 5,
//       avg: 104.2,
//       price: 124.15,
//       net: "+19.15%",
//       day: "-0.24%",
//       isLoss: true,
//     },
//     {
//       name: "TCS",
//       qty: 1,
//       avg: 3041.7,
//       price: 3194.8,
//       net: "+5.03%",
//       day: "-0.25%",
//       isLoss: true,
//     },
//     {
//       name: "WIPRO",
//       qty: 4,
//       avg: 489.3,
//       price: 577.75,
//       net: "+18.08%",
//       day: "+0.32%",
//     },
//   ];

//   tempData.forEach((item) => {
//     let newHolding = new HoldingModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//     });

//       newHolding.save();
//     console.log("Data Added")
//   });
//   res.send("It Worked");
// });

app.post("/signup", SignupAuth);
app.post("/login", LoginAuth);
app.get("/logout", LogoutAuth);
app.get("/verify", userVerification, (req, res) => {
  res.json({ status: true, user: req.user.username });
});

app.get("/allHoldings", userVerification, async (req, res) => {
  let allHoldings = await HoldingModel.find({ userId: req.user._id });
  res.json({ holdings: allHoldings });
});

app.get("/allPositions", userVerification, async (req, res) => {
  let allPositions = await PositionModel.find({});
  res.json({ positions: allPositions });
});

app.get("/allOrders", userVerification, async (req, res) => {
  let allOrders = await OrderModel.find({ userId: req.user._id });
  res.json(allOrders);
});

app.post("/newOrder", userVerification, async (req, res) => {
  const { name, qty, price, mode } = req.body;
  const userId = req.user._id;

  if (mode !== "BUY") {
    return res.status(400).send("Only BUY orders are handled here.");
  }

  // 1. Save the order
  const newOrder = new OrderModel({
    userId,
    name,
    qty,
    price,
    mode: "BUY",
  });
  await newOrder.save();

  // 2. Check if holding already exists
  const existingHolding = await HoldingModel.findOne({ userId, name });

  if (existingHolding) {
    // Recalculate average price and update quantity
    const totalQty = existingHolding.qty + qty;
    const totalCost = existingHolding.avg * existingHolding.qty + price * qty;
    const newAvg = totalCost / totalQty;

    existingHolding.qty = totalQty;
    existingHolding.avg = newAvg;
    existingHolding.price = price; // update to latest price
    // optionally recalculate `net` and `day` here

    await existingHolding.save();
  } else {
    // If not exists, create new
    const newHolding = new HoldingModel({
      userId,
      name,
      qty,
      avg: price,
      price,
      net: "0%",
      day: "0%",
    });

    await newHolding.save();
  }

  res.send("Order placed and holding updated.");
});

app.post("/sellOrder", userVerification, async (req, res) => {
  const { name, qty, price } = req.body;
  let sellOrder = new OrderModel({
    userId: req.user._id,
    name,
    qty,
    price,
    mode: "SELL",
  });

  await sellOrder.save();
  console.log(sellOrder);
  res.send("Selled the Order");
});
app.get("/", (req, res) => {
  res.send("IT is working");
});

app.listen(PORT, () => {
  console.log("Listing to App");
});
