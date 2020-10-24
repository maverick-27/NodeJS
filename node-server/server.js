const express = require("express");

const server = express();

server.get("/", function (req, res, next) {
  res.send("Helo World");
});

server.get("/greet/:tod/", function (req, res, next) {
  let tod = "Morning";
  switch (req.params.tod) {
    case "evening":
      tod = "Evening";
      break;
    case "morning":
      tod = "Morning";
      break;
  }
  res.send("Good " + tod + "  " + req.query.name);
});

server.get("/html", function (req, res, next) {
  res.send(`
  <!DOCTYPE html>
   <html>
   <head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Hello World</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
    <script src='main.js'></script>
</head>
<body>
    <h1>Hello From Akhil Joshi  </h1>
    <h2>Lets Code Boiss</h2>
</body>
</html>
  `);
});

server.listen(8000);
