const sendEmail = require("./sendEmail");
const sendVerifycationEmail = async ({
  name,
  email,
  verificationToken,
  origin,
}) => {
  const verifyEmail = `${origin}/user/verify-email?token=${verificationToken}&email=${email}`;
  const msg = `<p>Hello there please comfirm your email <a href=${verifyEmail}>Verify email</a></p>`;
  return sendEmail({
    to: email,
    subject: "Email Confirmation",
    html: msg,
  });
};
module.exports = sendVerifycationEmail;
