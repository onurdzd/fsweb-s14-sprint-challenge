
const tasks = [
  { task_description: 't.aciklama1',task_notes:"t.note1",project_id:1 },
  { task_description: 't.aciklama2',task_notes:"t.note2",project_id:2 },
]

exports.tasks = tasks

exports.seed = function (knex) {
  return knex('task').insert(tasks)
}


