const db = require("../data/db-config");
const { select } = require("../data/db-config");

module.exports = {
  find,
  add,
  findById,
};

function find() {
  return db("tasks")
    .join("projects", "tasks.project_id", "projects.id")
    .select("projects.name", "projects.description", "tasks.*");
}

function findById(id) {
  return db("tasks").where({ id }).first();
}

function add(task) {
  return db("tasks")
    .insert(task, "id")
    .then(([id]) => {
      return findById(id);
    });
}
