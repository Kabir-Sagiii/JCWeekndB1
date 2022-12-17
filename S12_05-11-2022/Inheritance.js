class A {
  name = "Darsh";
  city = "Delhi";
}

class B extends A {
  email = "Darsh@gmail.com";
  print() {
    console.log(this.name, this.city, this.email);
  }
}

class C extends A {
  display() {
    console.log(this.name);
  }
}

var b1 = new B();
var a1 = new A();
var c1 = new C();
b1.print();
console.log(a1.email);
c1.display();
