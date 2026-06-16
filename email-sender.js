// Task 5: Email Sender using nodemailer
// npm install nodemailer
// PS: Personal info removed before uploading to GitHub
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'YOUR_EMAIL@gmail.com',      // replace with your email
    pass: 'YOUR_APP_PASSWORD'          // replace with your Gmail App Password
  }
});

const mailOptions = {
  from: 'YOUR_EMAIL@gmail.com',
  to: 'YOUR_EMAIL@gmail.com',         // sending to yourself
  subject: 'Hello from Node.js!',
  text: 'This email was sent using Node.js and nodemailer.'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});