// import express from 'express';
// import { PrismaClient } from '@prisma/client';

// const router = express.Router();
// const prisma = new PrismaClient();

// router.use(express.json());

// router.get('/', async (req, res) => {
//   try {
//     const superAdmins = await prisma.superAdmin.findMany();
//     res.json(superAdmins);
//   } catch (error) {
//     console.error('Error retrieving super admins:', error);
//     res.status(500).json({ error: 'Could not retrieve super admins' });
//   }
// });

// router.get('/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const superAdmin = await prisma.superAdmin.findUnique({
//       where: { id: parseInt(id) },
//     });
//     if (!superAdmin) {
//       return res.status(404).json({ error: 'Super admin not found' });
//     }
//     res.json(superAdmin);
//   } catch (error) {
//     console.error('Error retrieving super admin:', error);
//     res.status(500).json({ error: 'Could not retrieve super admin' });
//   }
// });

// router.post('/', async (req, res) => {
//   const { fullName, email, phoneNumber, username, password } = req.body;
//   try {
//     const newSuperAdmin = await prisma.superAdmin.create({
//       data: {
//         fullName,
//         email,
//         phoneNumber,
//         username,
//         password,
//       },
//     });
//     res.status(201).json(newSuperAdmin);
//   } catch (error) {
//     console.error('Error creating super admin:', error);
//     res.status(500).json({ error: 'Could not create super admin' });
//   }
// });

// router.put('/:id', async (req, res) => {
//   const { id } = req.params;
//   const { fullName, email, phoneNumber, username, password } = req.body;
//   try {
//     const updatedSuperAdmin = await prisma.superAdmin.update({
//       where: { id: parseInt(id) },
//       data: {
//         fullName,
//         email,
//         phoneNumber,
//         username,
//         password,
//       },
//     });
//     res.json(updatedSuperAdmin);
//   } catch (error) {
//     console.error('Error updating super admin:', error);
//     res.status(500).json({ error: 'Could not update super admin' });
//   }
// });

// router.delete('/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     await prisma.superAdmin.delete({
//       where: { id: parseInt(id) },
//     });
//     res.json({ message: 'Super admin deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting super admin:', error);
//     res.status(500).json({ error: 'Could not delete super admin' });
//   }
// });

// export { router as superadminRouter };
 