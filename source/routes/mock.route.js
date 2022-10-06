
import { readMockFile } from "../controllers/mock.controller";


const mockRoutes = (app) => {
  app.route("/mock").get(readMockFile);
};
export default mockRoutes;
