import React from "react";
import { Link } from "react-router-dom";
import useCookies from "react-cookie";
export default function Nav() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            React-Routing
          </Link>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to={"/"}>
                  Home
                </Link>
              </li>
              {/*  <li className="nav-item">
                <Link className="nav-link" to={"/feature"}>
                  Features
                </Link>
              </li> */}
              {cookies.user=="" && (
                <li className="nav-item">
                  <Link className="nav-link" to={"/login"}>
                    Login
                  </Link>
                </li>
              )}

              <li className="nav-item">
                <Link className="nav-link" to={"/register"}>
                  Register
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to={"/pricing"}>
                  Pricing
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

