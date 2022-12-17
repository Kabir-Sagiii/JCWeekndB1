import "./Profile.css";
import { useState } from "react";
function Profile() {
  // let [img, setImg] = useState(
  //   "https://i.pinimg.com/736x/38/93/07/389307d6af5c4be0051b7d3c4f93bf3d.jpg"
  // );
  // let [name, setName] = useState("Kabir Sagar");
  // let [email, setEmail] = useState("Kabirs@gmail.com");
  // let [city, setCity] = useState("Delhi, India");

  let [data, setData] = useState({
    name: "Kabir",
    email: "Kabir@gmail.com",
    city: "Delhi",
    img: "https://i.pinimg.com/736x/38/93/07/389307d6af5c4be0051b7d3c4f93bf3d.jpg",
  });

  let [bgcolor, setBgColor] = useState("white");
  let [textcolor, setTextColor] = useState("black");
  let [msg, setMsg] = useState("Check to Switch Dark Mode");

  const changeDataToChris = () => {
    setData({
      name: "Chris John",
      email: "Chris@gmail.com",
      city: "Mumbai",
      img: "https://i.pinimg.com/originals/f9/2d/a9/f92da9e8f055402408a18488943b0b84.jpg",
    });
    // setName("Chris John");
    // setImg(
    //   "https://i.pinimg.com/originals/f9/2d/a9/f92da9e8f055402408a18488943b0b84.jpg"
    // );
    // setCity("Pune, India");
    // setEmail("Chris@gmail.com");
  };

  const changeDataToKabir = () => {
    setData({
      name: "Kabir",
      email: "Kabir@gmail.com",
      city: "Delhi",
      img: "https://i.pinimg.com/736x/38/93/07/389307d6af5c4be0051b7d3c4f93bf3d.jpg",
    });
    // setName("Kabir Sagar");
    // setImg(
    //   "https://i.pinimg.com/736x/38/93/07/389307d6af5c4be0051b7d3c4f93bf3d.jpg"
    // );
    // setCity("Delhi, India");
    // setEmail("Kabirs@gmail.com");
  };

  const changeMode = (event) => {
    // alert(event.target.checked);
    if (event.target.checked) {
      setBgColor("black");
      setTextColor("white");
      setMsg("Uncheck to Switch Light Mode");
    } else {
      setBgColor("white");
      setTextColor("black");
      setMsg("Check to Switch Dark Mode");
    }
  };

  return (
    <div
      className="profile"
      style={{ backgroundColor: bgcolor, color: textcolor }}
    >
      <div style={{ width: "35%" }}>
        <img src={data.img} width="100%" height="100%" />
      </div>

      <div style={{ width: "65%", padding: "20px" }}>
        <dl>
          <dt>
            <b>User Name:</b>
          </dt>
          <dd>{data.name}</dd>
          <dt>
            <b>User City:</b>
          </dt>
          <dd>{data.city}</dd>
          <dt>
            <b>User Email:</b>
          </dt>
          <dd>{data.email}</dd>
          <dt>
            <b>Description:</b>
          </dt>
          <dd>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            facilis iusto repellendus magnam quam modi! Earum molestias dolorem
            reiciendis quae veniam omnis commodi magnam enim impedit adipisci
            fugit dolore labore ullam consectetur, corporis qui fuga quod non
            dicta facere iusto exercitationem iure repudiandae quos. Deleniti
            vel voluptatibus nihil laudantium atque?
          </dd>
        </dl>
        <button onClick={changeDataToKabir}>Kabir</button>&nbsp;&nbsp;
        <button onClick={changeDataToChris}>Chris</button>
        <br />
        <br />
        <input type="checkbox" onChange={changeMode} />
        {msg}
      </div>
    </div>
  );
}
export default Profile;
