const srv = require("express")();
const express = require("express");

const studentRoute = require("./routes/students");
const teacherRoute = require("./routes/teachers");


srv.use(express.json());
srv.use(express.urlencoded({ extended: true }));

srv.use("/students", studentRoute);
srv.use("/teachers", teacherRoute);

srv.listen(2200);
