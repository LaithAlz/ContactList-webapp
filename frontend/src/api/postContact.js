import axios from "axios";

const postContact = async (contactData) => {
  try {
    const res = await axios.post("/api/contacts", contactData);
    return res;
  } catch (error) {
    return null;
    // throw error;
  }
};

export default postContact;
