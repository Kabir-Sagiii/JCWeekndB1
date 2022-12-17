var http = require("http");
var fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readFile("./home.html", "utf-8", (err, data) => {
    res.end(data);
  });
  //   res.end("This is First Response to Client");
});
//localhost:9999/

server.listen(9999, () => {
  console.log("Server started");
});
