import express from "express";
import {Item} from "../model/Item";
import {getAllItem, ItemAdd, ItemDelete, ItemUpdate} from "../database/prisma-data-store";

const router = express.Router();

router.post('/add',async (req,res,next)=>{
    const item: Item= req.body;
    try{
        const addedItem = await ItemAdd(item);
        res.send('Item Added');
    }catch(err){
        console.log("error adding item", err);
        res.status(400).send("error adding item");
    }
})

router.get('/view',async (req,res,next)=>{
    try{
        const items=  await getAllItem();
        res.json(items);
    }catch(err){
        console.log("error getting items", err);
    }
})

router.put('/update/:name',async (req,res,next)=>{

    const name: string = req.params.name;
    const item : Item = req.body;

    try{
        await ItemUpdate(name, item);
        res.send('Item Updated');
    }catch(err){
        console.log("error updating item", err);
    }

})

router.delete('/delete/:name',async (req,res,next)=>{
    const name: string  = req.params.name;
    try{
        await ItemDelete(name);
        res.send('Item Deleted');
    }catch(err){
        console.log("error deleting item", err);
    }
})

export default router;