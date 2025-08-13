import { Router } from "express";
import * as productController from "../controllers/productController.js";
import { validatePayload } from "../middlewares/index.js";
import { CreateProductSchema } from "../schemas/index.js";

const productRouter = Router();

productRouter.post(
  "/",
  validatePayload(CreateProductSchema),
  productController.createProduct
);

productRouter.get("/", productController.getProducts);
productRouter.get("/:productId", productController.getProductById);

export default productRouter;
