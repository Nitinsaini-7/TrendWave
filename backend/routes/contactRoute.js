import express from "express";
import { createContact, getContacts } from "../controllers/contactController.js";

const contactRouter = express.Router();

// Route to save contact data
contactRouter.post("/", createContact);

// Route to fetch contact data
contactRouter.get("/", getContacts);

export default contactRouter;
