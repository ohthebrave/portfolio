const express = require("express");
const cors = require("cors");
const router = express.Router();
const nodemailer = require("nodemailer");

// server used to send emails
const app = express();
const port = 8000;

// Middleware for enabling CORS
app.use(cors());
app.use(express.json());
app.use("/", router);

// Your other Express configurations and routes go here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASSWORD);

// setup away to send email
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "georgejoj28@gmail.com",
    pass: "drivercrazy",
  },
});

//verify if its running
contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

// endpoint in express app to handle email sending 
router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  const mailOptions = {
    from: name,
    to: "georgejoj28@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mailOptions, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
