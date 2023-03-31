// `Proje` modeli buraya
const db=require("../../data/dbConfig")


const find=()=>{
    return db("projects")
}

const findById=(id)=>{
    return db("projects").where("project_id",id).first()
}

const create=(resource)=>{
    return db("projects").insert(resource).then(([id]) => findById(id))
}

module.exports={
    find,findById,create
}