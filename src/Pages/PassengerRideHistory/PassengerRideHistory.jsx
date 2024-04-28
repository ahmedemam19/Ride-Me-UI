import { Link } from 'react-router-dom';
import './PassengerRideHistory.css';

const PassengerRideHistory = () => {
    return (
        <div>
            <div className="container cardRideHistory my-5">
                <div>
                    <h2 className='fw-bold'>Rides History</h2>
                    <div className='table-responsive'>
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Ride Id</th>
                                    <th scope="col">Passenger Id</th>
                                    <th scope="col">Driver Id</th>
                                    <th scope="col">Source</th>
                                    <th scope="col">Distenation</th>
                                    <th scope="col">Status Id</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Rating</th>
                                    <th scope="col">FeedBack</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>1234</td>
                                    <td>5678</td>
                                    <td>Ain-Shams</td>
                                    <td>Helwan</td>
                                    <td>Waiting</td>
                                    <td>$70</td>
                                    <td>4</td>
                                    <td>Good</td>
                                    <td>23/4/2024</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <Link to='passengerprofile' class="btn btnRegister m-4 ">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PassengerRideHistory;