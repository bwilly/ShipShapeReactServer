const express = require("express");
// import express from "express"

const measures = [
  {
    id: 1,
    status: "Open",
    owner: "Ravan",
    created: new Date("2016-08-15"),
    measureVal: 45
  },
  {
    id: 2,
    status: "Assigned",
    owner: "Eddie",
    created: new Date("2016-08-16"),
    measureVal: 50
  },
  {
    id: 3,
    status: "Assigned",
    owner: "Brian",
    created: new Date("2019-03-09"),
    measureVal: 30
  }
];

const app = express();
app.use(express.static("static"));
app.get("/hello", (req, res) => {
  res.send("Hello World");
});

app.get("/api/test", (req, res) => {
  res.json({measures, "me":"you"});
});

app.listen(3000, function() {
  console.log("App started on port 3000");
});

//to watch a directory for changes:
//npm run watch
