import axios from "axios";

const deleteContact = async (id) => {
  const res = await axios.delete(`http://localhost:4000/api/contacts/${id}`);
  return res;
};

export default deleteContact;
