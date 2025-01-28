import express from "express";
import {Customer} from "../model/Customer";
import {CustomerAdd} from "../database/prisma-data-store";

const router = express.Router();

router.post('/add',async (req,res,next)=>{
    console.log(req.body);

    const customer: Customer= req.body;
    try{
        const addedCustomer = await CustomerAdd(customer);
        res.send('Customer Added')
    }catch(err){
        console.log("error adding customer", err);
        res.status(400).send("error adding customer");
    }

})

router.get('/view',async (req,res,next)=>{
    res.send("view customer");

})

export default router;