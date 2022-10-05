import mongoose from "mongoose";
import {UserSchema} from "../models/user.model";
import callbackHandler from "./callback.controller";

const UserModel = mongoose.model("User", UserSchema);

export const getUsers = (req, res) => {
    UserModel.find({}, (err, user) => {
      if (err) {
        res.send(err);
      } else {
        res.json(user);
      }
    });
  };
export const addNewUser = (req, res) => {
  let newUser = new UserModel(req.body);
  newUser.save( (err, user) => {
    if (err) {
      res.send(err);
    } else {
      res.json(user);
    }
  });
};