import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/home";
import Model from "./components/Model/model";
import Report from "./components/Report/report";
import LoginForm from "./components/LoginForm/LoginForm";
import Test from "./components/Test/test";
import About from "./components/AboutUs/About";
import ContactForm from "./components/Contactus/ContactForm";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Test" element={<Test />} />
        <Route path="/model" element={<Model />} />
        <Route path="/LoginForm" element={<LoginForm />} />
        <Route path="/report" element={<Report />} />
        <Route path="/About" element={<About />} />
        <Route path="/ContactForm" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default App;
