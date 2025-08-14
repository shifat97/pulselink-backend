import { Router } from "express";
import { validatePayload } from "../middlewares/index.js";
import { CreateDoctorSchema } from "../schemas/index.js";
import { doctorController } from "../controllers/index.js";

const productRouter = Router();

productRouter.post(
  "/",
  validatePayload(CreateDoctorSchema),
  doctorController.createDoctor
);

// productRouter.get("/", productController.getProducts);

export default productRouter;
