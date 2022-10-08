var user = {
  name: "Shivali",
  gender: "Female",
  id: 101,
};

//Access a Particular Property value

//<objname>.<keyName>   or   <objName>['keyname']

// console.log(user.gender);
// console.log(user.id);

// console.log(user["name"]);

//Find Diff btw dot Notation and Square bracket Notation

//Insert New Property dynamically

// <objName>.<keyName> = "Value"  or  <objname>['keyname'] = "Value"

// console.log(user);

// user.city = "Delhi";
// user.email = "shivali@gmail.com";
// console.log(user);

//update property

//<objname>.<keyname> = "<Updated Value>"   or <objname>['keyname'] = "updated Value"
// console.log(user);
// user.id = 1000000;
// user.name = "Tina";
// console.log(user);

// user.salary = 75000; //insert or update

//delete the property
console.log(user);

// delete user.gender;
// delete user["name"];

console.log(user);
