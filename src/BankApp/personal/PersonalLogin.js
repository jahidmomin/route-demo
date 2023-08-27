import React from "react";
import { Link } from "react-router-dom";

export default function PersonalLogin() {
  return (
    <div>
      <h2>PersonalLogin</h2>
      <Link to={"/personal"}>Back To Personal Page</Link>
    </div>
  );
}
