// serverı buraya yazın ve index.js require yazın
const express=require("express")
const server=express()
server.use(express.json())

const resourceRouter=require("./resource/router")
const projectRouter=require("./project/router")
const taskRouter=require("./task/router")

server.use("/api/resources",resourceRouter)
server.use("/api/projects",projectRouter)
server.use("/api/tasks",taskRouter)

module.exports=server