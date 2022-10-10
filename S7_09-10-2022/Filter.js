// var arr = [10, 20, 30, 40, 50];

// var newArray = arr.filter(function (ele) {
//   return ele < 30;
// });

// console.log(newArray);
var productDetails = [
  {
    brand: "Apple",
    model: "phone 14",
    price: 90000,
  },
  {
    brand: "Samsung",
    model: "Galaxy",
    price: 80000,
  },
  {
    brand: "Apple",
    model: "phone 13",
    price: 60000,
  },
  {
    brand: "Oneplus",
    model: "oneplus9",
    price: 40000,
  },

  {
    brand: "Oneplus",
    model: "oneplus10",
    price: 85000,
  },
  {
    brand: "Vivo",
    model: "A23",
    price: 30000,
  },
  {
    brand: "Vivo",
    model: "A21",
    price: 20000,
  },
  {
    brand: "Oppo",
    model: "S23",
    price: 15000,
  },
];

//  print all the products which are greater then 50000

var filteredData = productDetails.filter(function (element) {
  //element = {
  //     brand: "Apple",
  //     model: "phone 14",
  // price: 90000,
  //        },

  return element.price > 50000;
});

console.log(filteredData);
