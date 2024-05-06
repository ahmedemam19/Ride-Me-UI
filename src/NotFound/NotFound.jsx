import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="container text-center my-5 cardRideHistory">
      <h2 className="fw-bolder">Sorry.</h2>
      <p className="fs-4">that page can't be found</p>
      <button class="btn btnRegister m-4 " onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};

export default NotFound;
