import express from 'express'
import { PrismaClient } from '@prisma/client'
import { generateUserName } from './genereateUserName.js';

const router = express.Router();
const prisma = new PrismaClient();

router.post("/suggest-username", async(req,res) =>{
    const {firstName, lastName} = req.body;
    if (!firstName, !lastName) {
        res.status(400).json({message: "First Name and Last Name required!"})
    }
    let count = 0;
    var userNames = [];

    while(count < 3){
       let userName =  generateUserName(firstName,lastName);
        const exists = await prisma.user.findUnique({ where: { userName } });
        if (exists ) break;
        else if (userNames.includes(userName)) break;
        else{
        userNames.push(userName)
        count++;
    }}
    return res.json({status: true, data: userNames})

})
export default router;