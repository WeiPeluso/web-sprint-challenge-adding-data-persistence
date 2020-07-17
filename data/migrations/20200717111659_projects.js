exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (tbl) => {
      tbl.increments();
      tbl.varchar("name", 50).unique().notNullable();
      tbl.text("description");
      tbl.integer("completed", 0).notNullable();
    })
    .createTable("resources", (tbl) => {
      tbl.increments();
      tbl.varchar("name", 50).unique().notNullable();
      tbl.text("description");
    })
    .createTable("project_resource", (tbl) => {
      tbl.increments();
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("projects.id");

      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources");
    })

    .createTable("tasks", (tbl) => {
      tbl.increments();
      tbl.text("tasks description").notNullable();
      tbl.text("notes");
      tbl.integer("completed", 0).notNullable();
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("projects.id");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("resources")
    .dropTableIfExists("project_resource")
    .dropTableIfExists("tasks");
};
