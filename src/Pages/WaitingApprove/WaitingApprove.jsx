import "./WaitingApprove.css";
import { Link } from "react-router-dom";

const WaitingApprove = () => {
  return (
    <div>
      <div className="container text-center my-5 cardRideHistory">
        <p className="display-5">Waiting for Admin to approve your account</p>
        <Link to={"/loginpage"} className="btn btn-primary">
          Go to login page
        </Link>
      </div>
    </div>
  );
};

export default WaitingApprove;
