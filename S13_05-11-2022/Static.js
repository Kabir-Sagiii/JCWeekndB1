class Employee {
  ename;
  esalary;
  static ecompany;
  constructor(name, salary) {
    this.ename = name;
    this.esalary = salary;
    Employee.ecompany = "ABC";
  }

  displayAllDetails() {
    console.log(this.ename, this.esalary, Employee.ecompany);
  }

  static printCompanyName() {
    console.log(Employee.ecompany);
    console.log(this.ecompany);
    console.log(this.ename);
  }
}

var e1 = new Employee("Darsh", 50000);

var e2 = new Employee("Riya", 70000);

var e3 = new Employee("Adam", 90000);

Employee.printCompanyName();
e1.displayAllDetails();

// e1.displayAllDetails();
// e1.ename = "Kabir";
// e1.ecompany = "e1"; // inserting new property called ecompany
// e1.displayAllDetails();
// console.log(Employee.ecompany);

console.log("-----------------------------");

// e2.displayAllDetails();
// e2.ename = "Sneha";
// e2.ecompany = "e2"; //// inserting new property called ecompany
// e2.displayAllDetails();
// console.log(Employee.ecompany);
