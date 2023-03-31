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

//2. yöntem tek sayfada yapmak için:
// exports.seed =async function (knex) {
//   const defaultProjects=[
//     {
//       project_name:"proje1",
//       project_description:"açıklama1"
//     },
//     {
//       project_name:"proje2",
//       project_description:"açıklama2"
//     }

//   ];

//   const defaultResources=[
//     {
//       resource_name:"Github",
//       resource_description:"Github document"
//     },
//     {
//       resource_name:"Flutter",
//       resource_description:"Flutter document"
//     }
//   ];

//   const defaultTasks=[
//     {
//       task_description:"react form oluştur",
//       task_notes:"react indir",
//       project_id:1
//     },
//     {
//       task_description:"next js oluştur",
//       task_notes:"next js indir",
//       project_id:1
//     },
//     {
//       task_description:"node js oluştur",
//       task_notes:"node js indir",
//       project_id:2
//     }
//   ];

//   const defaultProjects_Resources=[
//     {
//       project_id:1,
//       resource_id:1
//     },
//     {
//       project_id:2,
//       resource_id:1
//     },
//     {
//       project_id:2,
//       resource_id:2
//     }
//   ]
// await knex("projects").insert(defaultProjects)
// await knex("resources").insert(defaultResources)
// await knex("tasks").insert(defaultTasks)
// await knex("projects_resources").insert(defaultProjects_Resources)
// }

