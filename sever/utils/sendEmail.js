const nodemailer = require("nodemailer");
const nodemailerConfig = require("./nodemailerConfig");
// const sg = require("@sendgrid/mail");
const sendEmail = async ({ to, subject, html }) => {
  const transporter = nodemailer.createTransport(nodemailerConfig);
  const info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to,
    subject,
    html,
  });
};
module.exports = sendEmail;

