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

const getProducts = async (req, res) => {
  throw new RouteNotImplementedError();
};

const deleteProduct = (req, res) => {
  throw new RouteNotImplementedError();
};

const updateProduct = (req, res) => {
  throw new RouteNotImplementedError();
};

export { createDoctor };
