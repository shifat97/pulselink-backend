import { data } from "../data.js";
import { RouteNotImplementedError } from "../../../node-recap-basic/src/errors/index.js";
import { productServices } from "../services/index.js";
import { CreateProductSchema } from "../schemas/index.js";

const getProducts = (req, res) => {
  res.status(200).send(data);
};

const getProductById = (req, res) => {
  const { productId } = req.params;
  res.send({ message: `Your product id is: ${productId}` });
};

const createProduct = async (req, res, next) => {
  try {
    CreateProductSchema.parse(req.body);
    const newProduct = await productServices.createProduct(req.body);
    res.status(201).json(newProduct);
  } catch (err) {
    next(err); // Pass error to error handler
  }
};

const deleteProduct = (req, res) => {
  throw new RouteNotImplementedError();
};

const updateProduct = (req, res) => {
  throw new RouteNotImplementedError();
};

export {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
};
