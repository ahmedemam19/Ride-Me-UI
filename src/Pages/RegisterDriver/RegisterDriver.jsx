import './RegisterDriver.css';

const RegisterDriver = () => {
    return (
        <div className='mainDiv my-5'>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center ">
                    <div className=" col-md-9  col-xl-6">
                        <div className="card">
                            <h2 className="text-center mb-5">Driver Registeration</h2>

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
                                    <label className="form-label" for="">Password</label>
                                    <input type="password" id="" className="form-control form-control-lg" />
                                </div>

                                <div data-mdb-input-init className="form-outline mb-4">
                                    <label className="form-label" for="">Confirm password</label>
                                    <input type="password" id="" className="form-control form-control-lg" />
                                </div>

                                <div data-mdb-input-init className="form-outline mb-4">
                                    <label className="form-label" for="">Phone Number</label>
                                    <input type="tel" name="phone" id="phone" className="form-control form-control-lg" />
                                </div>

                                <div class=" mb-4">
                                    <label className="form-label" for="">Car Type</label>
                                    <select data-mdb-select-init className='form-select form-control p-2'>
                                        <option value="1" disabled selected>Selct Car Type</option>
                                        <option value="2">Toyota</option>
                                        <option value="3">BMW</option>
                                        <option value="4">Mercedes</option>
                                    </select>
                                </div>

                                <div className='d-flex mb-4 row'>
                                    <label className="form-label" for="">Are you a Smoker ?</label>
                                    <div className='d-flex'>
                                        <div class="form-check d-flex flex-row align-items-center mx-4 ">
                                            <input class="form-check-input me-2 border border-1 border-black" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label class="form-check-label" for="flexRadioDefault1">
                                                YES
                                            </label>
                                        </div>
                                        <div class="form-check d-flex flex-row align-items-center">
                                            <input class="form-check-input me-2 border border-1 border-black" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label class="form-check-label" for="flexRadioDefault1">
                                                NO
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div class=" mb-4">
                                    <label className="form-label" for="">City</label>
                                    <select data-mdb-select-init className='form-select form-control p-2'>
                                        <option value="1" disabled selected>Select City</option>
                                        <option value="2">Cairo</option>
                                        <option value="3">Alex</option>
                                        <option value="4">Giza</option>
                                    </select>
                                </div>

                                <div class=" mb-4">
                                    <label className="form-label" for="">Region</label>
                                    <select data-mdb-select-init className='form-select form-control p-2'>
                                        <option value="1" disabled selected>Select Region</option>
                                        <option value="2">Haram</option>
                                        <option value="3">Ain Shams</option>
                                        <option value="4">Helwan</option>
                                        <option value="5">6th October</option>
                                    </select>
                                </div>

                                <div className="form-check d-flex justify-content-center mb-5">
                                    <input className="form-check-input me-2 border border-1 border-black" type="checkbox" value="" id="" />
                                    <label className="form-check-label" for="">
                                        I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                                    </label>
                                </div>

                                <div className="d-flex justify-content-center">
                                    <button type="button" className="btn btnRegister">Register</button>
                                </div>

                                <p className="text-center text-muted mt-5 mb-0">Already have an account? <a href="#!"
                                    className="fw-bold text-body"><u>Login here</u></a></p>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterDriver;