import fn, { city, id, MyNewClass } from "./module.mjs";

function f1() {
  console.log(city, id);
  fn();

  var obj1 = new MyNewClass();
  obj1.printEmail();

  var obj2 = new MyNewClass();
  obj2.email = "KAbir@gmail.com";
  obj2.printEmail();
}

f1();
