function fnVar() {
  var city = "Delhi";

  if (false) {
    var id = 101;
    console.log(city);
  } else {
    console.log(city);
  }

  console.log(id);
}

if (true) {
  console.log(city);
}

console.log(id, city);

fnVar();
