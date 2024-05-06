import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { getAuthToken } from "../../Services/authToken";

function NavBar() {
  const [showLogout, setShowLogout] = useState(false);
  const { token, user } = getAuthToken();

  const handleLogout = () => {};

  if (!token) {
    return (
      <div className="d-flex justify-content">
        <div className=" justify-content-end pe-3 bg-dark gap-3 py-3 border-bottom">

        </div>
        <div className="d-flex justify-content-end pe-3 bg-dark gap-3 py-3 border-bottom">
          <button className="col-1 btn btn-info rounded-pill">Login</button>
          <button className="col-1 btn btn-info rounded-pill">Signup</button>
        </div>
      </div>
    );
  } else if (user.Role === "passenger") {
    return (
      <div className="row bg-dark">
        <button>Login</button>
        <button>Login</button>
      </div>
    );
  } else if (user.Role === "driver") {
  } else if (user.Role === "admin") {
  }
}

export default NavBar;
