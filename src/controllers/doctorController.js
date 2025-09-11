import { RouterNotImplementedError } from "../errors/index.js";
import { doctorService } from "../services/index.js";

const createDoctor = async (req, res, next) => {
  try {
    const newDoctor = await doctorService.createDoctor(req.body);
    res.status(201).json(newDoctor);
  } catch (err) {
    next(err); // Pass error to error handler
  }
};

const getDoctors = async (req, res, next) => {
  try {
    res.status(200).json(await doctorService.getAllDoctors());
  } catch (err) {
    next(err);
  }
};


const deleteProduct = (req, res) => {
  throw new RouterNotImplementedError();
};

const updateProduct = (req, res) => {
  throw new RouterNotImplementedError();
};

export { createDoctor, getDoctors };
