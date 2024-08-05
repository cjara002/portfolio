import React, { useState } from "react";
import "./ContactStyle.css";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    firstName: " ",
    lastName: " ",
    email: " ",
    phone: " ",
    message: " ",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeURI({ "form-name": "contact", ...formState }),
    })
      .then(() => console.log("Success!"))
      .catch((error) => alert(error));
    // e.preventDefault();
    navigate("/success");
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <React.Fragment>
      <div
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`,
          backgroundPosition: "center",
        }}
        id="contactBorder"
      >
        <div className="row block-center mt-4 " id="formBorder">
          <div className="col">
            <div className="card-default card " id="formContainer">
              <div className="card-body">
                <h1 className="formHeader"> Request a free quote</h1>
                <p className="formp">
                  If you need a website built, please feel free to contact
                  me. I am always interested in helping out a fellow
                  developer as well. <br /> Hablo Español.
                </p>
                <form
                  method="POST"
                  name="contact"
                  action="/success/"
                  id="formContact"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                >
                  <div className="row gtr-50">
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="col-6 col-12">
                      <label className="formName"> Name</label>
                      <input
                        required
                        type="text"
                        className="form-control-rounded form-control"
                        name="name"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="row gtr-50">
                    <div className="col-lg-6 col-sm-12">
                      <label className="formEmail">Email</label>
                      <input
                        required
                        type="email"
                        className="form-control-rounded form-control"
                        name="email"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <label className="formNumber">Phone</label>
                      <input
                        required
                        type="text"
                        className="form-control-rounded form-control"
                        name="phone"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="position-relative form-group">
                    <label className="formMessage">Message</label>
                    <textarea
                      required
                      name="message"
                      defaultValue={""}
                      className="form-control form-control"
                      onChange={handleChange}
                    />
                  </div>

                  <Button className="btn btn-secondary" type="submit">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactForm;