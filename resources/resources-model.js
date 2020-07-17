const db = require("../data/db-config");

module.exports = {
  find,
  add,
  findById,
};

function find() {
  return db("resources");
}

function findById(id) {
  return db("resources").where({ id }).first();
}

function add(resource) {
  return db("resources")
    .insert(resource, "id")
    .then(([id]) => {
      return findById(id);
    });
}
