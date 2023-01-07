//we will create end points related users

var express = require("express");
var user = require("../Model/usersModel");

var route = express.Router();

route.get("/userrr", (req, res) => {
  res.json({
    status: "Success",
    results: [
      {
        name: "Kabir",
      },
      {
        name: "Zoya",
      },
      {
        name: "Chris",
      },
    ],
  });
});

// route.post("/newuser", (req, res) => {
//   if (Object.keys(req.body).length > 0) {
//     var name = req.body.username;
//     var email = req.body.email;
//     var phone = req.body.phone;
//     //   console.log(req.body);
//     res.json({
//       status: "Success",
//       OK: true,
//       msg: "Data Received Successfully",
//     });
//   } else {
//     res.json({
//       status: "Failure",
//       OK: false,
//       msg: "Data did not Received",
//     });
//   }

//   res.send("Data Received Successfully");
// }); //http://localhost:5001/users/newuser    Method Type: Post

route.post("/newuser", (req, res) => {
  var newuser = new user({
    name: req.body.username,
    city: req.body.city,
    isMarried: req.body.ismarried,
    email: req.body.email,
    phone: req.body.phone,
  });

  newuser
    .save()
    .then(() => {
      res.json({
        status: "Success",
        Ok: true,
        msg: "Data Saved Successfully in the Database",
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        status: "Failure",
        Ok: false,
        msg: "Failed to save data in datbase",
      });
    });
}); //http://localhost:5001/users/newuser

route.get("/userdata", (req, res) => {
  user.find({}, (err, data) => {
    if (err) {
      res.json({
        status: "Failure",
        Ok: false,
        msg: "Error while accessing the data from db",
      });
    } else {
      res.json({
        status: "Success",
        Ok: true,
        length: data.length,
        results: data,
      });
    }
  });
}); //http://localhost:5001/users/userdata

route.get("/specificuserdata/:id", (req, res) => {
  user.findOne({ _id: req.params.id }, (err, data) => {
    if (err) {
      res.json({
        status: "Failure",
        Ok: false,
        msg: "Error while accessing the data from db",
      });
    } else {
      res.json({
        status: "Success",
        Ok: true,
        results: data,
      });
    }
  });
}); //http://localhost:5001/users/specificuserdata/<id value>

route.delete("/delete/:id", (req, res) => {
  //   var id = req.params.id;

  user.deleteOne({ _id: req.params.id }, (err, data) => {
    if (err) {
      res.json({
        status: "Failure",
        Ok: false,
        msg: "Error while Deleting the data from db",
      });
    } else {
      res.json({
        status: "Success",
        Ok: true,
        msg: "Deleted the User",
      });
    }
  });
}); //http://localhost:5001/users/delete/<id value>

route.put("/update", (req, res) => {});

module.exports = route;
