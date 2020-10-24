const route = require("express").Router();

let teachers = [
  { name: "Akhil", sub: "CP" },
  { name: "Gaurav", sub: "MAth" },
  { name: "Pankaj", sub: "DSA" },
];

route.get("/", (req, res) => {
  res.send(teachers);
});

route.get("/:id", (req, res) => {
  res.send(teachers[req.params.id]);
});

route.get("/add", (req, res) => {
  teachers.push({
    name: req.query.name,
    sub: req.query.subject,
  });
  res.send(teachers);
});

module.exports = route;
