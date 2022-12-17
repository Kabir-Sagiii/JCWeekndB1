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
import UseReducer from "./Components/useReducer/UseReducer";
// import Text from "./Components/Child-Parent/Text";
import A from "./Components/ContextAPI/A";
import Home from "./Components/ConditionalRendering/Home";
import List from "./Components/ReneringList/List";
import ContentList from "./Components/ContentList/ContentList";
import UserDetails from "./Components/UserDetails/UserDetails";
import MyClass from "./Components/ClassComp/MyClass";
import ImageComp from "./Components/ClassComp/Image";
import Form from "./Components/Forms/Form";
import Form2 from "./Components/Forms/Form2";
import Input from "./Components/Redux/Input";
import Text from "./Components/Redux/Text";
import CityComp from "./Components/Redux/CityComp";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <ImageComp />
      <MyClass /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/users" element={<List />} />
        <Route path="/context" element={<A />} />
        <Route path="/list" element={<ContentList />} />
        <Route path="/details" element={<UserDetails />} />
        <Route path="/cc" element={<MyClass />} />
        <Route path="/form" element={<Form />} />
        <Route path="/form2" element={<Form2 />} />
        <Route path="/ur" element={<UseReducer />} />
        <Route
          path="/redux"
          element={
            <div>
              <Input />
              <Text />
              <CityComp />
            </div>
          }
        />
      </Routes>

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
