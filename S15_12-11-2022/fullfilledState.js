function createPromise() {
  var promise = new Promise(function (resolve, reject) {
    resolve("Stored data using resolve function");
  });

  console.log(promise);
}

createPromise();
