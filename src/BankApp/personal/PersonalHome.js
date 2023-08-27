import React from "react";
import { Link, Outlet } from "react-router-dom";
export default function PersonalHome() {
  return (
    <div>
      <nav>
        <span>
          <Link to={"login"}>Login</Link>
        </span>
        <span> | </span>
        <span>
          <Link to={"register"}> Register</Link>
        </span>
      </nav>
      <hr />
      <Outlet />
      <Link to={"/"}>Back To Home</Link>
    </div>
  );
}
