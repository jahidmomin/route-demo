import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="container">
        <ul className="navbar navbar-expand-lg navbar-light">
          <li className="nav-item">
            <Link className="nav-link active" to={"/feature/contact"}>
              Child 1
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/feature/support"}>
              Child 2
            </Link>
          </li>
        </ul>
        <div className="row">
          <div className="col-4">
            <p>About</p>
          </div>
          <h2>Welcome To SubCategory </h2>
          <div className="col-6">{<Outlet />}</div>
        </div>
      </div>
    </>
  );
}

export function Child1() {
  return <div>Hello I am Contact = Fetaure 1 Sub Page</div>;
}
export function Child2() {
  return <div>Hello I am Select = Fetaure 2 Sub Page</div>;
}
