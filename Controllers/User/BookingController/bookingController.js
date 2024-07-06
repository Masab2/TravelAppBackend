const bookingModel = require("../../../Models/User/BookingModel/booking_model");
const placesModel = require("../../../Models/Admin/PlacesModell/TravelPlacesModel");
async function handleUserBooking(req, res) {
  const { persons, address, phone, userId, placeId } = req.body;

  // Log request body
  console.log("Request Body:", req.body);

  try {
    // Check if required fields are provided
    if (!persons || !address || !phone || !userId || !placeId) {
      console.log("Missing fields:", {
        persons,
        address,
        phone,
        userId,
        placeId,
      });
      return res.status(400).json({ error: "All fields are required" });
    }
    // find The Place Data
    const place = await placesModel.findById(placeId);
    if (!place) {
      return res.status(404).json({ error: "Place not found" });
    }

    // Create new booking object
    const booking = new bookingModel({
      persons,
      address,
      phone,
      userId,
      placeId,
      title: place.title,
      description: place.description,
      image: place.image,
      country: place.country,
      city: place.city,
      pricePerPerson: place.pricePerPerson,
      currency: place.currency,
      category: place.category,
      bestDestination: place.bestDestination,
    });

    // Log booking object
    console.log("Booking Object:", booking);

    // Save booking to database
    const result = await booking.save();

    // Log result
    console.log("Save Result:", result);

    // Respond with success message
    return res.status(200).json({
      Status: true,
      Success: {
        message: "Booking Successful",
        data: result,
        bookingId: result._id,
      },
    });
  } catch (error) {
    // Log error
    console.error("Error:", error);

    // Handle errors
    return res.status(500).json({ error: error.message });
  }
}

module.exports = { handleUserBooking };
