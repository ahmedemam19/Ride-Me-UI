import { Link } from 'react-router-dom';


const DriverCurrentRide = () => {
    return (
        <div>
            <div className="container mt-5 mb-5">
                <div className='card-druing-ride mt-5'>
                    <div className="row">
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                        <h2 className='fw-bold'>Driver Current Ride</h2>
                            <div className="form-group row w-100">
                                <div className='col-12'>
                                    <label for="source">Source :</label>
                                    <div className=" col-lg-12">
                                        <input type="text" className="form-control" id="source" value="Ain-Shams" readonly />
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <label for="destination">Destination :</label>
                                    <div className=" col-lg-12">
                                        <input type="text" className="form-control" id="destination" value="Helwan" readonly />
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <label for="price">Price :</label>
                                    <div className="col-lg-12">
                                        <input type="text" className="form-control" id="price" value="$50.00" readonly />
                                    </div>
                                </div>
                            </div>
                           
                            <div className="form-group d-flex align-items-center justify-content-evenly w-100">
                                <div className="">
                                    <Link to='/driverchooseride' class="btn btnRegister m-2 ">
                                        Back
                                    </Link>
                                </div>
                                <div className="">
                                    <Link to='/driverridehistory' class="btn btnRegister m-2 ">
                                        Confirm Payment
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DriverCurrentRide;