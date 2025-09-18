import mongoose from "mongoose";

const appointmentModel = mongoose.Schema({
  id: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  userId: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  doctorId: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  doctorName: {
    type: String,
    required: true,
    trim: true,
  },
  doctorType: {
    type: String,
    required: true,
    trim: true,
  },
  doctorAddress: {
    street: {
      type: String,
      trim: true,
      required: true,
    },
    area: {
      type: String,
      trim: true,
      required: true,
    }
  },
  appointmentDay: {
    type: String,
    required: true,
  },
  appointmentTime: {
    type: String,
    required: true,
  }
}, { timestamps: true });

const Appointment = new mongoose.model("Appointment", appointmentModel);

export default Appointment;