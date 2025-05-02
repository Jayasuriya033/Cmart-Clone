// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();

// async function main() {
//   // Create a new user
//   const user = await prisma.user.create({
//     data: {
//       fullName: 'John Doe',
//       email: 'john.doe@example.com',
//       phoneNumber: '1234567890',
//       username: 'johndoe',
//       password: 'securepassword',
//       role: 'Admin'
//     },
//   });
//   console.log(user);
// }

// main()
//   .catch((e) => {
//     throw e;
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
