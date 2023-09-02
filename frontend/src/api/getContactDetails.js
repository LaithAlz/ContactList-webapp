import axios from "axios";

const getContactDetails = (id) => {
  const res = axios.get(`http://localhost:4000/api/contacts/${id}`);
  return res;
};

export default getContactDetails;
