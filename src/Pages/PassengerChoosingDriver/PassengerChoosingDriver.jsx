import React, { useEffect, useState, useReducer, Redirect } from "react";
import { Link } from "react-router-dom";
import "./PassengerChoosingDriver.css";
import carImage from "./images/package_UberComfort_new_2022.png";
import { useLocation, useNavigate  } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { getAuthToken } from "../../Services/authToken";

const PassengerChoosingDriver = () => {
  const history = useNavigate();
  const location = useLocation();
  const source = sessionStorage.getItem("source")
  const dest = sessionStorage.getItem("dest")
  const price = sessionStorage.getItem("price")
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);

  const [cities, setCities] = useState(null);
  const [carTypes, setCarTypes] = useState();
  const [drivers, setDrivers] = useState(null);

  const [filterCar, setFilterCar] = useState("");
  const [filterCity, setFilterCity] = useState("");
  const [filterSmoking, setFilterSmoking] = useState("");

  const { token, user } = getAuthToken();

  if (!token || Object.keys(token).length === 0) {
    // Token is null or empty
    toast.info("Session expired! please login again", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    history("/");
  }

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  console.log({ headers });

  useEffect(() => {
    const fetchData = async () => {
      // preventing errors from accumulating when token is empty
      try {
        // get initial drivers
        const driversResponse = await fetch(
          "https://localhost:7049/api/passenger/get-available-drivers",
          { headers }
        );
        if (!driversResponse.ok) {
          throw new Error("Failed to fetch drivers");
        }
        const driversData = await driversResponse.json();
        console.log("Authorized");
        console.log(driversData);
        setDrivers(driversData);

        // get cities
        const citiesResponse = await fetch(
          "https://localhost:7049/api/user/get-cities",
          { headers }
        );
        if (!citiesResponse.ok) {
          throw new Error("Failed to fetch cities");
        }
        const citiesData = await citiesResponse.json();
        console.log(citiesData);
        setCities(citiesData);

        // get available car types
        const carTypesResponse = await fetch(
          "https://localhost:7049/api/passenger/get-available-car-types",
          { headers }
        );
        if (!carTypesResponse.ok) {
          throw new Error("Failed to fetch car types");
        }
        const carTypesData = await carTypesResponse.json();
        console.log(carTypesData);
        setCarTypes(carTypesData);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [_]);

  // Prevent user from losing data by going back or reload {I wrote this comment >__}
  const [finishStatus, setFinishStatus] = useState(false);

  const onBeforeUnloadEvent = (event) => {
    if (!finishStatus) {
      event.preventDefault();
      event.returnValue = "";
      return "Going back will cancel all ride requests. Are you sure?";
    }
  };

  const onBackButtonEvent = (event) => {
    event.preventDefault();
    if (!finishStatus) {
      if (
        window.confirm(
          "Going back will cancel all ride requests. Are you sure?"
        )
      ) {
        setFinishStatus(true);
        // the logic here is to normally go back and delete history
        history("/passengerrequestride", {replace: true});
      } else {
        window.history.pushState(null, null, window.location.pathname);
        setFinishStatus(false);
      }
    }
  };

  useEffect(() => {
    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener("popstate", onBackButtonEvent);
    window.addEventListener("beforeunload", onBeforeUnloadEvent);

    return () => {
      window.removeEventListener("popstate", onBackButtonEvent);
      window.removeEventListener("beforeunload", onBeforeUnloadEvent);
    };
  }, []);

  // useEffect(() => {
  //   console.log(filterSmoking);
  // }, [filterSmoking]);

  const handleFilterDriver = () => {
    const url = `https://localhost:7049/api/passenger/get-filtered-drivers?carType=${filterCar}&smoking=${filterSmoking}&city=${filterCity}`;

    console.log(url);

    fetch(url, { headers })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setDrivers(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const confirmRequestSent = () => {
    toast.success("Request Sent", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const RequestAccepted = (driverName) => {
    toast.success(`Driver ${driverName} Accepted your request`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    setTimeout(() => {
      history("/passengerduringride");
    }, 2000);
  };

  const handleRequestDriver = (driverId) => {
    fetch(`https://localhost:7049/api/ride/request-ride`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        passengerId: user.UserId, // sessionStorage.getItem("userId")
        driverId: driverId,
        rideSource: source,
        rideDestination: dest,
        price: price,
      }),
    })
      .then((res) => {
        if (res.ok) {
          console.log("Ride request sent");
          confirmRequestSent();
          setDrivers(drivers.filter((d) => d.id !== driverId));
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    let interval;

    const pollRideStatus = () => {
      fetch(
        `https://localhost:7049/api/passenger/get-current-ride-status/${user.Id}`,
        { headers }
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch ride status");
          }
          return res.json(); // Parse response body as JSON
        })
        .then((data) => {
          console.log("Ride status received:", data);
          if (Array.isArray(data) && data.length === 0) {
            console.log("Ride status is empty");
          } else {
            console.log("Ride status is not empty");
            clearInterval(interval); // Stop polling when ride status is not empty
            RequestAccepted(data[0].driver);
          }
        })
        .catch((error) => {
          console.error("Error polling ride status:", error);
          clearInterval(interval); // Stop polling on error
        });
    };

    // Start polling immediately and then repeat every 5 seconds
    interval = setInterval(pollRideStatus, 5000);

    // Cleanup function to clear interval on unmount or when ride status changes
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div class="container cardChooseDriver my-4">
        <h1 className="fw-bold">Choose Driver</h1>
        <div class="row">
          <div class="col-md-3">
            <select
              class="form-select mb-3 bg-black text-white"
              id="smokingDropDown"
              name="Smoking option"
              aria-label="Smoking type"
              onChange={(e) => setFilterSmoking(e.target.value)}
            >
              <option disabled selected>
                Smoking option
              </option>
              <option value={true}>Prefere Smoking rides</option>
              <option value={false}>No Smoking rides</option>
            </select>
          </div>
          <div class="col-md-3">
            <select
              class="form-select mb-3 bg-black text-white"
              id="citiesDropDown"
              aria-label="City"
              onChange={(e) => setFilterCity(e.target.value)}
            >
              <option value="1" disabled selected>
                Select City
              </option>
              {cities &&
                cities.map((city) => (
                  <option key={city.id} value={city.name}>
                    {city.name}
                  </option>
                ))}
            </select>
          </div>
          <div class="col-md-3">
            <select
              class="form-select mb-3 bg-black text-white"
              id="carDropDown"
              aria-label="Car Type"
              onChange={(e) => setFilterCar(e.target.value)}
            >
              <option value="1" disabled selected>
                Select Car Type
              </option>
              {carTypes &&
                carTypes.map((car) => <option value={car}>{car}</option>)}
            </select>
          </div>
          <div className="col-md-3">
            {/* an attempt to make a clear filter */}

            {/* <button
              className="btn btn-outline-secondary ms-5"
              onClick={() => {setFilterCar(""); setFilterCity(""); setFilterSmoking("")}}
            >
              Clear filters
            </button> */}

            <button
              className="btn btnChooseDriver ms-5"
              onClick={() => handleFilterDriver()}
            >
              Filter
            </button>
          </div>
        </div>
        <h3>Recommended Drivers</h3>
        {drivers &&
          drivers.map((driver) => (
            <div class="table">
              <div class="body">
                <div class="item rounded-4 mb-2">
                  <div class="avatar left">
                    <img src={carImage} alt="the photo" />
                  </div>
                  <div className="col">
                    <div class="txt" key={driver.id}>
                      <div class="name fs-5 fw-bold">{driver.name}</div>
                      <div class="car-type">{driver.car}</div>
                      <div class="city">{driver.city}</div>
                      <div class="region">{driver.region}</div>
                      <div class="smoking ">
                        {driver.smoking ? "Prefare smoking" : "No smoking"}
                      </div>
                    </div>
                  </div>
                  Driver rating:
                  <div class="me-2 fw-bold">{(driver.rating === -1) ? "None" : driver.rating}</div>
                  <div class="actions me-3">
                    <button
                      class="btn btnRegister m-2 "
                      onClick={() => handleRequestDriver(driver.id)}
                    >
                      Request
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

        <div class="actions">
          <Link to="/passengerrequestride" class="btn btnRegister m-2 ">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PassengerChoosingDriver;
