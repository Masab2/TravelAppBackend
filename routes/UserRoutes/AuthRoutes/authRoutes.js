const {
  handleUserRegister,
  handleUserLogin,
  handleGetUserProfile,
} = require("../../../Controllers/User/AuthController/authController");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Server is Working" });
});

// Register Api
router.post("/register", handleUserRegister);

// Login Api
router.post("/login", handleUserLogin);

// Profile Routes
router.get("/profile", handleGetUserProfile);

module.exports = router;
