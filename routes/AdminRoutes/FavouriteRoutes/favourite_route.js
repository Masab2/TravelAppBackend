const {
  handleAddToFavorites,
  handleGetAllFavourites,
} = require("../../../Controllers/Admin/FavouriteController/favourite_controller");

const express = require("express");
const favouriteRoutes = express.Router();

favouriteRoutes.post("/addToFavorites", handleAddToFavorites);
favouriteRoutes.get("/getAllFavourites", handleGetAllFavourites);
module.exports = favouriteRoutes;
