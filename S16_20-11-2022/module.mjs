//What is the scope of the function

// global scope
// module scope

//module scope

export var city = "london"; //module
export var id = 101;

export default function fn() {
  console.log("I am from module file");
}

export class MyNewClass {
  email = "sagar@gmail.com";

  printEmail() {
    console.log(this.email);
  }
}
