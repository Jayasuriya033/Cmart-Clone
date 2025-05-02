import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  secure: true,
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: process.env.EMAIL || "gjayasuriya035@gmail.com",
    pass: process.env.PASSWORD || "ytdxlfeftumgizfx",
  },
});

const sendOtpToEmail = async (email, otp) => {
  const mailOptions = {
    from: process.env.EMAIL || "gjayasuriya035@gmail.com",
    to: email,
    subject: `Your OTP Code`,
    text: `Your account has been created successfully.\n\Email: ${email}\n\OTP: ${otp}\n\nPlease keep this information secure.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Signup email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
export default sendOtpToEmail;

