import express from "express";
import routes from "./source/routes/crm.route";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import * as dotenv from "dotenv";


dotenv.config()
const app = express();
const PORT = 3000;
//  création d'une Promise
mongoose.Promise = global.Promise;
mongoose.connect(`${process.env.MONGODB_ADDON_URI}`, {
  useNewUrlParser: true,
});
// use fonction express
// bodyParser convertisseur json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//  ROUTES
routes(app);
// photo(app)
app.use(express.static('photo'))

app.get("/", (req, res) =>
  res.send(`Serveur node et express sur le port ${PORT}`)
);

app.listen(PORT, () => console.log(`Serveur démarrer sur le port ${PORT}`));
