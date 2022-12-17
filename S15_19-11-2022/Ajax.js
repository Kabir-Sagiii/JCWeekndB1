function fnGetData() {
  // Create the object of XMLHttpRequest
  var httpObj = new XMLHttpRequest();

  //Prepare the Request
  httpObj.open("get", "https://randomuser.me/api/?results=50");

  //send the request
  httpObj.send();

  //handling the success response
  httpObj.onload = function () {
    var divRef = document.getElementById("tableDiv");
    var tableRef = document.getElementById("table");
    divRef.style.display = "block";

    var data = httpObj.responseText;
    console.log(typeof data);
    data = JSON.parse(data);
    console.log(data);

    data.results.map(function (ele) {
      var tr = document.createElement("tr");
      var td1 = document.createElement("td");
      var td2 = document.createElement("td");
      var td3 = document.createElement("td");
      var td4 = document.createElement("td");
      var img = document.createElement("img");

      img.src = ele.picture.medium;
      img.width = "100";
      img.height = "100";
      img.style.borderRadius = "50%";

      td1.appendChild(img);
      td2.innerText = ele.name.first;
      td3.innerText = ele.gender;
      td4.innerText = ele.email;

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);

      tableRef.appendChild(tr);
    });
  };

  //handling failure response

  httpObj.onerror = function () {};
}
