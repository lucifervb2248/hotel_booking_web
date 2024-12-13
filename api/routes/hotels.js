import express from "express";

const router=express.Router();

router.post("/",(req,res)=>{
    
})
router.get("/",(req,res)=>{
    res.send("hello");
})

export default router