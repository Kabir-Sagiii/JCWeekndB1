//num1 = 20 , num2 = 30  num3 = 50

function fnAdd(num1, num2) {
  //20   //30
  var res; //undefined
  setTimeout(function () {
    res = num1 + num2; //res = 50
  }, 3000);

  return res; //undefined
}

function fnMul(resultOffnAdd, num3) {
  //  undefined   50
  console.log(resultOffnAdd * num3); // NaN
}

var result = fnAdd(20, 30);
fnMul(result, 50);
