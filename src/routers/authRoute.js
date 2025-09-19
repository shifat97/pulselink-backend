import { Router } from "express";
import { validatePayload } from "../middlewares/index.js";
import { CreateAuthSchema } from "../schemas/index.js";
import { authController } from "../controllers/index.js";

const authRouter = Router();

authRouter.post(
  "/sign-up",
  validatePayload(CreateAuthSchema),
  authController.createUser
);

export default authRouter;
