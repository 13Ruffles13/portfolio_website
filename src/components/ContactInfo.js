import React from "react";
import emailjs from "emailjs-com";

const ContactInfo = () => {
  //Email-Backend API
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm('service_drwq32n', 'template_qygu9o2', e.target, 'xmsl3nYWUri2ywfYO')
      .then(
        (result) => {
          console.log(result.text);//If TRUE
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
  } //email-Backend Function
  return (
    <div>
      <div className="container">
        <form onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
              ></input>
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="user_email"
                required
              ></input>
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
              ></input>
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <textarea
                className="form-control"
                id=""
                cols="30"
                rows="8"
                placeholder="Your message"
                name="message"
              ></textarea>
            </div>
            <div className="col-8 pt-3 mx-auto">
              <input
                type="submit"
                className="btn btn-info"
                value="Send Message"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
};

export default ContactInfo;
