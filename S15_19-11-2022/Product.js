function getData() {
  var promise = fetch("https://fakestoreapi.com/products");
  promise
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      data.map(function (ele) {
        if (ele.category === "electronics") {
          var div = document.createElement("div");
          var img = document.createElement("img");
          var h4 = document.createElement("h4");
          var p = document.createElement("p");

          h4.innerText = ele.title;
          p.innerText = "$ " + ele.price;
          img.src = ele.image;
          img.width = "150";
          img.height = "150";
          img.alt = "image";
          div.appendChild(img);
          div.appendChild(h4);
          div.appendChild(p);
          div.style.width = "250px";
          div.style.textAlign = "center";
          div.style.height = "300px";
          //   div.style.border = "2px solid black";

          document.getElementById("details").appendChild(div);
        }
      });
    })
    .catch(function (error) {
      alert("Error while receving the data");
    });
}
