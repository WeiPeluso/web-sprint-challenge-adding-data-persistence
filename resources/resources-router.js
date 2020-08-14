const express = require("express");

const Resources = require("./resources-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Resources.find()
    .then((resources) => {
      res.json(resources);
    })
    .catch((err) => {
      res.status(500).json({ err: err, message: "Failed to get resources" });
    });
});

router.post("/", (req, res) => {
  const resourceData = req.body;

  Resources.add(resourceData)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ err: err, message: "Failed to create new resource" });
    });
});

module.exports = router;
