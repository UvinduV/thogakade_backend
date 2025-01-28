import express from "express";
import {Customer} from "../model/Customer";
import {CustomerAdd, getAllCustomers} from "../database/prisma-data-store";

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

    try{
        const customers=  await getAllCustomers();
        res.json(customers);
    }catch(err){
        console.log("error getting customers", err);
    }

})

router.get('/update/:email',async (req,res,next)=>{
    const email: string = req.params.email;
    const customer : Customer = req.body;

    try{
        await CustomerUpdate(email, customer);
        res.send('Customer Updated');
    }catch(err){
        console.log("error updating customer", err);
    }

})

export default router;