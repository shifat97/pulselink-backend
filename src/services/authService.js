import { User } from "../models/index.js";
import bcrypt from "bcrypt";

export const createUser = async (userData) => {
  const { fullName, email, password } = userData;
  const isUserExists = await User.findOne({ email });

  if (isUserExists) {
    return false;
  }

  const userModel = new User(userData);
  userModel.password = await bcrypt.hash(password, 10);
  await userModel.save();

  return userModel;
};
