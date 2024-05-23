const placesModel = require("../../../Models/Admin/PlacesModell/TravelPlacesModel");

async function handlePostPlaces(req, res) {
  const { title, description, country, city, pricePerPerson, currency } =
    req.body;
  const image = req.file.filename;
  console.log(req.body);

  if (
    !title ||
    !description ||
    !image ||
    !country ||
    !city ||
    !pricePerPerson ||
    !currency
  ) {
    return res.status(400).json({ error: "All fields are required" });
  }
  const imageUrl = `http://localhost:8000/img/${image}`;
  try {
    const places = new placesModel({
      title,
      description,
      image: image,
      country,
      city,
      pricePerPerson,
      currency,
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

async function handleGetPlaces(req, res) {
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

module.exports = { handlePostPlaces, handleGetPlaces };
