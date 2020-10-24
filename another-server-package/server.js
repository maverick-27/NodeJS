const express = require('express');
const server = express();

const m1  =server.use(function (req, res , next)  {
       console.log("we are in middleware One")
       next()
})
const m2  =server.use(function (req, res , next)  {
       console.log("we are in middleware Two")
       next()
})
server.use(m1)
server.use(m2)
const m3  =server.use(function (req, res , next)  {
       console.log("we are in middleware Three")
})
const m4  =server.use(function (req, res , next)  {
       console.log("we are in middleware Four")
})

server.get('/' , function(req, res , next){
    console.log("Helllo World")
})


server.listen(8080);