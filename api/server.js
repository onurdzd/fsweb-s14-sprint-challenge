// serverı buraya yazın ve index.js require yazın
const express=require("express")
const server=express()
server.use(express.json())

const projectRouter=require("./project/router")
const resourceRouter=require("./resource/router")
const taskRouter=require("./task/router")

server.use("/api/project",projectRouter)
server.use("/api/resource",resourceRouter)
server.use("/api/task",taskRouter)

module.exports=server