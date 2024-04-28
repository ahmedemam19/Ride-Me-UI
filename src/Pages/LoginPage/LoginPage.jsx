import { Link } from "react-router-dom";
import './LoginPage.css'
import image from './images/photo-1539787200876-3c033a7bebcd.jpeg';

const LoginPage = () => {
    return (

        <div>
            <section className=" secondColor" >
                <div className="container my-5">
                    <div className="row d-flex justify-content-center align-items-center ">
                        <div className="col col-xl-10">
                            <div className="card border rounded-3">
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img src={image}  alt="login form" className="img-fluid rounded-3" />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body  p-lg-5 text-black">

                                            <form>

                                                <div className="d-flex align-items-center">
                                                    <i className="fas fa-car-side fa-2x me-3 thirdColor" ></i>
                                                    <span className="h1 fw-bold">Login</span>
                                                </div>

                                                <h5 className="fw-normal mb-3 pb-3" >Sign into your account</h5>

                                                <div data-mdb-input-init className="form-outline mb-4">
                                                    <label className="form-label" for="form2Example17">Email address</label>
                                                    <input type="email" id="form2Example17" className="form-control form-control-lg" />
                                                </div>

                                                <div data-mdb-input-init className="form-outline mb-4">
                                                    <label className="form-label" for="form2Example27">Password</label>
                                                    <input type="password" id="form2Example27" className="form-control form-control-lg" />
                                                </div>

                                                <div className="pt-1 mb-4">
                                                    <button data-mdb-button-init data-mdb-ripple-init className="btn btn-dark btn-lg btn-block" type="button">Login</button>
                                                </div>

                                                <p >Don't have an account? <Link to='/registermainpage'>Register here</Link></p>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default LoginPage;