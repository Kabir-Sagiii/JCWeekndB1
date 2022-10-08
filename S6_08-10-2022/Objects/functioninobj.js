// var user = {
//   name: "Kabir",
//   printCity: function () {
//     console.log("Kabir is From Delhi");
//   },
//   printAddress: function (city, country) {
//     console.log(city, country);
//   },
// };

// user.printCity();
// user.printAddress("Delhi", "India");

var user = {
  name: "Kabir",
  address: {
    city: {
      Street1: "djbcdjsh", //user.address.city.Street1 or user['address']['city]['Street1]
      Street2: "csdjkcjkds",
    },
    state: "MH",
    country: "India",
  },
};

console.log(user.address.country);
user.address.city = "Pune";
user.address.pincode = 434299;
console.log(user);
