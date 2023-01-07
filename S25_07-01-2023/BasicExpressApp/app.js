var express = require("express");
var userRoute = require("./Routes/userRoute");
var productRoute = require("./Routes/productsRoute");
var env = require("dotenv");
var app = express();
var cors = require("cors");
var mongoose = require("mongoose");

app.use(express.json());
app.use(cors());
env.config({ path: "./config.env" });

app.use("/users", userRoute); //http://localhost:5001/users/usersdata
app.use("/products", productRoute); //http://localhost:5001/products/productsdata

mongoose
  .connect(process.env.DATABASEURL)
  .then(() => {
    console.log("Successfully Connected With Database");
  })
  .catch((err) => {
    console.log("Failed to Connect with database");
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("<p>ckdjsbc</p>");
}); //  http://localhost:5001/  //500

app.listen(5001, () => {
  console.log("Server Started");
});
