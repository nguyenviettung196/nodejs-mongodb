const nodemailer = require('nodemailer');

const sendEmail = async options => {
  // 1) Create a transpoter
  const transpoter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });
  // 2) Define the mail options
  const mailOptions = {
    from: 'Tungdeptrai <testsend@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message
  };
  // 3) Actually send the email
  await transpoter.sendMail(mailOptions);
};

module.exports = sendEmail;
