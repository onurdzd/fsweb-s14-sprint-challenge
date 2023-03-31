const checkBody=(req,res,next)=>{
    try {
        if(!req.body.project_name){
            res.status(400).json({message:"Hatalı/eksik proje ismi"})
        }else{
            next()
        }
    } catch (error) {
        next(error)
    }
}

module.exports={checkBody}