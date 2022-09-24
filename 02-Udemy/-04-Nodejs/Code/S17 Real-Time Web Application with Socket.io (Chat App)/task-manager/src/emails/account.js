const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const sendgridAPIKey = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "youssefahmedpvp@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  });
};

// Goal: Send email to user on cancelation

// 1. Setup a new function for sending an email on cancelation
//   - email and name as args
// 2. Include their name in the email and ask why they cance led
// 3. Call it just after the account is removed
// 4. Run the request and check your inbox!

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "youssefahmedpvp@gmail.com",
    subject: "why you cancel",
    text: `hello ${name}, can tell us why u cancel`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};
