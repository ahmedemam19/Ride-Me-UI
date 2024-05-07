import { Link, useNavigate } from "react-router-dom";
import { getAuthToken } from "../Services/authToken";

const NotAuth = () => {

  const { token, user } = getAuthToken();

  const navigate = useNavigate();

  const handleGoLogin = () => {
    sessionStorage.clear();
    navigate("/", { replace: true });
  };

  const handleGoToHome = () => {
    if (user.Role === "passenger"){
      navigate("/passengerrequestride", { replace: true });
    } else if (user.Role === "driver"){
      navigate("/driverchooseride", { replace: true });
    } else if (user.Role === "driver"){
      // put admin logic here
    }
  }

  return (
    <div className="container text-center my-5 cardRideHistory ">
      <h2 className="fw-bolder">Sorry.</h2>
      <p className="fs-4">Oops! You are not supposed to access this page.</p>
      <div className="row gap-5 justify-content-center">
        <button onClick={handleGoLogin} className="btn btn-primary col-2">
          Login Again
        </button>
        <button className="btn btn-primary col-2" onClick={handleGoToHome}>Go to home page</button>
      </div>
    </div>
  );
};

export default NotAuth;
