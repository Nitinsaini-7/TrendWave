import Contact from "../models/contactModel.js";

// Save contact form data
export const createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();
    res.status(201).json({ message: "Form Submit Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error saving contact", error });
  }
};

// Fetch contact data
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching contacts", error });
  }
};
