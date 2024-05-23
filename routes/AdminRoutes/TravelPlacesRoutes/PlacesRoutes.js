const {
  handlePostPlaces,
  handleGetPlaces,
} = require("../../../Controllers/Admin/PlacesController/placesController");

const express = require("express");
const placeRoutes = express.Router();

const multer = require("multer");
const path = require("path");

// Use static files from the public directory
placeRoutes.use("/img", express.static("public/Images"));

// For Upload Image into the server we use the multer
const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../../public/Images"),
  filename: function (req, file, cb) {
    return cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

placeRoutes.post("/addPlace", upload.single("image"), handlePostPlaces);

placeRoutes.get("/getAllPlaces", handleGetPlaces);

module.exports = placeRoutes;
