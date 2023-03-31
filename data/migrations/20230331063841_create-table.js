/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable("projects",t=>{
        t.increments("project_id")
        t.string("project_name").notNullable()
        t.string("project_description")
        t.boolean("project_completed").defaultTo(false)
    })
    .createTable("resources",t=>{
        t.increments("resource_id")
        t.string("resource_name").notNullable().unique()
        t.string("resource_description")
    })
    .createTable("tasks",t=>{
        t.increments("task_id")
        t.string("task_description").notNullable()
        t.string("task_notes")
        t.boolean("task_completed").defaultTo(false)
        t.integer("project_id").unsigned().notNullable() //Burasıyla ilişkili olan diğer tablodaki bilgiyide siler
    })
    .createTable("project_resources",t=>{
        t.increments("project_resources_id")
        t.integer("project_id").unsigned().references("project_id").inTable("projects")
        t.integer("resource_id").unsigned().references("resource_id").inTable("resources")
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("project_resources") //tabloyu komple yok ediyor.o yüzden sırası önemli değil
  .dropTableIfExists("tasks")
  .dropTableIfExists("resources")
  .dropTableIfExists("projects")
};
