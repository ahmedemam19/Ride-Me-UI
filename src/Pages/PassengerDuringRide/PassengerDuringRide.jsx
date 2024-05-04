import { Link, useHistory } from "react-router-dom";
import { useState, useEffect, useReducer } from "react";
import "./PassengerDuringRide.css";
import { ToastContainer, toast } from "react-toastify";

const PassengerDuringRide = () => {
  const history = useHistory();

  const [currentRideInfo, setCurrentRideInfo] = useState(null);
  const [rideStatus, setRideStatus] = useState(null);
  const [currentRideId, setCurrentRideId] = useState();

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    fetch(
      `https://localhost:7049/api/passenger/get-current-ride-status/${sessionStorage.getItem(
        "roleId"
      )}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCurrentRideInfo(data);
        setCurrentRideId(data[0].rideId);
        sessionStorage.setItem("currentRideId", data[0].rideId);
        sessionStorage.setItem("currentRideDriverName", data[0].driver);
        sessionStorage.setItem("currentRideSource", data[0].source);
        sessionStorage.setItem("currentRideDestination", data[0].destination);
        sessionStorage.setItem("currentRidePrice", data[0].price);
      });
  }, []);

  const handleConfirmPayment = () => {
    toast.success("Payment Confirmed", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    toast.info("Redirecting to feedback...", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    setRideStatus(true);
    setTimeout(() => {
      history.push("/feedback");
    }, 4000);
  };

  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="card-druing-ride mt-5">
          <div className="row">
            <h2 className="fw-bold">Current Ride Status</h2>
            <div>
              <div className="form-group row w-100">
                <div className="col-6 h5">
                  <label for="source">Driver Name:</label>
                  <div className=" col-lg-12">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={currentRideInfo && currentRideInfo[0].driver}
                      readonly
                    />
                  </div>
                </div>
                <div className="col-6 h5">
                  <label for="destination">Phone Number:</label>
                  <div className=" col-lg-12 ">
                    <input
                      type="text"
                      className="form-control"
                      id="phoneNumber"
                      value={
                        currentRideInfo && currentRideInfo[0].driverPhoneNumber
                      }
                      readonly
                    />
                  </div>
                </div>
              </div>
              <div className="form-group row w-100">
                <div className="col-6 h5">
                  <label for="phoneNumber">Source:</label>
                  <div className="col-lg-12">
                    <input
                      type="tel"
                      className="form-control"
                      id="Source"
                      value={currentRideInfo && currentRideInfo[0].source}
                      readonly
                    />
                  </div>
                </div>
                <div className="col-6 h5">
                  <label for="price">Destination:</label>
                  <div className="col-lg-12">
                    <input
                      type="text"
                      className="form-control"
                      id="Destination"
                      value={currentRideInfo && currentRideInfo[0].destination}
                      readonly
                    />
                  </div>
                </div>

                <div className="col-6 h5">
                  <label for="price">Price:</label>
                  <div className="col-lg-12">
                    <input
                      type="text"
                      className="form-control"
                      id="price"
                      value={currentRideInfo && currentRideInfo[0].price}
                      readonly
                    />
                  </div>
                </div>

                <div className="col-6 h5">
                  <label for="price">Ride Status:</label>
                  <div className="col-lg-12">
                    <input
                      type="text"
                      className={`form-control text-light ${
                        rideStatus ? "bg-success" : "bg-primary"
                      }`}
                      id="status"
                      value={rideStatus ? "completed" : "not completed"}
                      readonly
                    />
                  </div>
                </div>
              </div>
              <div className="form-group row w-100">
                <div className="col d-flex justify-content-center">
                  <button
                    className={`btn ${
                      rideStatus ? "btn-success" : "btn-primary"
                    } fw-semibold`}
                    onClick={handleConfirmPayment}
                  >
                    Confirm Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PassengerDuringRide;
