import {
  addNewUser,
  getUsers,
  updateUser,
  deleteUser,
  findByName,
  updateUserById,
} from "../controllers/user.controller";
const userRoutes = (app) => {
  app.route("/user").get(getUsers).post(addNewUser).delete(deleteUser);
  app.route("/user/:id").put(updateUserById).put(updateUserById)
  app.route("/user:name").get(findByName);
  app.route("/user/:name").get(findByName);
};
export default userRoutes;
