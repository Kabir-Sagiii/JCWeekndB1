class Student {
  name;
  email;

  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  display() {
    console.log(this.name, this.email);
  }
}

var s1 = new Student("Darsh", "Darsh@gmail.com");

var s2 = new Student("Sneha", "Sneha@gmail.com");

s1.display();
s2.display();

class Employee {
  email;
}
console.log(email);
