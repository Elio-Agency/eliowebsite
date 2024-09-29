import React from "react";
import ReactDOM from "react-dom";

interface ContactModalProps {
  email: string;
  phone: string;
}

const ContactModal: React.FC<ContactModalProps> = ({ email, phone }) => {
  return ReactDOM.createPortal(
    <div
      className="modal fade"
      id="contactModal"
      tabIndex={-1}
      aria-labelledby="contactModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content cursor-pointer">
          <div className="modal-header">
            <h5 className="modal-title" id="contactModalLabel">
              Contact Details
            </h5>
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
              style={{
                background: "none",
                border: "none",
                fontSize: "1.5rem",
                opacity: 1,
              }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body text-center">
            <p>
              <a
                href={`mailto:${email}`}
                className="text-primary fw-bold text-decoration-none"
              >
                Email: {email}
              </a>
            </p>
            <p>
              <a
                href={`tel:${phone}`}
                className="text-primary fw-bold text-decoration-none"
              >
                Phone: {phone}
              </a>
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body // Append the modal to the body
  );
};

export default ContactModal;
