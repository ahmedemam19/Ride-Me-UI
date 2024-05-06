import { Navigate, Outlet } from "react-router-dom";
import { getAuthToken } from "../Services/authToken";
import NotAuth from "./unauthorized";


export const AuthGuard = ({ roles }) => {
  // const handleWrongPath = () => {
  //   sessionStorage.clear();
  //   <NotAuth />
  // }

  const { token, user } = getAuthToken();
  if (!token) {
    return (
      <> {roles.length === 0 ? <Outlet /> : <Navigate to={"/loginpage"} />} </>
    );
  } else {
    return <> {roles.find((role) => user.Role.includes(role)) ? <Outlet /> : <NotAuth />} </>;
    // return <> {roles.find((role) => user.Role.includes(role)) && <Outlet />} </>;
    
    // if (roles.find((role) => user.Role.includes(role))) {
    //   <Outlet />;
    // } else {
    //   if (roles.find((role) => user.Role.includes("passenger"))){
    //     <Navigate to={"/passengerrequestride"} />
    //   } else if (roles === "driver"){
    //     <Navigate to={"/driverchooseride"} />
    //   }
    // }
  }
};
