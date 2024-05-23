const User = require("../../../Models/User/Auth/userAuthModel");

async function handleUserRegister(req, res) {
  const { name, email, password, phone } = req.body;
  console.log(req.body);
  try {
    if (!name || !email || !password || !phone) {
      return res.status(400).json({ error: "All fields are required" });
    } else {
      const userModel = new User({
        name,
        email,
        password,
        phone,
      });
      const userData = await User.findOne({ email });
      if (userData) {
        return res
          .status(200)
          .json({ Status: false, Error: "User Already Exist" });
      } else {
        const result = await userModel.save();
        return res.status(200).json({
          Status: true,
          Success: "Account Created Successfully",
          data: result,
        });
      }
    }
  } catch (error) {
    return res.status(400).json({ catchError: true, error: `${error}` });
  }
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  console.log(req.body);

  try {
    if (!email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(200).json({ message: "User Not Exist" });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    return res.status(200).json({
      Status: true,
      Success: "Login Successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({ error: `${error.message}` });
  }
}

module.exports = { handleUserRegister, handleUserLogin };
