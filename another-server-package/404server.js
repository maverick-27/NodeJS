const express = require("express");
const server = express();

server.get("/a", (req, res) => res.send("Hello A"));

server.get("/b", (req, res) => res.send("Hello B"));

server.use((req, res) =>
  res.send(`<!DOCTYPE html>
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
    <h1>404 Page Not found</h1>
</body>
</html>
  `)
);

server.listen(8080);
