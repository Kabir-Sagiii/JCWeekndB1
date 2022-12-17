function createPromise() {
  var promise = new Promise(function (resolve, reject) {
    reject("Stored data using resolve function");
  });

  console.log(promise);
}

createPromise();
