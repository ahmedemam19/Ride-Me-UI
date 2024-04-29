import { Link } from 'react-router-dom';

const DriverChooseRide = () => {
    return (
        <div>
            <div className="container cardDriverChooseRide my-5">
                <div>
                    <h2 className='fw-bold'>Passenger Requests</h2>
                    <div className='table-responsive'>
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Request</th>
                                    <th scope="col">Passenger Id</th>
                                    <th scope="col">Source</th>
                                    <th scope="col">Distenation</th>
                                    <th scope="col">Price</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>1234</td>
                                    <td>Ain-Shams</td>
                                    <td>Helwan</td>
                                    <td>$70</td>
                                    <td>
                                    <button className='border-0'>
                                        <Link to='/drivercurrentride' class="btn btnRideHistory">
                                            Accept
                                        </Link>
                                    </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <Link to='passengerprofile' class="btn btnRideHistory m-4 ">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DriverChooseRide;