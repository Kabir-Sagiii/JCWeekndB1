function fn(name) {
  console.log("I am From Fn function");
  name();
  name();

  var num1 = 3;
  var num2 = 17;
  console.log(num2 % num1); //  20 /10 = remainder   3/2= 1   17 / 3 = 2
}

fn(function () {
  var x = 10;
  var y = 20;
  console.log(x + y);
});
