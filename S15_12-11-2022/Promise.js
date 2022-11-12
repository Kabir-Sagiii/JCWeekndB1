function createPromise() {
  //create the Promise Object
  var promise = new Promise(function (resolve, reject) {
    //x = resolve()  , y = reject()
    resolve({
      name: "Darsh",
      city: "Delhi",
    }); //success response or success data
    // reject({
    //   msg: "Error Data",
    //   ok: true,
    // }); //failure response or failure data
  });
  return promise;
}

var promiseObject = createPromise();

promiseObject.then(
  function (success) {
    console.log("Success Response", success);
  },
  function (failure) {
    console.log("Failure Response", failure);
  }
);
