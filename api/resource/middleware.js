const Resource=require("./model")

const checkResourceName=async (req,res,next)=>{
    try {
        const isValid=await Resource.findByName(req.body.resource_name)
        if(isValid){
            res.status(400).json({message:"Kaynak ismi sistemde zaten mevcut"})
        }else{
            next()
        }
    } catch (error) {
        next(error)
    }
}

module.exports={checkResourceName}