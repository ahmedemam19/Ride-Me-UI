import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './PassengerChoosingDriver.css';
import carImage from './images/package_UberComfort_new_2022.png';



export default class PassengerChoosingDriver extends Component {
    render() {
        return (
            <div>
                <div class="container cardChooseDriver my-4">
                    <h1 className='fw-bold'>Choose Driver</h1>
                    <div class="row">
                        <div class="col-md-3">
                            <select class="form-select mb-3 bg-black text-white" id="smokingDropDown" aria-label="Smoking type">
                                <option>Smoking ?</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <select class="form-select mb-3 bg-black text-white" id="citiesDropDown" aria-label="City">
                                <option >Select City</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <select class="form-select mb-3 bg-black text-white" id="carDropDown" aria-label="Car Type">
                                <option >Car Type</option>
                            </select>
                        </div>
                        <div className='col-md-3'>
                            <button className='btn btn-danger btnChooseDriver ms-5'>Filter</button>
                        </div>
                    </div>
                    <h3>Recommended Drivers</h3>
                    <div class="table">
                        <div class="body">

                            <div class="item rounded-4 mb-2">
                                <div class="avatar left">
                                    <img src={carImage} alt="the photo" />
                                </div>
                                <div class="txt">
                                    <div class="name fs-5 fw-bold">Name of driver</div>
                                    <div class="car-type">CarType</div>
                                    <div class="city">City</div>
                                    <div class="region">Region</div>
                                    <div class="smoking ">Smoking </div>
                                </div>

                                {/* Start   Rating */}
                                <div class="me-2">
                                    Rating
                                </div>
                                {/* End   Rating */}



                                <div class="actions me-3">
                                    <Link to='/passengerduringride' class="btn btnRegister m-2 ">
                                        Request
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="actions">
                        <Link to='/passengerrequestride' class="btn btnRegister m-2 ">
                            Back
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
