// import du model
// model déporté dans index.model
import * as Models from "../models/index.models";

export const getUsers = async (req, res) => {
  if (req.query.name) {
    await findByName(req, res); // redirection
  } else {
    Models.UserModel
              .find() //findAll
                .sort({ name: -1 }) // -1 or 1 desc or asc
                // .select('name age lastname -_id') // select ou exclusion avec -
                // chain limit ..etc
                .then((resp) => res.json(resp))
                .catch((err) => res.status(400).send(err));
  }
};
// search One => params or query
export const findByName = async (req, res) => {
  const name = req.params.name || req.query.name;
  Models.UserModel
    .findOne({ name })
      .then((resp) => res.json(resp))
      .catch((err) => res.status(400).send(err));
};
export const addNewUser = async (req, res) => {
  let newUser = await Models.UserModel.create(req.body);
  newUser
    .save()
      .then((result) => res.json(result))
      .catch((err) => res.send(err));
};
// update sans id
export const updateUser = async (req, res) => {
  // const _id = req.body._id
  // delete req.body._id // suppression de l'id
  const userModel = await Models.UserModel.findOne(req.body); //recherche élément pour l'id
  Models.UserModel
    .findOneAndUpdate({ _id: userModel._id }, req.body)
      .then((resp) => res.json(resp))
      .catch((err) => res.status(400).send(err));
};
export const updateUserById = async (req, res) => {
  let option = { _id: req.params.id }; // soit en params
  option = { _id: req.body._id }; // soit dans le body
  delete req.body._id; // suppression de l'id

  // la déclaration doit être AVANT l'utilisation
  const responseObjectById = function () {
    Models.UserModel
      .findById(option)
        .then((result) => res.json(result));
  };
  // retourne l'objet modifié
  await Models.UserModel
                .findOneAndUpdate(option, req.body)
                  .then(responseObjectById)
                  .catch((err) => res.status(400).send(err));

};
export const deleteUser = async (req, res) => {
  const response = function () {
    res.json({
      message: `suppression réussi pour l'objet ${
        req.body._id || req.body.name
      }`,
    });
  };
  const responseError = function () {
    res.send({
      message: `problème de suppression de l'objet ${
        req.body._id || req.body.name
      }`,
    });
  };
  delete req.body._id; // suppression de l'id
  const deleteUserById = function () {
    Models.UserModel
      .findOneAndDelete(userModel._id, req.body)
        .then(response)
        .catch(responseError);
  };
  await Models.UserModel
                  .findOne(req.body) //recherche élément pour l'id
                    .then(deleteUserById) // méthode de suppression
                    .catch(responseError);
  };
