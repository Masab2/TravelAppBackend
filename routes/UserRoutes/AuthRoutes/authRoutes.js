const {
  handleUserRegister,
  handleUserLogin,
} = require("../../../Controllers/User/AuthController/authController");

const router = require("express").Router();

router.get("/", (req, res) => {
    res.status(200).json({ message: "Server is Working" });
});



// Register Api
router.post("/register", handleUserRegister);

// Login Api
router.post("/login", handleUserLogin);

module.exports = router;
