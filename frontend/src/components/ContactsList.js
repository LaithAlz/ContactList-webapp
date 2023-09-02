import { useEffect, useState } from "react";
import getContact from "../api/getContacts";
import "../styles/contactList.css";
import { Link } from "react-router-dom";
// import uuid from "uuid";

const ContactsList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const all = await getContact();
      setContacts(all.data);
    };

    fetchContacts();
  }, []);

  return (
    <div className="contacts-list">
      <h2 className="contacts-list__title">Contacts List</h2>
      <ul className="contacts-list__ul">
        {contacts.map((contact) => (
          <Link key={contact._id} to={`/contacts/${contact.id}`}>
            <li className="contacts-list__item">
              {contact.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
