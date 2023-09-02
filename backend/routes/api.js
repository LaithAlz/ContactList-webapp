import express from "express";
const router = express.Router();

import {
  getContacts,
  putContact,
  postContact,
  getOneContact,
  deleteContact,
} from "../controllers/contactController.js";

router.get("/contacts", getContacts);

router.get("/contacts/:id", getOneContact);

router.post("/contacts", postContact);

router.put("/contacts/:id", putContact);

router.delete("/contacts/:id", deleteContact);

export default router;
