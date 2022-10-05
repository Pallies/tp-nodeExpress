import { Promise } from "bluebird";
import * as fs from "fs";

const fsp = Promise.promisifyAll(fs);

const mockRoutes = (app) => {
  app.route("/mock").get((req, res) => {
    const file = fsp
      .readFileAsync("./source/mock/userMock.json")
      .then((content) => res.json(JSON.parse(content)));
  });
};
export default mockRoutes;
