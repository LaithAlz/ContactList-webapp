import { useState } from "react";
import postContact from "../api/postContact";
import { useNavigate } from "react-router-dom";

const AddContactForm = () => {
  const navigate = useNavigate();

  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    id: "",
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const val = e.target.value;

    setContactData((prevData) => ({
      ...prevData,
      [name]: val,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await postContact(contactData);
    navigate(`/contact/${res.data.id}`);
    if (res) {
      setContactData({
        name: "",
        email: "",
        phone: "",
        id: "",
      });
    }
  };

  return (
    <form
      className="add-contact__form"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className="add-contact__form-group">
        <label className="add-contact__label" htmlFor="name">
          Name
        </label>
        <input
          className="add-contact__input"
          type="text"
          name="name"
          value={contactData.name}
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
      </div>

      <div className="add-contact__form-group">
        <label className="add-contact__label" htmlFor="email">
          Email
        </label>
        <input
          className="add-contact__input"
          type="email"
          name="email"
          value={contactData.email}
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
      </div>

      <div className="add-contact__form-group">
        <label className="add-contact__label" htmlFor="phone">
          telephone Number
        </label>
        <input
          className="add-contact__input"
          type="tel"
          maxLength="10"
          name="phone"
          value={contactData.phone}
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
      </div>

      <div className="add-contact__button-container">
        <button className="add-contact__button">Add Contact</button>
      </div>
    </form>
  );
};

export default AddContactForm;
