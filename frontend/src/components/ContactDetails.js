import { Link, useNavigate, useParams } from "react-router-dom";
import "../styles/contactDetails.css"; // Import your CSS stylesheet
import { useEffect, useState } from "react";
import getContactDetails from "../api/getContactDetails";
import deleteContact from "../api/deleteContact";

const ContactDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const getDetails = async (id) => {
      const { data } = await getContactDetails(id);
      setDetails({ name: data.name, email: data.email, phone: data.phone });
    };
    getDetails(id);
  }, []);

  const handleDelete = () => {
    const callDelete = async (id) => {
      const res = await deleteContact(id);
    };
    callDelete(id);
    navigate("/");
  };

  return (
    <div className="contact-details">
      <h2>Contact Details</h2>
      <div className="contact-info">
        <p>Name: {details.name}</p>
        <p>Email: {details.email}</p>
        <p>Phone: {details.phone}</p>
      </div>
      <div className="actions">
        <Link to={`/edit/${id}`} className="edit-button">
          Edit
        </Link>
        {/* <Link to={`/delete/${id}`} className="delete-button"> */}
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default ContactDetails;
