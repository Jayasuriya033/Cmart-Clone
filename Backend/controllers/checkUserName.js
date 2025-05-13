import express from "express";
import { PrismaClient } from "@prisma/client";
const router = express.Router();
const prisma = new PrismaClient();

router.post("/check-username", async (req, res) => {
  const { userName } = req.body;
  if (!userName) {
    res.status(400).json({ message: "User Name required!" });
  }
  const existing = await prisma.user.findUnique({ where: { userName : userName} });
  if (!existing) res.json({ status: true, message: "Available!" });
  else res.json({ status: false, message: "Username already Taken!" });
});

export default router;
