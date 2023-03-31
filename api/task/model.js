// bu`Task` modeli buraya
const db = require("../../data/dbConfig");

const find = () => {
  return db("tasks as t")
    .leftJoin("projects as p", "p.project_id", "t.project_id")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_name",
      "p.project_description"
    );
};

const findById = (id) => {
  return db("tasks as t")
    .leftJoin("projects as p", "p.project_id", "t.project_id")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "t.project_id"
    )
    .where("task_id", id).first()
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
