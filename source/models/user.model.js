import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const UserSchema =new Schema({
    name:{type:String},
    lastname:{type:String},
    age:{type:Number},
    job:{type:String},
    tel:{type:String}
})