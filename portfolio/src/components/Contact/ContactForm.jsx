import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const initValue = { username: "", email: "", message: "" };
  const form = useRef();
  const [isSubmited, setIsSubmited] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formValues, setFormValues] = useState(initValue);

  // const [isValid, setIsValid] = useState();
  // const [hasError, setHasError] = useState();
  // setFromErrors(validate(formValues));
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_htgmbuw",
        "template_8q7i7xg",
        form.current,
        "hTzHqrfXxBfu1b0M1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmited(true);
      setFormValues(initValue);
    }, 2000);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };
  // const validate = (values) => {
  //   const errors = {};
  //   const regex =
  //     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //   if (!values.name) {
  //     errors.name = "name is required!";
  //   }
  //   if (!values.email) {
  //     errors.email = "email is required!";
  //   } else if (!regex.test(values.email)) {
  //     errors.email = "this is email invalid!";
  //   }
  //   if (!values.message) {
  //     errors.message = "message is required!";
  //   }
  //   return errors;
  // };

  // if (Object.keys(formErrors).length === 0 && isSubmit) {
  // }

  return (
    <>
      <h3 className="form-title">Contact me, let’s make magic together</h3>
      <form ref={form} className="form" onSubmit={sendEmail}>
        <input
          type="text"
          className="name"
          placeholder="Name:"
          name="name"
          value={formValues.name}
          onChange={changeHandler}
          required
        />

        <input
          type="email"
          className="email"
          placeholder="Email:"
          name="email"
          value={formValues.email}
          onChange={changeHandler}
          // required
        />

        <textarea
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
          name="message"
          value={formValues.message}
          onChange={changeHandler}
          required
        ></textarea>
        {isSubmited ? (
          <p className="success-message-contact">
            Your message has been successfully sent.
          </p>
        ) : (
          <button className="btn btn-form">
            {isLoading ? "Sending.." : "Send"}
          </button>
        )}
      </form>
    </>
  );
};

export default ContactForm;
