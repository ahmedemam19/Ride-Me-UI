import React, { useEffect, useState, useReducer, Redirect } from "react";
import { Link } from "react-router-dom";
import "./PassengerChoosingDriver.css";
import carImage from "./images/package_UberComfort_new_2022.png";
import { useLocation } from "react-router-dom";

const PassengerChoosingDriver = () => {
  const location = useLocation();
  const source = location.state.source;
  const dest = location.state.dest;
  const price = location.state.price;
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);

  const [cities, setCities] = useState(null);
  const [carTypes, setCarTypes] = useState();
  const [drivers, setDrivers] = useState(null);

  const [filterCar, setFilterCar] = useState("");
  const [filterCity, setFilterCity] = useState("");
  const [filterSmoking, setFilterSmoking] = useState("");

  useEffect(() => {
    // get initial drivers
    fetch("https://localhost:7049/api/passenger/get-available-drivers")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setDrivers(data);
      });
    // get cities
    fetch("https://localhost:7049/api/user/get-cities")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCities(data);
      });
    // get available car types
    fetch("https://localhost:7049/api/passenger/get-available-car-types")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCarTypes(data);
      });
  }, [_]);

  useEffect(() => {
    console.log(filterSmoking);
  }, [filterSmoking]);

  const handleFilterDriver = () => {
    const url = `https://localhost:7049/api/passenger/get-filtered-drivers?carType=${filterCar}&smoking=${filterSmoking}&city=${filterCity}`;

    console.log(url);

    fetch(url)
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

  const handleRequestDriver = (driverId) => {
    fetch(`https://localhost:7049/api/ride/request-ride`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        passengerId: localStorage.getItem("userId"),
        driverId: driverId, 
        rideSource: source,
        rideDestination: dest,
        price: price
      }),
    }).then((res) => {
        console.log("Ride request sent");
        if (res.ok) {
            
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

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
                  <div class="me-2 fw-bold">{driver.rating}</div>
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
