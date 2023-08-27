import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function BankHome() {
  return (
    <div>
      <hr />
      <nav>
        <span>
          <Link to={"/"}>Home</Link>
        </span>
        <span> | </span>
        <span>
          <Link to={"personal"}>Personal</Link>
        </span>
        <span> | </span>
        <span>
          <Link to={"nri"}>NRI</Link>
        </span>
      </nav>
      <hr />
      <h2> Welcome To Bank</h2>
      <hr />
      <Outlet />
    </div>
  );
}
