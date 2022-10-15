function print30To60() {
  for (var i = 30; i <= 60; i++) {
    console.log(i);
  }
}

// print30To60();

// function printEven() {
//   for (var i = 0; i <= 100; i = i + 2) {
//     console.log(i);
//   }
// }

function printEven() {
  for (var i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

printEven();
