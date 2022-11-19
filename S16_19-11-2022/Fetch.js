function getUserDataUsingFetch() {
  //send the request
  var promise = fetch("https://randomuser.me/api/?results=50");

  promise
    .then(function (res) {
      var promise2 = res.json();
      return promise2;
    })
    .then(function (data) {
      console.log(data);
      var divRef = document.getElementById("tableDiv");
      var tableRef = document.getElementById("table");
      divRef.style.display = "block";

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
    })
    .catch(function (error) {
      alert("Error while getting data");
    });
}
