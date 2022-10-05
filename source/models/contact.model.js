import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
  firstname: { type: String, require: "Entrer un prénom" },
  lastname: { type: String, require: "Entrer un nom de famille" },
  email: { type: String },
  compagny: { type: String },
  phone: { type: Number },
  created_date: { type: Date, default: Date.now },
});
