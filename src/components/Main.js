import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About, { Child1, Child2 } from "./About";
import Home from "./Home";
import LoginForm from "./LoginForm";
import Nav from "./Nav";
import Pricing from "./Pricing";
import RegisterForm from "./RegisterForm";
import UserDashBoard from "./UserDashBoard";
export default function Main() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" index element={<Home />}></Route>
          <Route path="feature" element={<About />}>
            {/* agar direct chil default rkhna to index lagao and path hatao default child ka */}
            <Route path="contact" index element={<Child1 />}></Route>
            <Route path="support" element={<Child2 />}></Route>
          </Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/register" element={<RegisterForm />}></Route>
          <Route path="/dashboard" element={<UserDashBoard />}></Route>
        </Routes>
      </Router>
    </>
  );
}
