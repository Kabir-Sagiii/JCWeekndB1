import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Task1 from "./Components/Task/Task1";
import ImageTask from "./Components/Task/ImageTask";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      {/* <ImageTask /> */}
      {/* <Task1 /> */}
      {/* <Main />
      <Footer /> */}
    </div>
  );
}

export default App;
