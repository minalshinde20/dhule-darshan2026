const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./UserSchema");
const cors = require("cors");
const Booking = require("./BookingSchema");
const CarBooking = require("./CarBookingSchema");
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.post("/login", async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({
      message: "User Does not exists",
    });
  }

  if (user.password != password) {
    return res.status(400).json({
      message: "Invalid Password",
    });
  }
  res.status(200).json({ data: user });
});

app.post("/register", async (req, res) => {
  const { email, password, name } = req.body;
  console.log(req.body);
  const usr = new User({
    email,
    name,
    password,
  });
  await usr.save();
  res.status(200).json({ data: usr });
});

app.post("/booking", async (req, res) => {
  console.log(req.body);
  const { uid, bookProp, type, amount, Eventdate, Bookingdate } = req.body;
  const bookdetails = new Booking({
    uid,
    bookProp,
    type,
    amount,
    Eventdate,
    Bookingdate,
  });
  await bookdetails.save();
  res.status(200).json({ data: bookdetails });
});

app.post("/gbooking", async (req, res) => {
  const { uid } = req.body;
  const bookdetails = await Booking.find({
    uid: uid,
  });
  console.log("Booking", uid);
  res.status(200).json({ data: bookdetails });
});

app.post("/carbooking", async (req, res) => {
  const {
    uid,
    bookProp,
    type,
    carName,
    capacity,
    amount,
    Eventdate,
    Bookingdate,
  } = req.body;
  const bookdetails = new CarBooking({
    uid,
    bookProp,
    type,
    carName,
    capacity,
    amount,
    Eventdate,
    Bookingdate,
  });
  await bookdetails.save();
  res.status(200).json({ data: bookdetails });
});

app.post("/gcarbooking", async (req, res) => {
  const { uid } = req.body;
  const bookdetails = await CarBooking.find({
    uid: uid,
  });
  console.log("Booking", uid);
  res.status(200).json({ data: bookdetails });
});



app.get("/getUsers", async (req, res) => {
  const userDetails = await User.find({});
  res.status(200).json({ data: userDetails });
});

mongoose
  .connect("mongodb://127.0.0.1:27017/Dhuledarshan")
  .then(() => {
    app.listen(5000, () => {
      console.log("Server Listening...");
    });
  })
  .catch((error) => console.log(error));
