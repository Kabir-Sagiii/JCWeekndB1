function StudentInfo(id, name, email) {
  var id = id;
  var name = name;
  var email = email;

  function displayDetails() {
    //500
    console.log(id, name, email);
  }

  function printNameEmail() {
    //300

    console.log(name, email);
  }

  function printNameId() {
    //400
    console.log(id, name);
  }
  function printId() {
    //500
    console.log(id);
  }
  function printName() {
    //200
    console.log(name);
  }
  function printEmail() {
    console.log(email);
  }
  displayDetails();
  printEmail();
  printId();
  printNameId();
}

StudentInfo(101, "Kabir", "Kabir@gmail.com");

StudentInfo(102, "Alica", "Alica@gmail.com");
