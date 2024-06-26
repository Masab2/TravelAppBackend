const mongoose = require("mongoose");

const favouriteSchema = new mongoose.Schema(
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
    userId: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

const favouriteModel = mongoose.model("favourite", favouriteSchema);
module.exports = favouriteModel;
