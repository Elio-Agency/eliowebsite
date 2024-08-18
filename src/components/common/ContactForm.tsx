"use client";

import React, { useState, useEffect } from "react";

export default function ContactForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    surname: "",
    email: "",
    department: "",
    message: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Check if all fields are filled
    const isValid =
      formValues.name?.trim() &&
      formValues.surname?.trim() &&
      formValues.email?.trim() &&
      formValues.department?.trim() &&
      formValues.message?.trim();
    setIsFormValid(!!isValid);
  }, [formValues]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="contact-form needs-validation" method="post">
      <div className="messages"></div>
      <div className="row gx-4">
        <div className="col-md-6">
          <div className="form-floating mb-4">
            <input
              required
              type="text"
              name="name"
              id="form_name"
              placeholder="Jane"
              className="form-control"
              value={formValues.name}
              onChange={handleChange}
            />
            <label htmlFor="form_name">First Name *</label>
            <div className="valid-feedback"> Looks good! </div>
            <div className="invalid-feedback">
              {" "}
              Please enter your first name.{" "}
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-floating mb-4">
            <input
              required
              type="text"
              name="surname"
              placeholder="Doe"
              id="form_lastname"
              className="form-control"
              value={formValues.surname}
              onChange={handleChange}
            />
            <label htmlFor="form_lastname">Last Name *</label>
            <div className="valid-feedback"> Looks good! </div>
            <div className="invalid-feedback">
              {" "}
              Please enter your last name.{" "}
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-floating mb-4">
            <input
              required
              type="email"
              name="email"
              id="form_email"
              className="form-control"
              placeholder="jane.doe@example.com"
              value={formValues.email}
              onChange={handleChange}
            />
            <label htmlFor="form_email">Email *</label>
            <div className="valid-feedback"> Looks good! </div>
            <div className="invalid-feedback">
              {" "}
              Please provide a valid email address.{" "}
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-select-wrapper mb-4">
            <select
              className="form-select"
              id="form-select"
              name="department"
              required
              value={formValues.department}
              onChange={handleChange}
            >
              <option disabled value="">
                Select a service
              </option>
              <option value="Marketing">Marketing</option>
              <option value="Website">Website</option>
              <option value="App Development">App Development</option>
              <option value="Data">Data</option>
            </select>

            <div className="valid-feedback"> Looks good! </div>
            <div className="invalid-feedback">
              {" "}
              Please select a department.{" "}
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="form-floating mb-4">
            <textarea
              required
              name="message"
              id="form_message"
              className="form-control"
              placeholder="Your message"
              style={{ height: 150 }}
              value={formValues.message}
              onChange={handleChange}
            />
            <label htmlFor="form_message">Message *</label>
            <div className="valid-feedback"> Looks good! </div>
            <div className="invalid-feedback">
              {" "}
              Please enter your messsage.{" "}
            </div>
          </div>
        </div>

        <div className="col-12 text-center">
          <input
            type="submit"
            value="Send message"
            className="btn btn-primary rounded-pill btn-send mb-3"
            disabled={!isFormValid} // Disable button if form is not valid
          />
          <p className="text-muted">
            <strong>*</strong> These fields are required.
          </p>
        </div>
      </div>
    </form>
  );
}