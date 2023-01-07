var express = require("express"); //Importing express Module
var fs = require("fs");
var cors = require("cors");

var route = express(); //Initializing the Express Module
route.use(cors());
route.get("/", (req, res) => {
  // code to connect with database

  res.send("this is my first express response");
}); // end point == api   //http://localhost:3006/

route.get("/html", (req, res) => {
  res.send("<h2>This is my Second Response in Express</h2>");
}); // http://localhost:3006/html

route.get("/json", (req, res) => {
  fs.readFile("./product.json", "utf-8", (err, data) => {
    console.log(typeof data);
    res.send(data);
  });
}); // http://localhost:3006/json  get  {}

route.get("/new", (req, res) => {
  res.send("<p>This is para</p>");
});

route.listen(3006, () => {
  console.log("Server Started");
});
