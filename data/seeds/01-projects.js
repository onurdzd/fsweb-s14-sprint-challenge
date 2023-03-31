/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const projects = [
  { project_name: 'proje1',project_description:"aciklama1" },
  { project_name: 'proje2',project_description:"aciklama2" },
  { project_name: "proje3",project_description:"aciklama3"},
]

exports.projects = projects

exports.seed = function (knex) {
  return knex('projects').insert(projects)
}
