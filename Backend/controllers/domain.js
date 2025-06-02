import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.post("/", async (req, res) => {
  try {
    const { status, code, type, description, universalFlag } = req.body;

    const domain = await prisma.domain.create({
      data: {
        status,
        code,
        type,
        description,
        universalFlag,
      },
    });

    res.status(201).json(domain);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



router.get("/", async (_req, res) => {
  try {
    const domains = await prisma.domain.findMany({
      where: { deletedAt: null },
    });
    res.status(200).json(domains);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    console.log("Received ID:", req.params.id);
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }
    const { status, code, type, description, universalFlag } = req.body;

    const updated = await prisma.domain.update({
      where: { id },
      data: {
        status,
        code,
        type,
        description,
        universalFlag,
      },
    });

    res.status(200).json(updated);
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  if (!id || isNaN(parseInt(id))) {
    return res.status(400).json({ error: 'Invalid domain ID' });
  }

  try {
    const existingDomain = await prisma.domain.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existingDomain) {
      return res.status(404).json({ error: 'Domain not found' });
    }

    if (existingDomain.deletedAt) {
      return res.status(400).json({ error: 'Domain is already deleted' });
    }
    const deletedDomain = await prisma.domain.update({
      where: { id: parseInt(id) },
      data: { deletedAt: new Date() },
    });

    return res.status(200).json({ message: 'Domain soft-deleted successfully', domain: deletedDomain });
  } catch (error) {
    console.error('Delete domain error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});


export default router;
