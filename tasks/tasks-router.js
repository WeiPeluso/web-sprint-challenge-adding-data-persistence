const express = require("express");

const Tasks = require("./tasks-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Tasks.find()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((err) => {
      res.status(500).json({ err: err, message: "Failed to get tasks" });
    });
});
router.get("/project/:id", (req, res) => {
  const { id } = req.params;

  Tasks.findByProjectId(id)
    .then((steps) => {
      if (steps.length) {
        res.json(steps);
      } else {
        res
          .status(404)
          .json({ message: "Could not find tasks for given project" });
      }
    })
    .catch((err) => {
      res.status(500).json({ err: err, message: "Failed to get tasks" });
    });
});

router.post("/", (req, res) => {
  const taskData = req.body;

  Tasks.add(taskData)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch((err) => {
      res.status(500).json({ err: err, message: "Failed to create new task" });
    });
});

module.exports = router;
