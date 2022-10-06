import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const UserSchema =new Schema({
    name: String,
    lastname: String,
    age: Number,
    job: String,
    tel: String
})