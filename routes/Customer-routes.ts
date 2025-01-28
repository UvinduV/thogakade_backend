import express from "express";

const router = express.Router();

router.post('/add',async (req,res,next)=>{
    console.log(req.body);
    res.send("Customer add");

})

router.get('/view',async (req,res,next)=>{
    res.send("view customer");

})

export default router;