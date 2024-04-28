import { Link } from 'react-router-dom';
import './RegisterMainPage.css';

const RegisterMainPage = () => {
    return (
        <div>
            <div className="container mt-5  ">
                <div class="row cardRequestRide  w-100 ">
                    <div class="col-lg-12 text-center fw-bold">
                        <h2 className='fw-bold'>Choose registeration based on your role .</h2>
                        <div class="row d-flex justify-content-around w-100">

                            <p class="btn form-btn m-4 col-6 ">
                                <Link to='/registerdriver'>Driver</Link>
                            </p>

                            <p class="btn form-btn m-4 col-6 ">
                                <Link to='registerpassenger'>Passenger</Link>
                            </p>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default RegisterMainPage;