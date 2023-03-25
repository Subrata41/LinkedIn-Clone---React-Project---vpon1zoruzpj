import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import "../styles/App.css";
import Login from "./Login";
import Home from "./Home";
import Header from "./Header";

const App = () => {
  return (
    <div id="main">
      <Router>
        <Routes>
          {/* <Login></Login>
          <Header></Header>
          <Home></Home> */}
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<Header />} />
          <Route path="/feed" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
