const placesModel = require("../../../Models/Admin/PlacesModell/TravelPlacesModel");

// Add The Travel Places
async function handlePostPlaces(req, res) {
  const {
    title,
    description,
    country,
    city,
    pricePerPerson,
    currency,
    category,
    bestDestination,
  } = req.body;
  const image = req.file.filename;
  console.log(req.body);

  if (
    !title ||
    !description ||
    !image ||
    !country ||
    !city ||
    !pricePerPerson ||
    !currency ||
    !category ||
    !bestDestination
  ) {
    return res.status(400).json({ error: "All fields are required" });
  }
  try {
    const places = new placesModel({
      title,
      description,
      image: image,
      country,
      city,
      pricePerPerson,
      currency,
      category,
      bestDestination,
    });

    const placesData = await places.save();
    return res.status(200).json({
      Status: true,
      Success: "Places Added Successfully",
      data: placesData,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

// handel get all Places
async function handleGetAllPlaces(req, res) {
  try {
    const places = await placesModel.find();
    return res.status(200).json({
      Status: true,
      Success: "Places Fetched Successfully",
      data: places,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

// Get best Destination Places
async function handleGetBestDestinationPlaces(req, res) {
  try {
    const places = await placesModel.find({ bestDestination: true });
    return res.status(200).json({
      Status: true,
      Success: "Best Destination Places Fetched Successfully",
      data: places,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

// Get Places According To Category
async function handleGetPlacesByCategory(req, res) {
  const { category } = req.query;
  try {
    const places = await placesModel.find({ category });
    return res.status(200).json({
      Status: true,
      Success: "Places Fetched Successfully By Category",
      data: places,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  handlePostPlaces,
  handleGetBestDestinationPlaces,
  handleGetPlacesByCategory,
  handleGetAllPlaces
};
