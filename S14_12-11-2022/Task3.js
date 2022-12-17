function getUsers(status) {
  //creating the promise
  var promise = new Promise(function (resolve, reject) {
    if (status) {
      resolve({
        status: true,
        results: [
          {
            id: 101,
            name: "Alina",
          },
          {
            id: 102,
            name: "Chris",
          },
          {
            id: 103,
            name: "Sneha",
          },
          { id: 104, name: "Aarav" },
          { id: 105, name: "Riya" },
        ],
      });
    } else {
      reject("Error at database side");
    }
  });

  return promise; // collection of users infomration
}

var promise1 = getUsers(true);
promise1 //promise chain
  .then(
    function (res) {
      console.log(res);
      return getSpecificUser(res, 103);
    },
    function (errorMsg) {
      console.log(errorMsg);
    }
  )
  .then(
    function (user) {
      console.log(user);
    },
    function (errormsg) {
      console.log(errormsg);
    }
  );

function getSpecificUser(usersData, id) {
  var promise = new Promise(function (resolve, reject) {
    var userFilteredData = usersData.results.filter(function (ele) {
      return ele.id === id;
    });

    if (userFilteredData.length > 0) {
      resolve(userFilteredData[0]);
    } else {
      reject("User Does not exist");
    }
  });

  return promise;
}
