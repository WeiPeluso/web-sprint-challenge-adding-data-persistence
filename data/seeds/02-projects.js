exports.seed = function (knex) {
  return knex("projects").insert([
    { name: "Weather App", description: "make a react app", completed: 0 },
    {
      name: "Kpop Dance Competition",
      description: "host a kpop dance competition",
      completed: 0,
    },
  ]);
};
