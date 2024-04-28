import React from 'react'
import { Link } from 'react-router-dom';
import './FeedBack.css';

function FeedBack() {
    return (
        <div>
            <div>
                <div className="container mt-5 mb-5">
                    <div className="cardFeedBack">
                        <h2 className='fw-bold'>Ride FeedBack</h2>
                        <div className="">
                            <div className=" Ride-Details form-group w-100">
                                <div className=' col-sm-12 w-100'>
                                    <label for="source">Source :</label>
                                    <div className=" col-lg-12">
                                        <input type="text" className="form-control" id="source" value="Ain-Shams" readonly />
                                    </div>
                                </div>
                                <div className='col-sm-12 w-100'>
                                    <label for="destination">Destination :</label>
                                    <div className=" col-lg-12">
                                        <input type="text" className="form-control" id="destination" value="Helwan" readonly />
                                    </div>
                                </div>
                                <div className='col-sm-12 w-25 '>
                                    <label for="destination">Price :</label>
                                    <div className=" col-lg-12">
                                        <input type="text" className="form-control" id="Price" value="$50.00" readonly />
                                    </div>
                                </div>
                            </div>

                            <form class="was-validated">
                                <div class="mb-3 text-area-field">
                                    <label for="validationTextarea" class="form-label fw-bold">Please tell us your Feedback about the Ride and if their is any comments on the driver !!</label>
                                    <textarea class="form-control" id="validationTextarea" placeholder="Your Comment" required></textarea>
                                    <div class="invalid-feedback">
                                        Your message is required !!
                                    </div>
                                </div>


                                <div class="mb-3">
                                    <label for="ratingForm" class="form-label fw-bold">Rating for the ride :</label>
                                    <select class="form-select" required aria-label="select example">
                                        <option value="">Select Rating</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                    <div class="invalid-feedback">Rating is required</div>
                                </div>


                                <div className=' mb-3 d-flex justify-content-around'>
                                    <div class="">
                                    <Link to='/passengerduringride' class="btn btnRegister m-2 ">
                                        Back
                                    </Link>
                                    </div>
                                    <div class="">
                                        <button class="btn " type="submit">
                                            <Link to='/passengerridehistory' class="btn btnRegister m-2 ">
                                            Submit
                                            </Link>
                                        </button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedBack