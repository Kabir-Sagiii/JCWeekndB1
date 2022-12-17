import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Task1 from "./Components/Task/Task1";
import ImageTask from "./Components/Task/ImageTask";
import Profile from "./Components/Profile/Profile";
import Parent from "./Components/Parent-Child/Parent";
import Text from "./Components/Child-Parent/Text";
import A from "./Components/ContextAPI/A";
import Home from "./Components/ConditionalRendering/Home";
import List from "./Components/ReneringList/List";
import ContentList from "./Components/ContentList/ContentList";
import UserDetails from "./Components/UserDetails/UserDetails";
import MyClass from "./Components/ClassComp/MyClass";

function App() {
  return (
    <div className="App">
      <Header />

      <MyClass />

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/users" element={<List />} />
        <Route path="/context" element={<A />} />
        <Route path="/list" element={<ContentList />} />
        <Route path="/details" element={<UserDetails />} />
      </Routes> */}

      {/* <ContentList />
      <Profile />
      <ImageTask />
      <Task1 /> */}
      {/* <Main /> */}
      {/* <Parent /> */}
      {/* <Text /> */}
      {/* <A /> */}
      {/* <Home /> */}
      {/* <Footer /> */}
      {/* <List /> */}
    </div>
  );
}

export default App;
