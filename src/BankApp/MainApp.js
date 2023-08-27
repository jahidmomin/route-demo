import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BankHome from "./BankHome";
import NRIHome from "./nri/NRIHome";
import NRILogin from "./nri/NRILogin";
import NRIRegister from "./nri/NRIRegister";
import PersonalHome from "./personal/PersonalHome";
import PersonalLogin from "./personal/PersonalLogin";
import PersonalRegister from "./personal/PersonalRegister";

export default function MainApp() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<BankHome />}>
            <Route path="personal" element={<PersonalHome />}>
              <Route path="login" element={<PersonalLogin />}></Route>
              <Route path="register" element={<PersonalRegister />}></Route>
            </Route>
            <Route path="nri" element={<NRIHome />}>
              <Route path="login" element={<NRILogin />}></Route>
              <Route path="register" element={<NRIRegister />}></Route>
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}
