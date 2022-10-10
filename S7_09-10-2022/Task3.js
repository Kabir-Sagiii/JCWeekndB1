var info = [45, 78, 94, 21, 99, 100, 33, 59];

// element > 30  and element < 90  using filter

var newArray = info.filter(function (ele) {
  return ele > 30 && ele < 90;
});

console.log(newArray);
