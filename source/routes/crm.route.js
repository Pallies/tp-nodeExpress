import {
  addNewContact,
  getContacts,
  getContactById,
  updateContact,
  deleteContact,
} from "../controllers/crm.controller";

const routes = (app) => {
  app
    .route("/contact")
    .get((req, res, next) => {
      // middleware
      console.log(`Request ${req.originalUrl}`); //contact
      console.log(`Request ${req.method}`); // GET
      next();
    }, getContacts)
    .post(addNewContact);

  app
    .route("/contact/:contactId")
    .get(getContactById) // récupère l'objet
    .put(updateContact)
    .delete(deleteContact);
};

export default routes;
