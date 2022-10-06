import mongoose from "mongoose";
import { ContactSchema } from "../models/contact.model";

const Contact = mongoose.model("Contact", ContactSchema);

export const addNewContact = (req, res) => {
  let newContact = new Contact(req.body);

  newContact.save((err, contact) => {
    if (err) {
      res.send(err);
    } else {
      res.json(contact);
    }
  });
  Contact.insertMany(req.body,(err, contact) => {
    if (err) {
      res.send(err);
    } else {
      res.json(contact);
    }
  })
};
export const getContacts = (req, res) => {
  Contact.find({}, (err, contact) => {
    if (err) {
      res.send(err);
    } else {
      res.json(contact);
    }
  });
};
export const getContactById = (req, res) => {
  Contact.findById(req.params.contactId, (err, contact) => {
    if (err) {
      res.send(err);
    } else {
      res.json(contact);
    }
  });
};
export const updateContact = (req, res) => {
  Contact.findOneAndUpdate(
    { _id: req.params.contactId },// recherche par id
    req.body, // transmission du corp de la requête pour updated
    { new: true },// état de changement (remplacement)
    (err, contact) => {
      if (err) {
        res.send(err);
      } else {
        res.json(contact);
      }
    }
  );
};
export const deleteContact = (req, res) => {
  Contact.remove({ _id: req.params.contactId }, (err, contact) => {
    if (err) {
      res.send(err);
    } else {
      res.json(`contact effacé`);
    }
  });
};
