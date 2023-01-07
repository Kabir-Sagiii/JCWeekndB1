var express = require("express");
var productRoute = express.Router();

productRoute.get("/productsdata", (req, res) => {
  res.json({
    status: "Success",
    results: [
      {
        productName: "Trimmer",
        rating: 4.8,
      },
      {
        productName: "Acer",
        rating: 4.6,
      },
      {
        productName: "IPhone 14",
        rating: 4.3,
      },
    ],
  });
});

module.exports = productRoute;
