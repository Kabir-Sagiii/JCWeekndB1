import Card from "../Card/Card";
import "./Main.css";
function Main() {
  return (
    <div className="main">
      <Card
        img="https://i.pinimg.com/originals/e3/7e/0e/e37e0e25686c2139b281a57a5b4906f2.jpg"
        name="Rajiv Sinha"
        gender="male"
      />
      <Card
        img="https://64.media.tumblr.com/7525b188490ddef0f938911b8e692113/tumblr_mk8u82EEYC1rnogako1_640.jpg"
        name="Chris John"
        gender="male"
      />
      <Card
        img="https://th.bing.com/th/id/OIP.vf6tqF3ZfAAvJsEqI5-ubgHaLH?pid=ImgDet&rs=1"
        name="Alina adam"
        gender="female"
      />
    </div>
  );
}

export default Main;
