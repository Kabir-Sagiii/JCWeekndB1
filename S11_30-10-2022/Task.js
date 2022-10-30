function Student() {
  var name = "Chris";
  var phone = 9000000;
  var email = "Chris@gmail.com";
  var marks = [90, 70, 97, 50, 30];
  //   totalPrice();  // error

  function findAvgAngTotalMarks(marks) {
    //Student
    var totalMarks = 0;
    marks.forEach(function (ele) {
      totalMarks = avgMarks + ele;
    });

    avgMarks = totalMarks / 5;
    return {
      total: totalMarks,
      avg: avgMarks,
    };
  }
  findAvgAngTotalMarks(marks);

  return {
    name: name,
    phone: phone,
    email: email,
    marks: marks,
  };
}

function Product() {
  //product
  var productName = "Iphone14";
  var brandName = "Apple";
  var price = 120000;
  var count = 5;

  //   findAvgAngTotalMarks()  // error

  function totalPrice(price, count) {
    var totalPrice = price * count;
  }
  totalPrice(price, count);
}
