import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.post("/", async (req, res) => {
  try {
    const { status, code, type, description, universalFlag, tableName } =
      req.body;
    const exist = await prisma.component.findUnique({
      where: { code },
    });
    if (exist) {
      return res.status(409).json({ message: "Code Already Exist" });
    }

    const domain = await prisma[tableName].create({
      data: {
        status,
        code,
        type,
        description,
        universalFlag,
      },
    });
    return res.status(201).json(domain);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.post("/getDatas", async (req, res) => {
  const { tableName } = req.body;
  try {
    const domains = await prisma[tableName].findMany({
      where: { deletedAt: null },
    });
    return res.status(200).json(domains);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { tableName } = req.body;
    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }
    const { status, code, type, description, universalFlag } = req.body;

    const updated = await prisma[tableName].update({
      where: { id },
      data: {
        status,
        code,
        type,
        description,
        universalFlag,
      },
    });

    return res.status(200).json(updated);
  } catch (error) {
    console.error("Update error:", error);
    return res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  if (!id || isNaN(parseInt(id))) {
    return res.status(400).json({ error: "Invalid domain ID" });
  }

  try {
    const existingDomain = await prisma[tableName].findUnique({
      where: { id: parseInt(id) },
    });

    if (!existingDomain) {
      return res.status(404).json({ error: "Domain not found" });
    }

    if (existingDomain.deletedAt) {
      return res.status(400).json({ error: "Domain is already deleted" });
    }
    const deletedDomain = await prisma[tableName].update({
      where: { id: parseInt(id) },
      data: { deletedAt: new Date() },
    });

    return res
      .status(200)
      .json({
        message: "Domain soft-deleted successfully",
        domain: deletedDomain,
      });
  } catch (error) {
    console.error("Delete domain error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
