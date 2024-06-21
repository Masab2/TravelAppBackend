const favouriteModel = require("../../../Models/Admin/FavouriteModel/favourite_model");
const placesModel = require("../../../Models/Admin/PlacesModell/TravelPlacesModel");
// Add to Favorites
async function handleAddToFavorites(req, res) {
  const { placeId, userId } = req.body;
  console.log(req.body);
  try {
    // Check if the place exists if exists then Return
    const place = await placesModel.findById(placeId);
    if (!place) {
      return res.status(404).json({ error: "Place not found" });
    }

    // Check if the place is already in the user's favorites
    const existingFavourite = await favouriteModel.findOne({
      userId: userId,
      title: place.title,
    });
    if (existingFavourite) {
      return res
        .status(200)
        .json({ status: true, message: "Place already added to favorites" });
    }

    // Add the place to the user's favorites
    const newFavourite = new favouriteModel({
      title: place.title,
      description: place.description,
      image: place.image,
      country: place.country,
      city: place.city,
      pricePerPerson: place.pricePerPerson,
      currency: place.currency,
      category: place.category,
      userId: userId,
    });
    await newFavourite.save();
    return res
      .status(200)
      .json({ status: true, message: "Place added to favorites" });
  } catch (error) {
    return res.status(500).json({ status: false, error: error.message });
  }
}

// get All Favourites of the User
async function handleGetAllFavourites(req, res) {
  const { userId } = req.query;
  console.log(req.query);
  try {
    const favourites = await favouriteModel.find({ userId: userId });
    return res.status(200).json({ Status: true, Success: favourites });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
}

module.exports = { handleAddToFavorites, handleGetAllFavourites };
