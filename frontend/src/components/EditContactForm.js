import { useEffect, useState } from "react";
import postContact from "../api/postContact";
import { useNavigate, useParams } from "react-router-dom";
import getContactDetails from "../api/getContactDetails";
import editContactDetails from "../api/editContactDetails";

const EditContactForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    id: "",
  });

  useEffect(() => {
    const getData = async (id) => {
      const { data } = await getContactDetails(id);
      setContactData({
        name: data.name,
        email: data.email,
        phone: data.phone,
        id: id,
      });
    };
    getData(id);
  }, [id]);

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

    await editContactDetails(id, contactData);
    navigate(`/contacts/${id}`);
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
        <button className="add-contact__button">Save Contact</button>
      </div>
    </form>
  );
};

export default EditContactForm;
