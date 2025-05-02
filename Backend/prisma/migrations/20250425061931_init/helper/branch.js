// import express from 'express';
// import { PrismaClient } from '@prisma/client';

// const router = express.Router();
// const prisma = new PrismaClient();

// router.use(express.json());

// router.get('/', async (req, res) => {
//   try {
//     const branches = await prisma.branch.findMany();
//     res.json(branches);
//   } catch (error) {
//     console.error('Error retrieving branches:', error);
//     res.status(500).json({ error: 'Could not retrieve branches' });
//   }
// });


// router.get('/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const branch = await prisma.branch.findUnique({
//       where: { branchId: parseInt(id) },
//     });
//     if (!branch) {
//       return res.status(404).json({ error: 'Branch not found' });
//     }
//     res.json(branch);
//   } catch (error) {
//     console.error('Error retrieving branch:', error);
//     res.status(500).json({ error: 'Could not retrieve branch' });
//   }
// });


// router.post('/', async (req, res) => {
//   const {
//     name,
//     city,
//     address,
//     phoneNumber,
//     email,
//     noOfEmployees,
//   } = req.body;
//   try {
//     const newBranch = await prisma.branch.create({
//       data: {
//         name,
//         city,
//         address,
//         phoneNumber,
//         email,
//         noOfEmployees,
//       },
//     });
//     res.status(201).json(newBranch);
//   } catch (error) {
//     console.error('Error creating branch:', error);
//     res.status(500).json({ error: 'Could not create branch' });
//   }
// });


// router.put('/:id', async (req, res) => {
//   const { id } = req.params;
//   const {
//     name,
//     city,
//     address,
//     phoneNumber,
//     email,
//     noOfEmployees,
//   } = req.body;
//   try {
//     const updatedBranch = await prisma.branch.update({
//       where: { branchId: parseInt(id) },
//       data: {
//         name,
//         city,
//         address,
//         phoneNumber,
//         email,
//         noOfEmployees,
//       },
//     });
//     res.json(updatedBranch);
//   } catch (error) {
//     console.error('Error updating branch:', error);
//     res.status(500).json({ error: 'Could not update branch' });
//   }
// });

// router.delete('/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     await prisma.branch.delete({
//       where: { branchId: parseInt(id) },
//     });
//     res.json({ message: 'Branch deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting branch:', error);
//     res.status(500).json({ error: 'Could not delete branch' });
//   }
// });

// export  {router as branchRouter};
