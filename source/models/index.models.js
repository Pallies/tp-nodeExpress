import mongoose from "mongoose";
import { UserSchema } from "../models/user.model";

const UserModel = mongoose.model("User", UserSchema);

    export {
        UserModel
    }

