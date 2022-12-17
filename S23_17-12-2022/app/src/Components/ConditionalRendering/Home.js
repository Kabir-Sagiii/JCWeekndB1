import { useState } from "react";
import Service from "./Service";
import Login from "./Login";

function Home(props) {
  const [showlogin, setShowLogin] = useState(true);

  //   if (showlogin) {
  //     return <Login />;
  //   } else {
  //     return <Service />;
  //   }

  return (
    <div>
      {showlogin ? <Login /> : <Service />}
      <button
        onClick={() => {
          setShowLogin(true);
        }}
      >
        Show Login Comp
      </button>
      &nbsp;&nbsp;&nbsp;
      <button
        onClick={() => {
          setShowLogin(false);
        }}
      >
        Show Service Comp
      </button>
    </div>
  );
}

export default Home;
