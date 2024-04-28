import React from 'react'
import { Link } from 'react-router-dom';
import image from './images/1.png';
import './PassengerRequestRide.css'

function PassengerRequestRide() {
    return (
        <div>
            <body>
                <div class="container p-5">
                    <div class="row cardRequestRide">
                        <div class="col-lg-6 sec-one-left">
                            <h1><i>Go any where with <b>Ride Me</b></i></h1>
                            <p>Request a ride, hop in, and go.</p>
                            <form>
                                <input class="form-control" type="text" placeholder="Enter location" name="location" required="" />
                                <input class="form-control" type="text" placeholder="Enter destination" name="destination" required="" />
                                <input class="form-control" type="text" placeholder="Enter price" name="price" required="" />
                                <div class="d-flex justify-content-around w-100">

                                    <Link to='/passengerprofile' class="btn btnRegister m-2 ">
                                        Back
                                    </Link>

                                    <Link to='/passengerchoosingdriver' class="btn btnRegister m-2 ">
                                        Search for drivers
                                    </Link>

                                </div>
                            </form>

                        </div>
                        <div class="col-lg-6 border-0 rounded-4 sec-one-right d-flex align-items-center justify-content-center">
                            <img src={image} alt="image" />
                        </div>
                    </div>
                </div>
            </body>
        </div>
    )
}

export default PassengerRequestRide