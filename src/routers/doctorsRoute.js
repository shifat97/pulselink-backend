import { Router } from "express";
import { validatePayload } from "../middlewares/index.js";
import { CreateDoctorSchema } from "../schemas/index.js";
import { doctorController } from "../controllers/index.js";

const doctorRouter = Router();

doctorRouter.post(
  "/",
  validatePayload(CreateDoctorSchema),
  doctorController.createDoctor
);

doctorRouter.get("/", doctorController.getDoctors);
doctorRouter.get("/:id", doctorController.getDoctorById);

// doctorRouter.get("/", productController.getProducts);

export default doctorRouter;
