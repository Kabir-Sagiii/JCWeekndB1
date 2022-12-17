class A {
  name = "Darsh";
  city = "Delhi";

  display() {
    console.log(this.name, this.city);
  }
}

class B extends A {
  num1 = 10;
  num2 = 20;

  display() {
    super.display();
    console.log(this.num1 + this.num2);
  }

  print() {
    super.display();
  }
}

//Creating the Instance of Parent class
// var a1 = new A();
// a1.display();
// console.log("------------------------------------");
// //Creating the Instance of Child Class
var b1 = new B();
// b1.display();

// b1.display();
b1.print();
