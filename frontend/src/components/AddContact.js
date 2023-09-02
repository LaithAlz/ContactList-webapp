import "../styles/addContact.css";
import AddContactForm from "./AddContactForm";

const AddContact = () => {
  return (
    <div className="add-contact">
      <h1 className="add-contact__title">Add Contact</h1>
      <AddContactForm  />
    </div>
  );
};

export default AddContact;
