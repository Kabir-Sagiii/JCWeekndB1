class A {
  name;
  city;
  constructor(name, city) {
    this.name = name;
    this.city = city;
  }
  display() {
    console.log(this.name, this.city);
  }
}
class B extends A {
  email;
  phone;

  constructor(email, phone) {
    super("Riya", "Mumbai");
    this.email = email;

    this.phone = phone;
  }
  print() {
    this.display();
    console.log(this.email, this.phone);
  }
}

class C extends B {}

var b1 = new B("riya@gmail.com", 99999999);
b1.print();
