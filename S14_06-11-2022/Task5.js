function preCourseAttendance(studentId, callbackTestScore) {
  // fetch attendance details of each day from database
  //Calucate the Avg Attendance
  var attendance = 95;
  if (attendance >= 90) {
    callbackTestScore();
  } else {
    console.log("Not able to attaind Test due to Low attendance");
  }
}

function TestScore(callbackResultOfTraining) {
  // logic to fetch the data of test
  //calcuate total marks
  var testScore = 95;
  if (testScore >= 60) {
    // console.log("Qualified for Training");
    callbackResultOfTraining();
  } else {
    console.log("Not Qualified for Traning due to low score in the test");
  }
}

function resultOfTraining(callbackPlacement) {
  //logic to fetch data of entire training // 500
  var traningStatus = false;
  if (traningStatus) {
    // console.log("qualified for Placement");
    callbackPlacement();
  } else {
    console.log(
      "Not Qualified for placement, due to unsccessfull completion of Training"
    );
  }
}

function placementDetails(callbackPayment) {
  //logic to fetch all the details of placement
  var placementStatus = true;
  if (placementStatus) {
    callbackPayment();
  } else {
    console.log(
      "Not Eligible for Payment due to disqualifition in the placement"
    );
  }
}

function payment() {
  console.log("Collect the Fees from the Student");
}

preCourseAttendance(115, function () {
  //50  //callback hell
  TestScore(function () {
    resultOfTraining(function () {
      placementDetails(function () {
        payment();
      });
    });
  });
});
