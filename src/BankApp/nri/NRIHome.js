import React from "react";
import { Link, Outlet } from "react-router-dom";
export default function NRIHome() {
  return (
    <div>
      <nav>
        <span>
          <Link to={"login"}>Login</Link>
        </span>
        <span> | </span>
        <span>
          <Link to={"register"}>Register</Link>
        </span>
      </nav>
      <hr />
      <Outlet />
      <Link to={"/nri"}> Back to Home</Link>
    </div>
  );
}
