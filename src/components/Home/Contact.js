import React, { useState } from "react";
import contact_logo from "../../Assets/contact-img.svg";
import { Container, Row, Col } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import successIcon from "../../Assets/success-icon.svg";
import Popup from "reactjs-popup";
import emailjs from "emailjs-com";
import validationSchema from "./validation";
const apiKey = process.env.REACT_APP_API_KEY;
const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };
  const submitHandler = (values, { setSubmitting, resetForm }) => {
    emailjs.send("service_s3blm1s", "template_m53af7h", values, apiKey).then(
      (result) => {
        console.log(result.text);
        setShowPopup(true);
        setSubmitting(false);
        resetForm();
        setTimeout(() => {
          setShowPopup(false);
        }, 2000);
      },
      (error) => {
        console.log(error.text);
        setSubmitting(false);
      }
    );
  };
  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="contact-section">
          <Popup
            open={showPopup}
            modal
            trigger={null}
            closeOnDocumentClick
            className="popup-conten"
          >
            <img src={successIcon} alt="Success" className="success-icon" />
            <h2>Awsome</h2>
            <p>
              Your email has been sent{" "}
              <span role="img" aria-label="roket fire here">
                {" "}
                🚀
              </span>
            </p>
          </Popup>
          <Col md={5}>
            <img src={contact_logo} alt="Contact_logo" className="img-fluid" />
          </Col>
          <Col md={6}>
            <h2 className="main-name">Get In Touch</h2>
            <Formik
              initialValues={initialFormState}
              validationSchema={validationSchema}
              onSubmit={submitHandler}
            >
              {({ isSubmitting, isValid, errors, touched }) => (
                <Form>
                  <Row>
                    <div className="name-content">
                      <Field
                        type="text"
                        name="firstName"
                        className="input-Contact"
                        placeholder="First Name"
                      />{" "}
                      <Field
                        type="text"
                        name="lastName"
                        className="input-Contact"
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="email-textarea">
                      {" "}
                      <Field
                        type="email"
                        name="email"
                        className={`  input-Contact ${
                          errors.email && touched.email ? "is-invalid" : ""
                        } `}
                        placeholder="Email"
                      />
                      <div className="error">
                        <ErrorMessage name="email" />
                      </div>
                      <Field
                        as="textarea"
                        name="message"
                        id="message"
                        rows="10"
                        className={` text_area ${
                          errors.message && touched.message ? "is-invalid" : ""
                        } `}
                        placeholder="Message"
                      />
                      <div className="error">
                        <ErrorMessage name="message" className="error" />
                      </div>
                      <button
                        type="submit"
                        disabled={
                          isSubmitting ||
                          !isValid ||
                          (!touched.email && !touched.message)
                        }
                      >
                        Submit
                      </button>
                    </div>
                  </Row>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
