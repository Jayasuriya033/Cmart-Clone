import express from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { otpGenerate } from "./otp.js";

const router = express.Router();
const prisma = new PrismaClient();

router.post("/", async (req, res) => {
  const { credential } = req.body;  
  const { value, password } = req.body;
  if (!value || !password) {
    return res.status(400).json({ error: "Email or Username and Password are required" });
  }


  try {
    const user = await prisma.user.findFirst({
    where:{
      OR : [ { email : value}, { userName: value },]
    }
    });

    if (!user) {
      return res.status(404).json({ error: "User Not Found, Please Signup." });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Password does not match" });
    }
    otpGenerate(user);
    res.json({
      status: true,
      email : user.email,
      message: `Login OTP Sent Successfully to "${user.email}" `,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

export default router;
