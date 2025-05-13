import express from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const router = express.Router();
const prisma = new PrismaClient();

router.post("/", async (req, res) => {
  const { firstName, lastName, userName, email, phoneNo, password } = req.body;

  if (!firstName || !lastName || !userName || !email || !phoneNo || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }
  const userExist = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (userExist) {
    if (userExist.email === email) {
      return res
        .status(400)
        .json({ status: false, message: "Email already in use." });
    }
  }

  let hashedPassword = null;
  try {
    if (password) {
      hashedPassword = await bcrypt.hash(password, 10);
    } else {
      res.status(400).json("Password Required!");
    }

    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        userName,
        email,
        phoneNo,
        password: hashedPassword,
      },
    });
    res.status(201).json({ status: true, message: "Signup Successfully" });
  } catch (error) {
    console.error("Error creating signup:", error);
    res.status(400).json({ message: "Server Error", error: error.message });
  }
});
export default router;
