import { addNewUser, getUsers } from "../controllers/user.controller";
const userRoutes = (app) => {
  app.route("/user").get(getUsers).post(addNewUser);
  app.route("/user/:id").put().delete();
};
export default userRoutes;
