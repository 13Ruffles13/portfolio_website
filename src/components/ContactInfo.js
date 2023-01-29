import React from "react";

const ContactInfo = () => {
  return (
    <div id="contactMe">
      <label for="exampleFormControlInput1" class="form-label">
        Email address
      </label>
      <input
        type="email"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="name@yourEmail.com"
      />
      <div id="emailText">
        <label for="exampleFormControlTextarea1" class="form-label">
          Questions / Inquires
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
        <button class="btn btn-primary" type="submit">Button</button>
      </div>
    </div>
  );
};

export default ContactInfo;
