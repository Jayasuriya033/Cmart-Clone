import express from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';


const router = express.Router();
const prisma = new PrismaClient();


router.post('/', async (req, res) => {
    const { email, newPassword } = req.body;
    if (!email || !newPassword) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    try {
      const user = await prisma.user.findUnique({
        where: { email},
      });
  
      if (!user) {
        return res.status(401).json({ error: 'Invalid Email' });
      }
  
      const hashedPassword = await bcrypt.hash(newPassword, 10);
  
      await prisma.user.update({
        where: {email },
        data: { password: hashedPassword },
      });
  
      return res.json({ status: true, message: "Password updated successfully" });
    } catch (error) {
      console.error('Error in updating password:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });   
  
export default router;