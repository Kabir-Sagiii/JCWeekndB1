// //Rest Parameter :    ...<parameter name>

// //spread Operator :    ...<arrayname>  or ...<obj name>

// function fn(...data) {
//   //   console.log(x, y, p1, p2, p3, p4, p5, p6);

//   console.log(data);
// }

// fn(2, 5, 6, 8, 9, 10, 100, 12); //8
// fn(2, 5, 6); //3

// fn(2, 5, 6, 8, 9, 10); //8
//==============================================================================

function fn(information) {
  var student = {
    name: "Pooja",
    gender: "female",
    id: 101,
  };

  // console.log(information[0], information[1]);

  // var name1 = information[0];
  // var name2 = information[1];

  // console.log(name1, name2);

  //Array Destructring
  let [kabir = "100", adamchris = "500"] = information;

  console.log("Array", kabir, adamchris);

  //Object Destructring
  let { name, id } = student;

  // console.log("Array", x, y);

  console.log("Object", name, id);
}

fn(["kabir"]);
