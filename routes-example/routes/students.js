const route = require("express").Router();

let students = [
  { name: "Ajay", sub: "DAs" },
  { name: "Rohit", sub: "FRE" },
  { name: "Mandy", sub: "EE" },
];

route.get("/", (req, res) => {
  res.send(students);
});

route.get("/:id", (req, res) => {
  if (isNaN(parseInt(req.params.id))) {
    res.send(students[req.params.id]);
    next();
  }
});

route.post("/", (req, res) => {
  students.push({
    name: req.body.name,
    sub: req.body.sub,
  });
  res.send(students);
});

route.get("/add", (req, res) => {
  students.push({
    name: req.query.name,
    sub: req.query.subject,
  });
  res.send(students);
});
 
module.exports = route;
