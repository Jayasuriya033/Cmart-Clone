import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import express from "express";

const router = express.Router();

router.get("/", async(req, res) => {
  try {
    const publications = await prisma.publication.findMany();
    const campaigns = await prisma.campaign.findMany();

    res.status(200).json({
      status: true,
      message: 'All publications and campaigns fetched successfully.',
      publications,
      campaigns
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
}
)
export default router;
