import express from "express";
import jwt from "jsonwebtoken";
const router = express.Router();
import sendOtpToEmail from "../utility/email.js";
import { PrismaClient } from "@prisma/client";

const JWT_SECRET = process.env.JWT_SECRET || "123";

const prisma = new PrismaClient();

const otpStore = {};
export const otpGenerate = async (user) => {
  let otp = Math.floor(100000 + Math.random() * 900000);  
  otpStore[user.email] = otp;
  otpStore.user = { id: user.id, email: user.email };
  await sendOtpToEmail(user.email, otp);
  return;
};

router.post("/verify-otp", (req, res) => {
  const { email, enteredOtp, type } = req.body;
  if ((!email, !enteredOtp, !type)) {
    return res.status(400).json({ error: "Email and OTP are required" });
  }
  const storedOtp = otpStore[email];

  if (type == "login") {
    var token = jwt.sign(
      { id: otpStore.user.id, email: otpStore.user.email },
      JWT_SECRET,
      {
        expiresIn: '1m'
      }
    );
  } else var token = null;
  if (enteredOtp == storedOtp) {
    delete otpStore[email];
    return res.json({
      status: true,
      token: token,
      message: "OTP Verified Successfully",
    });
  } else {
    return res.status(401).json({
      status: false,
      message: "Invalid OTP",
    });
  }
});
router.post("/verify-email", async (req, res) => {
  const { email, status } = req.body;

  if ((!email, !status)) {
    return res.status(400).json({ error: "Email required" });
  }
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (user && status == "signup") {
      return res.status(400).json({ error: "Email Already Exist" });
    }
    else if(!user && status == "forgot-password"){
      return res.status(404).json({ error: "Email Not Found, Please Signup." });
    }

    var userdata = {
      id: null,
      email: email,
    };
    otpGenerate(userdata);
    return res.json({
      status: true,
      message: "OTP Sent Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});
export default router;



