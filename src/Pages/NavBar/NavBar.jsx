import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { getAuthToken } from "../../Services/authToken";

function NavBar() {
  const { token, user } = getAuthToken();
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/loginpage", { replace: true });
  };

  if (!token) {
    return (
      <div>
        <nav class="navbar navbar-expand-lg  bg-black px-3">
          <div class="container-fluid">
            <Link class="navbar-brand fw-bold fs-4" to="/">
              Ride Me
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link
                    class="btn btn-light text-black fw-bold rounded-pill fs-5 me-2"
                    to="/LoginPage"
                  >
                    Login
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link fs-5" to="/RegisterMainPage">
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  } else if (user.Role === "passenger") {
    return (
      <div>
        <nav class="navbar navbar-expand-lg  bg-black px-3">
          <div class="container-fluid">
            <a class="navbar-brand fw-bold fs-4">Ride Me</a>
            <button
              class="navbar-toggler bg-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse text-center ms-3"
              id="navbarNav"
            >
              <ul class="navbar-nav">
                <li class="nav-item me-2">
                  <Link class="nav-link fs-5" to="/PassengerRequestRide">
                    Request Ride
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link fs-5" to="/PassengerRideHistory">
                    Ride History
                  </Link>
                </li>
              </ul>
            </div>
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <button
                  class="btn btn-light text-black fw-bold rounded-pill "
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  } else if (user.Role === "driver") {
    return (
      <div>
        <nav class="navbar navbar-expand-lg  bg-black px-3">
          <div class="container-fluid">
            <Link class="navbar-brand fw-bold fs-4">Ride Me</Link>
            <button
              class="navbar-toggler bg-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse text-center ms-3"
              id="navbarNav"
            >
              <ul class="navbar-nav">
                <li class="nav-item me-2">
                  <Link class="nav-link fs-5" to="/PickDayMonth">
                    Total Income
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link fs-5" to="/DriverChooseRide">
                    Passengers Requests
                  </Link>
                </li>
              </ul>
            </div>
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <button
                  class="btn btn-light text-black fw-bold rounded-pill "
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  } else if (user.Role === "admin") {
    return (
      <div>
        <nav class="navbar navbar-expand-lg  bg-black px-3">
          <div class="container-fluid">
            <Link class="navbar-brand fw-bold fs-4">Ride Me</Link>
            <button
              class="navbar-toggler bg-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <button
                  class="btn btn-light text-black fw-bold rounded-pill "
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
