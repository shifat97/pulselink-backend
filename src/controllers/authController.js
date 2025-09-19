import { RouterNotImplementedError } from "../errors/index.js";
// import envConfig from "../configs/index.js";
import { authService } from "../services/index.js";

const createUser = async (req, res) => {
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

export { createUser };
