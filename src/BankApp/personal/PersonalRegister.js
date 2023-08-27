import React from "react";
import { Link } from "react-router-dom";

export default function PersonalRegister() {
  return (
    <div>
      <h2>PersonalRegistwr</h2>
      <Link to={"/personal"}>Back To Personal Page</Link>
    </div>
  );
}
