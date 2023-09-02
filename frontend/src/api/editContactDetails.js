import axios from "axios";

const editContactDetails = async (id, newInfo) => {
  const res = await axios.put(`http://localhost:4000/api/contacts/${id}`, newInfo);
  return res;
};

export default editContactDetails;
