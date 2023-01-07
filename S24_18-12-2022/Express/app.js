var express = require("express");
var fs = require("fs");

var route = express();
route.get("/", (req, res) => {
  //   res.send("<h2>Welcome to express </h2>");
  //   res.send({
  //     results: [{}, {}],
  //   });
  fs.readFile("./doc.html", "utf-8", (err, data) => {
    res.send(data);
  });
});

route.listen(3005, () => {
  console.log("Started server");
});
