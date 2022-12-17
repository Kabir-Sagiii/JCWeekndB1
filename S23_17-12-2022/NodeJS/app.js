//Import Fs module from NodeJS
var fs = require("fs");

// let content = fs.readFileSync("./doc.txt", "utf-8"); // 5 seconds
// console.log(content);

// fs.writeFileSync("newFile.txt", "This is new Content");
// fs.writeFileSync("NewData.txt", content);

if (!fs.existsSync("Products")) {
  fs.mkdirSync("Products");
}
if (!fs.existsSync("React")) {
  fs.mkdirSync("React");
}

// fs.mkdirSync("./React/Element");
// fs.mkdirSync("./React/Components");

fs.readFile("./doc.txt", "utf-8", (err, data) => {
  console.log(data);
  fs.writeFile("Async.txt", data, (err) => {
    console.log("File is Created");
  });
});

// let htmlcontent = fs.readFileSync("./home.html", "utf-8");
// console.log(htmlcontent);
// console.log("This is 3rd line");
// console.log("This is 4th Line");
