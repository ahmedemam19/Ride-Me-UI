import React from 'react'
import { Link } from "react-router-dom";
import './NavBar.css'

function NavBar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-black">
                <div class="container-fluid">
                    <Link class="navbar-brand text-white fw-bold" to="/">Ride Me</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon bg-white border rounded-1"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item me-1">
                                <a class="nav-link rounded-pill" href="#">Request Ride</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link rounded-pill" href="#">Ride History</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item me-1">
                                <a href="#" class="btn rounded-pill">Log In</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="btn main-btn signup-btn rounded-pill">Sign Up</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar