function printPositiveOrNegative(num) {
  if (num > 0) {
    console.log(num, "is a Positive number");
  }

  if (num < 0) {
    // 10 < 0 : true
    console.log(num, "is a Negative Number");
  }
}

printPositiveOrNegative(10); //

printPositiveOrNegative(-10); //

printPositiveOrNegative(99);
printPositiveOrNegative(-78);
