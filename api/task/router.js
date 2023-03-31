// `/api/tasks` router buraya
const express=require("express")

const router=express.Router()

const Tasks=require("./model")

//project completed lar booelan olmasına rağmen 0/1 dönüyor

router.get("/",async(req,res,next)=>{
    const tasks=await Tasks.find()
    res.status(201).json(tasks)
})

module.exports=router