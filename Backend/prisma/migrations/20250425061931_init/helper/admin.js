// import express from 'express';
// import { PrismaClient } from '@prisma/client';

// const router = express.Router();
// const prisma = new PrismaClient();

// // Middleware for parsing JSON bodies
// router.use(express.json());

// // GET all city admins
// router.get('/', async (req, res) => {
//   try {
//     const cityAdmins = await prisma.cityAdmin.findMany();
//     res.json(cityAdmins);
//   } catch (error) {
//     console.error('Error retrieving city admins:', error);
//     res.status(500).json({ error: 'Could not retrieve city admins' });
//   }
// });

// // GET a specific city admin by ID
// router.get('/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const cityAdmin = await prisma.cityAdmin.findUnique({
//       where: { adminId: parseInt(id) },
//     });
//     if (!cityAdmin) {
//       return res.status(404).json({ error: 'City admin not found' });
//     }
//     res.json(cityAdmin);
//   } catch (error) {
//     console.error('Error retrieving city admin:', error);
//     res.status(500).json({ error: 'Could not retrieve city admin' });
//   }
// });

// // POST create a new city admin
// router.post('/', async (req, res) => {
//   const {
//     fullName,
//     phoneNumber,
//     email,
//     officeAddress,
//     dateOfBirth,
//     managingCity,
//     noOfBranch,
//     noOfEmployees,
//     dateOfAppointment,
//     username,
//     password,
//   } = req.body;
//   try {
//     const newCityAdmin = await prisma.cityAdmin.create({
//       data: {
//         fullName,
//         phoneNumber,
//         email,
//         officeAddress,
//         dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : undefined,
//         managingCity,
//         noOfBranch,
//         noOfEmployees,
//         dateOfAppointment: new Date(dateOfAppointment),
//         username,
//         password,
//       },
//     });
//     res.status(201).json(newCityAdmin);
//   } catch (error) {
//     console.error('Error creating city admin:', error);
//     res.status(500).json({ error: 'Could not create city admin' });
//   }
// });

// // PUT update an existing city admin
// router.put('/:id', async (req, res) => {
//   const { id } = req.params;
//   const {
//     fullName,
//     phoneNumber,
//     email,
//     officeAddress,
//     dateOfBirth,
//     managingCity,
//     noOfBranch,
//     noOfEmployees,
//     dateOfAppointment,
//     username,
//     password,
//   } = req.body;
//   try {
//     const updatedCityAdmin = await prisma.cityAdmin.update({
//       where: { adminId: parseInt(id) },
//       data: {
//         fullName,
//         phoneNumber,
//         email,
//         officeAddress,
//         dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : undefined,
//         managingCity,
//         noOfBranch,
//         noOfEmployees,
//         dateOfAppointment: new Date(dateOfAppointment),
//         username,
//         password,
//       },
//     });
//     res.json(updatedCityAdmin);
//   } catch (error) {
//     console.error('Error updating city admin:', error);
//     res.status(500).json({ error: 'Could not update city admin' });
//   }
// });

// // DELETE delete an existing city admin
// router.delete('/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     await prisma.cityAdmin.delete({
//       where: { adminId: parseInt(id) },
//     });
//     res.json({ message: 'City admin deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting city admin:', error);
//     res.status(500).json({ error: 'Could not delete city admin' });
//   }
// });

// export { router as adminRouters};
