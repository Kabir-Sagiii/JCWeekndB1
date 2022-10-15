function printValues() {
  for (var i = 1; i <= 100; i++) {
    console.log(i); //1  2  3  10            //i = 11
  }

  console.log("after for loop");
}

// printValues();

function printReverse() {
  for (var i = 20; i >= 0; i--) {
    console.log(i);
  }
}
printReverse();
