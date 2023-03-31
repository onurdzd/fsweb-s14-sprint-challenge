// `/api/resources` router buraya
const express=require("express")

const router=express.Router()
const Resource=require("./model")

router.get("/",async(req,res,next)=>{
    const resources=await Resource.find()
    res.status(201).json(resources)
})

router.post("/",async(req,res,next)=>{
    const newResource=await Resource.create(req.body)
    res.status(201).json(newResource)
})


module.exports=router