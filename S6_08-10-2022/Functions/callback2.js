function f1(f) {
  f();
  f();
}

function f2() {
  console.log("I am a callback function");
}

f1(f2);
