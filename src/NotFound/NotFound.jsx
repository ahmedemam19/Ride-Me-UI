import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="container text-center mt-5">
            <h2 className="fw-bolder">Sorry.</h2>
            <p className="fs-4">that page can't be found</p>
            <Link className="text-decoration-none border border-danger border-1 p-1 rounded-4" to="/">Back to Home Page</Link>
        </div>
     );
}
 
export default NotFound;