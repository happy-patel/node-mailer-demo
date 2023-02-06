require('dotenv').config();

const nodemailer = require('nodemailer');

// --------------  Sending Email with Mailtrap  -------------------
// let transport = nodemailer.createTransport({
//   host: 'smtp.mailtrap.io',
//   port: 2525,
//   auth: {
//      user: process.env.EMAIL_USERNAME,
//      pass: process.env.EMAIL_PASSWORD
//   }
// });

// --------------  Sending Email with Gmail  -------------------
let transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Sending a Text Email
// const mailOptions = {
//   from: 'happypatel95370@gmail.com', // Sender address
//   to: 'happypatel95370@gmail.com',  // List of recipients
//   subject: 'Node Mailer', // Subject line
//   text: 'Hello People!, This is the NodeMailer Example with Plain Text.', // Plain text body
// };

// Sending an HTML Email with Attachment
const mailOptions = {
  from: 'happypatel95370@gmail.com', // Sender address
  to: 'happypatel95370@gmail.com',  // List of recipients
  subject: 'Node Mailer', // Subject line
  html: '<h1 style="color:#ff6600;">Hello People!, This is the NodeMailer Example with HTML and Attachment!</h1>',
  attachments: [
    { filename: 'profile.png', path: './images/profile.png' }
  ]
};

transport.sendMail(mailOptions, function(err, info) {
  if (err) {
    console.log(err)
  } else {
    console.log(info);
  }
});
