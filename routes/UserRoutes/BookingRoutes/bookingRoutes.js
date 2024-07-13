const {
  handleUserBooking,
  handleGetUserBookings,
} = require("../../../Controllers/User/BookingController/bookingController");
const express = require("express");
const bookingRoutes = express.Router();

// Booked Trip Routes Post Route
bookingRoutes.post("/bookTrip", handleUserBooking);

// get The User Booking
bookingRoutes.get("/getUserBookings", handleGetUserBookings);
module.exports = bookingRoutes;
