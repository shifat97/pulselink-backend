import { Doctor } from "../models/index.js";

export const createDoctor = async (doctorData) => {
  const newDoctor = new Doctor(doctorData);
  await newDoctor.save();
  return newDoctor;
};

export const getAllDoctors = async () => {
  return Doctor.find();
};

export const getDoctorById = async (id) => {
  return Doctor.findOne({ id })
}
