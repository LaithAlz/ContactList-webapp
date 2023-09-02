import EditContactForm from "./EditContactForm";

const EditContactDetails = () => {
  return (
    <div className="contact-details">
      <h2>Contact Details</h2>
      <div className="contact-info">
        <EditContactForm />
      </div>
      {/* <div className="actions">
        <Link to={`/edit/${id}`} className="edit-button">
          Edit
        </Link>
      </div> */}
    </div>
  );
};

export default EditContactDetails;
