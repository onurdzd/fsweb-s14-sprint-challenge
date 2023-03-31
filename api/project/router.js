//  `/api/projects` router buraya
const express=require("express")

const router=express.Router()
const Projects=require("./model")

//project completed lar booelan olmasına rağmen 0/1 dönüyor

router.get("/",async(req,res,next)=>{
    const projects=await Projects.find()
    res.status(201).json(projects)
})

router.post("/",async(req,res,next)=>{
    const newProject=await Projects.create(req.body)
    res.status(201).json(newProject)
})

module.exports=router