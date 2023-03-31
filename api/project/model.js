// `Proje` modeli buraya
const db=require("../../data/dbConfig")


const find=async()=>{
    let allProjects=await db("projects")
    let transformedProjects=await allProjects.map((row)=>{
        return {
            ...row,
            project_completed:row.project_completed ===1
        }
    })
    return transformedProjects
}

const findById=async(id)=>{
    let idProject=await db("projects").where("project_id",id).first()
    let transformedIdProject={
       ...idProject,
        project_completed:idProject.project_completed ===1
    }
    return transformedIdProject
}

const create=(project)=>{
    return db("projects").insert(project).then(([id]) => findById(id))
}

module.exports={
    find,findById,create
}