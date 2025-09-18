import { RouterNotImplementedError } from "../errors/index.js";
import { appointmentService } from "../services/index.js";

const createAppointment = async (req, res) => {
  try {
    const newAppointment = await appointmentService.createAppointment(req.body);
    res.status(201).json(newAppointment);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Something went wrong" });
  }
}

const deleteAppointment = (req, res) => {
  throw new RouterNotImplementedError();
}

const updateAppointment = (req, res) => {
  throw new RouterNotImplementedError();
}

export { createAppointment };