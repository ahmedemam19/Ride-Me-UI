import { useState, useEffect, useReducer } from "react";
import { Link, Redirect, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { getAuthToken } from "../../Services/authToken";

const DriverChooseRide = () => {
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);

  const [redirectCurrentRide, setRedirectCurrentRide] = useState(false);

  const [requests, setRequests] = useState();

  const [available, setAvailable] = useState(
    sessionStorage.getItem("Available")
  );

  const [cities, setCities] = useState(null);

  const { token, user } = getAuthToken();

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  useEffect(() => {
    fetch(`https://localhost:7049/api/Driver/get-requested-ride/${user.Id}`, {
      headers,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setRequests(data);
      });
  }, [_]);

  const reqAcceptNotification = () => {
    toast.success("Request Accepted: Redirecting...", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const reqRejectNotification = () => {
    toast.info("Request rejected", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleAcceptRequest = (rideId, rideSource, rideDest, ridePrice) => {
    fetch(`https://localhost:7049/api/driver/accept-ride/${rideId}`, {
      method: "PUT",
      headers,
    })
      .then((res) => {
        if (res.ok) {
          console.log("Ride request accepted");
          reqAcceptNotification();
          sessionStorage.setItem("currentRideSource", rideSource);
          sessionStorage.setItem("currentRideDest", rideDest);
          sessionStorage.setItem("currentRidePrice", ridePrice);
          setTimeout(() => {
            setRedirectCurrentRide(true);
          }, 4000);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleReject = (rideId) => {
    fetch(`https://localhost:7049/api/driver/reject-ride/${rideId}`, {
      method: "PUT",
      headers,
    })
      .then((res) => {
        if (res.ok) {
          console.log("Ride request rejected");
          reqRejectNotification();
          forceUpdate();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  if (redirectCurrentRide) {
    return <Navigate to="/drivercurrentride" />;
  }

  const handleSetAvailable = () => {
    fetch(`https://localhost:7049/api/driver/available/${user.Id}`, {
      method: "PUT",
      headers,
    })
      .then((res) => {
        if (res.ok) {
          console.log("Set to Available");
          setAvailable(true);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleSetNotAvailable = () => {
    fetch(`https://localhost:7049/api/driver/not-available/${user.Id}`, {
      method: "PUT",
      headers,
    })
      .then((res) => {
        if (res.ok) {
          console.log("Set to Not Available");
          setAvailable(false);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <div className="container cardDriverChooseRide my-5">
        <div>
          <div className="availbaility buttons row d-flex justify-content-center text-center gap-2">
            <div
              className={`mb-1 h4 ${
                available ? "text-success" : "text-danger"
              }`}
            >
              Current Availability: {available ? "Available" : "Not Available"}
            </div>
            <button
              className="col-2 btn btn-primary"
              onClick={handleSetAvailable}
            >
              Available for rides
            </button>
            <button
              className="col-2 btn btn-secondary"
              onClick={handleSetNotAvailable}
            >
              Not Available
            </button>
          </div>
          <h2 className="fw-bold">Passenger Requests</h2>
          <div className="table-responsive">
            <table class="table table-hover text-center ">
              <thead className="table-dark">
                <tr>
                  <th scope="col">Request</th>
                  <th scope="col">Passenger Name</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Source</th>
                  <th scope="col">Destination</th>
                  <th scope="col">Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {requests &&
                  requests.map((request) => {
                    return (
                      <tr>
                        <td>{request.ride.id}</td>
                        <td>{request.passengerName}</td>
                        <td>{request.passengerPhone}</td>
                        <td>{request.ride.rideSource}</td>
                        <td>{request.ride.rideDestination}</td>
                        <td>{request.ride.price}</td>
                        <td>
                          <button
                            className="btn btn-success me-2 fw-semibold"
                            onClick={() =>
                              handleAcceptRequest(
                                request.ride.id,
                                request.ride.rideSource,
                                request.ride.rideDestination,
                                request.ride.price
                              )
                            }
                          >
                            Accept
                          </button>
                          <button
                            className="btn btn-danger ms-2 fw-semibold"
                            onClick={() => handleReject(request.ride.id)}
                          >
                            Reject
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <div>
            <Link to="passengerprofile" class="btn btnRideHistory m-4 ">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverChooseRide;
