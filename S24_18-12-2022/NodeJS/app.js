var fs = require("fs");
var http = require("http");

// fs.readFile("./Readme.txt", "utf-8", (err, data) => {
//   console.log(data);
//   fs.writeFile("newFile.txt", data, () => {
//     console.log("File is Created");
//   });
// });

// const myserver = http.createServer((req, res) => {
//   fs.readFile("./products.json", "utf-8", (err, data) => {
//     // console.log(data);
//     // console.log(req.url);

//     res.end(data);
//   });
// });

const myserver = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("./products.json", "utf-8", (err, data) => {
      res.end(data);
    });
  } else if (req.url === "/1") {
    fs.readFile("./products.json", "utf-8", (err, data) => {
      data = JSON.parse(data);

      var filteredData = data.data.filter((ele) => {
        // console.log(typeof ele);
        return ele.id === 1;
      });
      filteredData = JSON.stringify(filteredData);
      res.end(filteredData);
    });
  } else if (req.url === "/2") {
    fs.readFile("./products.json", "utf-8", (err, data) => {
      data = JSON.parse(data);

      var filteredData = data.data.filter((ele) => {
        // console.log(typeof ele);
        return ele.id === 2;
      });
      filteredData = JSON.stringify(filteredData);
      res.end(filteredData);
    });
  }
});

myserver.listen(3010, () => {
  console.log("Server Started");
});
