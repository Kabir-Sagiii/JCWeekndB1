import { useState } from "react";
function ImageTask() {
  let [imageurl, setImageUrl] = useState(
    "https://th.bing.com/th/id/OIP.vDf037OKUo0H03weRxdWuAHaHa?pid=ImgDet&rs=1"
  );

  function changeImageToCar() {
    console.log(imageurl);

    setImageUrl(
      "https://digitalsynopsis.com/wp-content/uploads/2014/06/supercar-wallpapers-bugatti-3.jpg"
    );

    console.log(imageurl);
  }

  function changeImageToBike() {
    console.log(imageurl);
    setImageUrl(
      "https://th.bing.com/th/id/OIP.NhpSxyD-IKt0d_PWwTar5wHaEo?pid=ImgDet&rs=1"
    );
    console.log(imageurl);
  }

  return (
    <div>
      <img
        style={{ borderRadius: "50%" }}
        src={imageurl}
        width="300"
        height="300"
      />
      <br></br>
      <button onClick={changeImageToCar}>Car</button>&nbsp;&nbsp;
      <button onClick={changeImageToBike}>Bike</button>
    </div>
  );
}

export default ImageTask;
