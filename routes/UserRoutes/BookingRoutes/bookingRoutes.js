const {
  handleUserBooking,
} = require("../../../Controllers/User/BookingController/bookingController");
const express = require("express");
const bookingRoutes = express.Router();

// Booked Trip Routes Post Route
bookingRoutes.post("/bookTrip", handleUserBooking);
module.exports = bookingRoutes;
