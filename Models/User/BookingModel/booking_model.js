const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema(
  {
    persons: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
      required: false,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    placeId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    pricePerPerson: {
      type: String,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    bestDestination: {
      type: Boolean,
      required: true,
    },
    checkInDate: {
      type: Date,
      required: false,
    },
    checkOutDate: {
      type: Date,
      required: false,
    },
    totalAmount: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const bookingModel = mongoose.model("booking", bookingSchema);
module.exports = bookingModel;
