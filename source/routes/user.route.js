import {
  addNewUser,
  getUsers,
  updateUser,
  deleteUser,
  findByName,
  updateUserById,
} from "../controllers/user.controller";
const userRoutes = (app) => {
  app
    .route("/user")
      .get(getUsers)
      .post(addNewUser)
      .put(updateUser)
      .delete(deleteUser)

    .route("/user/:id")
      .put(updateUserById)

    .route("/user:name")
      .get(findByName)

    .route("/user/:name")
      .get(findByName);
};
export default userRoutes;
