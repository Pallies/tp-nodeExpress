import {
  addNewContact,
  getContacts,
  getContactById,
  updateContact,
  deleteContact,
} from "../controllers/contact.controller";

const contactRoutes = (app) => {
  const middleware = function(req, res, next) {
    console.log(`Request ${req.originalUrl}`); //contact
    console.log(`Request ${req.method}`); // GET
    next();
  }
  app
    .route("/contact")
      .get(middleware, getContacts)
      .post(addNewContact);

  app
    .route("/contact/:contactId")
      .get(getContactById) // récupère l'objet
      .put(updateContact)
      .delete(deleteContact);
};

export default contactRoutes;
