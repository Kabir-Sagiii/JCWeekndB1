var obj = {
  name: "Kabir",
  id: 101,
  email: "Kabir@gmail.com",
  city: "Delhi",
  state: "Delhi",
};

for (var key in obj) {
  console.log(key, ":", obj[key]);
}
