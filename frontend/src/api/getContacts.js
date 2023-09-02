import axios from "axios";

const getContact = async (contactData) => {
  const res = await axios.get("http://localhost:4000/api/contacts");
  return res;
  // try {
  //   const response = await axios.get("http://localhost:4000/api/contacts");
  //   return response.data; // Return the data from the response
  // } catch (error) {
  //   console.error("Error fetching contacts:", error);
  //   throw error; // Rethrow the error to be caught by the caller
  // }
};

export default getContact;
