const mongoose = require("mongoose");

const placesSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

const placesModel = mongoose.model("TravelPlaces", placesSchema);

module.exports = placesModel;
