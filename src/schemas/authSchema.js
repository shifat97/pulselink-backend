import z from "zod";

export const CreateAuthSchema = z.object({
  fullName: z.string().min(1, "Name is required"),
  email: z.string().email(),
  password: z.string().min(4, "Password is required"),
});
