import { authService } from "../services/index.js";
import { envConfig } from "../configs/index.js";
import jwt from "jsonwebtoken";

const signUpUser = async (req, res) => {
  try {
    const newUser = await authService.createUser(req.body);

    if (!newUser) {
      return res.status(409).json({
        message: "User is already exists, you can login",
        success: false,
      });
    }

    res.status(201).json({ message: "Signup Successful", success: true });
  } catch (e) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

const signInUser = async (req, res) => {
  try {
    const user = await authService.loginUser(req.body);
    console.log(user);
    const errorMessage = "Auth failed email or password is wrong";

    if (!user) {
      res.status(403).json({ message: errorMessage, success: false });
    }

    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id },
      envConfig.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.status(201).json({
      message: "Signup successful",
      success: true,
      jwtToken: jwtToken,
      email: user.email,
      name: user.fullName,
    });
  } catch (e) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

export { signUpUser, signInUser };
