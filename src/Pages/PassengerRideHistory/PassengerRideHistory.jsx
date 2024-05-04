import { Link } from "react-router-dom";
import { useState, useEffect, useReducer } from "react";
import "./PassengerRideHistory.css";

const PassengerRideHistory = () => {
  const [rides, setRides] = useState();

  useEffect(() => {
    fetch(
      `https://localhost:7049/api/Passenger/get-passenger-ride-history/${sessionStorage.getItem(
        "roleId"
      )}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setRides(data);
      });
  }, []);

  return (
    <div>
      <div className="container cardRideHistory my-5">
        <div>
          <h2 className="fw-bold">Rides History</h2>
          <div className="table-responsive">
            <table class="table table-striped table-hover text-center">
              <thead className="table-dark">
                <tr>
                  <th scope="col">Ride Id</th>
                  <th scope="col">Driver Name</th>
                  <th scope="col">Driver Phone number</th>
                  <th scope="col">Source</th>
                  <th scope="col">Destination</th>
                  <th scope="col">Status</th>
                  <th scope="col">Price</th>
                  <th scope="col">Rating</th>
                  <th scope="col">FeedBack</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                {rides &&
                  rides.map((ride) => {
                    return (
                      <tr key={ride.rideId}>
                        <th scope="row">{ride.rideId}</th>
                        <td>{ride.driver}</td>
                        <td>{ride.driverPhoneNumber}</td>
                        <td>{ride.source}</td>
                        <td>{ride.destination}</td>
                        <td>{ride.status}</td>
                        <td>{ride.price}</td>
                        <td>{ride.rating}</td>
                        <td>{ride.feedback}</td>
                        <td>{ride.date}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <div>
            <Link to="passengerprofile" class="btn btnRegister m-4 ">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassengerRideHistory;
