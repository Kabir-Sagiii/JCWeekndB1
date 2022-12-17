import React from "react";
// import Image from "../../../public/";

class ImageComp extends React.Component {
  shouldComponentUpdate(prevProps, prevState) {
    console.log("Should Component update", prevProps, prevState);
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate is called");
    return null;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate is called");
  }

  componentDidMount() {
    console.log("ComponentDid Mount is called");
  }

  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps is Called");
    return null;
  }

  constructor() {
    super();
    this.state = {
      img: "https://th.bing.com/th/id/R.f81a6f373c244b1f70f4b7402b5ab372?rik=rbXh4ieLuKt%2bmA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f09%2fReact_logo_logotype_emblem.png&ehk=QhGOkKcUKCU7FBQgHOajOiJqJBACUTD2Ni6LsfqzCEA%3d&risl=&pid=ImgRaw&r=0",
      title: "React",
    };
    console.log("Constructor is called");
  }

  render() {
    console.log("Render is called");
    return (
      <div
        style={{
          textAlign: "center",
          margin: "50px auto",
          boxShadow: "0 0 10px black",
          width: "300px",
          padding: "30px",
        }}
      >
        <img src={this.state.img} width="300" height="300" />
        <p>{this.state.title}</p>
        <button
          onClick={() => {
            this.setState({
              img: "https://th.bing.com/th/id/R.f81a6f373c244b1f70f4b7402b5ab372?rik=rbXh4ieLuKt%2bmA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f09%2fReact_logo_logotype_emblem.png&ehk=QhGOkKcUKCU7FBQgHOajOiJqJBACUTD2Ni6LsfqzCEA%3d&risl=&pid=ImgRaw&r=0",
              title: "React",
            });
          }}
        >
          React{" "}
        </button>
        <button
          onClick={() => {
            this.setState({
              img: "https://th.bing.com/th/id/OIP.63rzKiGM6h9ge4E7SixxpgHaH9?pid=ImgDet&rs=1",
              title: "Angular",
            });
          }}
        >
          Angular{" "}
        </button>
      </div>
    );
  }
}

export default ImageComp;
