import z from "zod";

export const CreateAppointmentSchema = z.object({
  id: z.string(),
  userId: z.string(),
  doctorId: z.string(),
  doctorName: z.string().min(1, "Name is required"),
  doctorType: z.string().min(1, "Type is required"),
  doctorAddress: z.object({
    street: z.string().min(1, "Street is required"),
    area: z.string().min(1, "Area is required"),
  }),
  appointmentDay: z.string(),
  appointmentTime: z.string(),
});