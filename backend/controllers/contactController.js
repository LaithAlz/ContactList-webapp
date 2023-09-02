import Contact from "../models/Contact.js";

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const getOneContact = async (req, res) => {
  const id = req.params.id;
  try {
    const contact = await Contact.findOne({ id: id });
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const postContact = async (req, res) => {
  const id = "id" + Math.random().toString(16).slice(2);

  const { name, email, phone } = req.body;

  try {
    const newContact = new Contact({ name, email, phone, id });
    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const putContact = async (req, res) => {
  const id = req.params.id;

  const { name, email, phone } = req.body;

  try {
    const updatedContact = await Contact.updateOne(
      { id: id },
      { name, email, phone }
    );

    res.json(updatedContact);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const deleteContact = async (req, res) => {
  const id = req.params.id;

  try {
    await Contact.deleteOne({ id: id });
    res.status(204).send();
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Server Error" });
  }
};
