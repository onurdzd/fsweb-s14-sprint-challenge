// bu`Task` modeli buraya
const db = require("../../data/dbConfig");

const find =async () => {
  let allTasks=await db("tasks as t")
    .leftJoin("projects as p", "p.project_id", "t.project_id")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_name",
      "p.project_description"
    );
    
    let transformedTask=await allTasks.map((item)=>{
      return {
        ...item,
        task_completed:item.task_completed===1
      }
    })

    return transformedTask
};

const findById =async (id) => {
  let idTask=await db("tasks as t")
    .leftJoin("projects as p", "p.project_id", "t.project_id")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "t.project_id"
    )
    .where("task_id", id).first()

    let transformedIdTask={
       ...idTask,
        task_completed:idTask.task_completed ===1
    }
    return transformedIdTask
};

const findByProjectId = (projectId) => {
  return db("projects")
    .where("project_id", projectId).first();
};

const create = (task) => {
  return db("tasks")
    .insert(task)
    .then(([task_id]) => findById(task_id));
};

module.exports = {
  find,
  create,
  findByProjectId,
  findById,
};
