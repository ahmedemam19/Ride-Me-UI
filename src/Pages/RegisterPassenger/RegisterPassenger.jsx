import { Link } from 'react-router-dom';
import './RegisterPassenger.css'

const RegisterPassenger = () => {
    return (
        <div>
            <div className='mainDiv my-5'>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center ">
                        <div className=" col-md-9  col-xl-6">
                            <div className="card">
                                <h2 className="text-center mb-5">Passenger Registeration</h2>

                                <form>
                                    <div data-mdb-input-init className="form-outline mb-4">
                                        <label className="form-label" for="">User Name</label>
                                        <input type="text" id="" className="form-control form-control-lg" />
                                    </div>

                                    <div data-mdb-input-init className="form-outline mb-4">
                                        <label className="form-label" for="">Email</label>
                                        <input type="email" id="" className="form-control form-control-lg" />
                                    </div>

                                    <div data-mdb-input-init className="form-outline mb-4">
                                        <label className="form-label" for="">Phone Number</label>
                                        <input type="tel" name="phone" id="phone" className="form-control form-control-lg" />
                                    </div>

                                    <div data-mdb-input-init className="form-outline mb-4">
                                        <label className="form-label" for="">Password</label>
                                        <input type="password" id="" className="form-control form-control-lg" />
                                    </div>

                                    <div data-mdb-input-init className="form-outline mb-4">
                                        <label className="form-label" for="">Confirm password</label>
                                        <input type="password" id="" className="form-control form-control-lg" />
                                    </div>



                                    <div className="form-check d-flex justify-content-center mb-5">
                                        <input className="form-check-input me-2 border border-1 border-black" type="checkbox" value="" id="" />
                                        <label className="form-check-label" for="">
                                            I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                                        </label>
                                    </div>

                                    <div className="d-flex justify-content-center">
                                        <Link to='registermainpage' class="btn btnRegister m-2 ">
                                            Back
                                        </Link>

                                        <Link to='/passengerrequestride' class="btn btnRegister m-2 ">
                                            Register
                                        </Link>
                                    </div>

                                    <p className="text-center text-muted mt-5 mb-0">Already have an account? <Link to='/loginpage'
                                        className="fw-bold text-body"><>Login here</></Link></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPassenger;