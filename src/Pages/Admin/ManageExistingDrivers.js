import { useState, useEffect, useReducer } from "react";

function ManageExistingDrivers() {
  const [drivers, setDrivers] = useState(null);
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    fetch("https://localhost:7049/api/Admin/get-accepted-or-blocked-drivers")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setDrivers(data);
      });
  }, [_]);

  let handleBlock = (id) => {
    fetch(`https://localhost:7049/api/Admin/block-driver/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: {},
    }).then(() => {
      console.log("User Blocked");
      forceUpdate();
    });
  };

  const handleUnblock = (id) => {
    fetch(`https://localhost:7049/api/Admin/unblock-driver/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: {},
    }).then(() => {
      console.log("User Unblocked");
      forceUpdate();
    });
  };
  return (
    <div className="container mt-5">
      <h1 className="display-4 text-center my-4">Manage Existing Drivers</h1>
      <table className="table table-hover table-bordered text-center">
        <thead className="table-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Car Type</th>
            <th scope="col">Smoking</th>
            <th scope="col">Rating</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {drivers &&
            drivers.map((drivers) => {
              return (
                <tr key={drivers.id}>
                  <th scope="row">{drivers.name}</th>
                  <td>{drivers.email}</td>
                  <td>{drivers.phoneNumber}</td>
                  <td>{drivers.carType}</td>
                  <td>{drivers.isSmoking && "Yes"}</td>
                  <td>{drivers.rating === -1 ? "None" : drivers.rating}</td>
                  <td className="fw-bold text-capitalize">{drivers.status}</td>
                  <td className="px-5">
                    <div className="row justify-content-center gap-3">
                      {drivers.status !== "blocked" && (
                        <button
                          type="button"
                          className="btn btn-danger col fw-semibold"
                          onClick={() => handleBlock(drivers.id)}
                        >
                          Block
                        </button>
                      )}
                      {drivers.status !== "accepted" && (
                        <button
                          type="button"
                          className="btn btn-secondary col fw-semibold"
                          onClick={() => handleUnblock(drivers.id)}
                        >
                          Unblock
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default ManageExistingDrivers;
