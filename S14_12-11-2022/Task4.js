function f1() {
  var promise = new Promise(function (resolve, reject) {
    // resolve("f1 data");
    reject("F1 data from reject");
  });

  return promise;
}

// var promise1 = f1();

async function handlePromise() {
  var res = await f1();
  console.log(res);
}
handlePromise();
