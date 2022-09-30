import React from "react";
import Connect from "./Connect";
import { motion, useSpring } from "framer-motion/dist/framer-motion";

import "./Contact.css";
import ContactForm from "./ContactForm";

const Contact = () => {
  const transition = {
    duration: 1,
    type: useSpring,
  };
  return (
    <div className="contact-section" id="contact">
      <div className="container">
        <div className="contact">
          <motion.div
            whileInView={{ opacity: 1 }}
            transition={transition}
            initial={{ opacity: 0 }}
            className="connect-with-me"
          >
            <Connect />
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1 }}
            transition={transition}
            initial={{ opacity: 0 }}
            className="contact-form"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
