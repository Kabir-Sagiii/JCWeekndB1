function getUsers() {
  //creating the promise
  var promise = new Promise(function (resolve, reject) {
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
  });

  return promise; // collection of users infomration
}

function getSpecificUserInfo(id, callbackGetUsers) {
  var users = callbackGetUsers();

  users.then(
    function (userData) {
      var result = userData.results.filter(function (ele) {
        return ele.id === id;
      });

      //   console.log(result);
      if (result.length > 0) {
        console.log(result[0]);
      } else {
        console.log("User Does not Exist");
      }

      //   userData.results.forEach(function (ele) {
      //     if (ele.id === id) {
      //       console.log(ele);
      //     } else {
      //       console.log("User Dont exit");
      //     }
      //   });
    },
    function () {}
  );
}

getSpecificUserInfo(1055, function () {
  getUsers();
});
