import { useState, useEffect, useReducer } from "react";
import { getAuthToken } from "../../Services/authToken";

function AdminShowRides() {
  const [rides, setRides] = useState(null);
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);
  const { token, user } = getAuthToken();

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  useEffect(() => {
    fetch("https://localhost:7049/api/Admin/get-all-rides", { headers })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setRides(data);
      });
  }, [_]);

  return (
    <div className="container mt-5">
      <h1 className="display-4 text-center my-4">Rides Results</h1>
      <table className="table table-hover table-bordered text-center">
        <thead className="table-dark">
          <tr>
            <th scope="col">Driver Name</th>
            <th scope="col">Passenger Name</th>
            <th scope="col">Source</th>
            <th scope="col">Destination</th>
            <th scope="col">Price</th>
            <th scope="col">Rating</th>
            <th scope="col">Feedback</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {rides &&
            rides.map((ride) => {
              return (
                <tr key={ride.rideId}>
                  <th scope="row">{ride.driverName}</th>
                  <td>{ride.passengerName}</td>
                  <td>{ride.rideSource}</td>
                  <td>{ride.rideDestination}</td>
                  <td>{ride.price}</td>
                  <td>{ride.rating}</td>
                  <td>{ride.feedback}</td>
                  <td className="px-5">
                    <div className="row justify-content-center gap-3">
                      {ride.status === "completed" && (
                          <button
                            type="button"
                            className="btn btn-success col fw-semibold"
                          >
                            Completed
                          </button>
                        )}
                      {ride.status === "not completed" && (
                          <button
                            type="button"
                            className="btn btn-warning col fw-semibold"
                          >
                            Not Completed
                          </button>
                        )}
                        {ride.status === "requested" && (
                          <button
                            type="button"
                            className="btn btn-info col fw-semibold"
                          >
                            Requested
                          </button>
                        )}
                        {ride.status === "rejected" && (
                          <button
                            type="button"
                            className="btn btn-danger col fw-semibold"
                          >
                            Rejected
                          </button>
                        )}
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default AdminShowRides;
