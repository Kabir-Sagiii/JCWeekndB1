//num1 = 20 , num2 = 30  num3 = 50

function fnAdd(num1, num2, fn) {
  var res;

  setTimeout(function () {
    res = num1 + num2;
    fn(res);
  }, 3000);
}

function fnMul(resultOffnAdd, num3) {
  console.log(resultOffnAdd * num3);
}

fnAdd(20, 30, function (res) {
  fnMul(res, 50);
}); //output
