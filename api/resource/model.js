// `Resource` modeli buraya
const db=require("../../data/dbConfig")

const find=()=>{
    return db("resources")
}

const findById=(id)=>{
    return db("resources").where("resource_id",id).first()
}

const create=(resource)=>{
    return db("resources").insert(resource).then(([id]) => findById(id))
}

module.exports={find,create,findById}