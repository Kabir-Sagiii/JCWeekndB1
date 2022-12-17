// let myFun = () => {
//   console.log("Arrow Function");
// };

// // myFun();

// function fn(f) {
//   f();
// }

// fn(() => {
//   console.log("Arrow function is passed as a callback");
// });

// const fn = () => {
//   return "Arrow function";
// };

// const fn = (name, city) => "My Arrow function";

// var str = fn("Kabir", "Delhi");
// console.log(str);

// var arr = ["Kabir", 101, "Delhi", "India", 90, 78];

// var copyArr = [true, false, true, true];

// var temp = [...arr, ...copyArr];

// console.log(temp);

var obj1 = {
  name: "S1",
  city: "C1",
  id: 101,
};

var obj2 = {
  email: "s1@gmail.com",
  phn: 9999999,
  name: "Adam",
  ...obj1,
};

console.log(obj2);
