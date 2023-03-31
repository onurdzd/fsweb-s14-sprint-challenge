// `/api/tasks` router buraya
const express=require("express")

const router=express.Router()

const Tasks=require("./model")
const mw=require("./middleware")

//project completed lar booelan olmasına rağmen 0/1 dönüyor

router.get("/",async(req,res,next)=>{
    const tasks=await Tasks.find()
    res.status(201).json(tasks)
})

router.post("/",mw.checkTaskBody, async(req,res,next)=>{
    const newTask=await Tasks.create(req.body)
    res.status(201).json(newTask)
})

module.exports=router