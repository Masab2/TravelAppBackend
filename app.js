require("dotenv").config();
const express = require("express");
const body_parser = require("body-parser");
const { connectToDb } = require("./Connections/connection");
const authModel = require("./Models/User/Auth/userAuthModel");
const authRoutes = require("./routes/UserRoutes/AuthRoutes/authRoutes");
const placeRoutes = require("./routes/AdminRoutes/TravelPlacesRoutes/PlacesRoutes");
const favouriteRoutes = require("./routes/AdminRoutes/FavouriteRoutes/favourite_route")
const bookingRoutes = require("./routes/UserRoutes/BookingRoutes/bookingRoutes")
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8000;

// Middle Wears
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(body_parser.json());
app.use("/api", authRoutes);
app.use("/api", placeRoutes);
app.use("/api", placeRoutes);
app.use("/api", favouriteRoutes);
app.use("/api", bookingRoutes);
app.use("/img", express.static(path.join(__dirname, "public/Images")));


// Connect To Mongo DB
connectToDb(process.env.MONGO_URL)
  .then(() => {
    console.log(`Connected To Mongo Db ${PORT}`);
  })
  .catch(() => {
    console.log(`Failed to connect to MongoDB ${PORT}`);
  });

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
