// var arr = [10, 20, 30, 40, 50, 20, 30];
//push()
// console.log(arr);
// arr.push(60, 70, 80);
// // console.log(arr);

// //unshift()

// arr.unshift("John");
// console.log(arr);

//pop()
// console.log(arr);
// arr.pop();
// arr.pop();
// console.log(arr);

//shift()
// console.log(arr);
// arr.shift();
// arr.shift();
// console.log(arr);

// var index = arr.indexOf(20);
// console.log(index);

// var lastsindex = arr.lastIndexOf(20);
// console.log(lastsindex);

//includes()  : boolean true or false

// var elementStatus = arr.includes(1000);
// console.log(elementStatus);

var arr = [10, 20, 30, 40, 50, 20, 30];

// console.log(arr[0], arr[1], arr[2]);

arr.forEach(function (element, index) {
  console.log(element, index);
});
