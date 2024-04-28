import React, { Component } from 'react'
import './PassengerDuringRide.css';

export default class PassengerDuringRide extends Component {
  render() {
    return (
      <div>
        <div className="container mt-5 mb-5">
          <div className='card-druing-ride mt-5'>
            <div className="row">
              <h2 className='fw-bold'>Current Ride Status</h2>
              <div>
                <div className="form-group row w-100">
                  <div className='col-6'>
                    <label for="source">Source :</label>
                    <div className=" col-lg-12">
                      <input type="text" className="form-control" id="source" value="Ain-Shams" readonly />
                    </div>
                  </div>
                  <div className='col-6'>
                    <label for="destination">Destination :</label>
                    <div className=" col-lg-12">
                      <input type="text" className="form-control" id="destination" value="Helwan" readonly />
                    </div>
                  </div>
                </div>
                <div className="form-group row w-100">
                  <div className='col-6'>
                    <label for="phoneNumber" >Phone Number :</label>
                    <div className="col-lg-12">
                      <input type="tel" className="form-control" id="phoneNumber" value="123-456-7890" readonly />
                    </div>
                  </div>
                  <div className='col-6'>
                    <label for="price">Price :</label>
                    <div className="col-lg-12">
                      <input type="text" className="form-control" id="price" value="$50.00" readonly />
                    </div>
                  </div>
                </div>
                <div className="form-group row w-100">
                  <div className="col-6">
                    <button type="button" className="btn btn-duringRide">Back</button>
                  </div>
                  <div className="col-6">
                    <button type="button" className="btn btn-duringRide">Confirm Payment</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}
