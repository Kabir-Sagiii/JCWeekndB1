var userDetails = [
  {
    name: "Raj",
    city: "Delhi",
    id: 101,
    email: "Raj@gmail.com",
  },
  { name: "Chris", city: "Mumbai", id: 102, email: "chris@gmail.com" },
  {
    name: "Sneha",
    city: "Delhi",
    id: 103,
    email: "Sneha@gmail.com",
  },
  {
    name: "Robin",
    city: "Mumbai",
    id: 104,
    email: "Robin@gmail.com",
  },
  {
    name: "Ahana",
    city: "Delhi",
    id: 105,
    email: "Ahana@gmail.com",
  },
];

//print all those users details whose city is delhi

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

// userDetails.forEach(function (element) {
//   element.city === "Mumbai" ? console.log(element) : 99;
// });

// Print all product details whose brand is  Apple
productDetails.forEach(function (element) {
  element.brand === "Apple" ? console.log(element) : "";
});

// Print all the products details whose price range is in between
// 30000 to 70000
productDetails.forEach(function (element) {
  element.price >= 30000 && element.price <= 70000 ? console.log(element) : "";
});

//Print only oneplus and Samsung brand Product Details

productDetails.forEach(function (element) {
  element.brand === "Oneplus" || element.brand === "Samsung"
    ? console.log(element)
    : "";
});
