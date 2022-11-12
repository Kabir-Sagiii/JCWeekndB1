function createPromiseWithResolve() {
  var studentPromise = new Promise(function (resolve, reject) {
    resolve(["Darsh", "Darsh@gmail.com", 101, 9999999, true]);
  });

  studentPromise.then(
    function (data) {
      console.log(data);
    },
    function (error) {
      console.log(error);
    }
  );
}

// createPromiseWithResolve();

function createPromiseWithReject() {
  var studentPromise = new Promise(function (resolve, reject) {
    reject("ckdsbcdjkscdjksn");
  });

  studentPromise.then(
    function (data) {
      console.log(data);
    },
    function (error) {
      console.log(error);
    }
  );
}

createPromiseWithReject();
