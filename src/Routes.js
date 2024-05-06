import { Navigate, createBrowserRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { App } from "./App";
import Footer from "./Pages/Footer/Footer.jsx"
import Navbar from "./Pages/NavBar/NavBar.jsx"
import PassengerRequestRide from "./Pages/PassengerRequestRide/PassengerRequestRide";
import PassengerChoosingDriver from "./Pages/PassengerChoosingDriver/PassengerChoosingDriver";
import PassengerDuringRide from "./Pages/PassengerDuringRide/PassengerDuringRide";
import FeedBack from "./Pages/FeedBack/FeedBack";
import PassengerRideHistory from "./Pages/PassengerRideHistory/PassengerRideHistory";
import IntroPage from "./Pages/IntroPage/IntroPage";
import RegisterDriver from "./Pages/RegisterDriver/RegisterDriver";
import RegisterPassenger from "./Pages/RegisterPassenger/RegisterPassenger";
import LoginPage from "./Pages/LoginPage/LoginPage";
import NotFound from "./NotFound/NotFound";
import RegisterMainPage from "./Pages/RegisterMainPage/RegisterMainPage";
import WaitingApprove from "./Pages/WaitingApprove/WaitingApprove";
import DriverChooseRide from "./Pages/DriverChooseRide/DriverChooseRide";
import DriverCurrentRide from "./Pages/DriverCurrentRide/DriverCurrentRide";
import PickDayMonth from "./Pages/DriverCalculateIncome/PickDayMonth";
import Admin from "./Pages/Admin/AdminPage.js";
import { AuthGuard } from "./guards/authGuard.js";
import { getAuthToken } from "./Services/authToken.js";

  


export const routes = createBrowserRouter([
  {
    path: "", //localhost:3000
    element: <App />,
    children: [
      {
        //if (user.Role === "passenger"){
        path: `/`,
        element: <IntroPage />,
        //}
      },
      {
        // Guard
        element: <AuthGuard roles={[]} />,
        children: [
          {
            path: "/loginpage",
            element: <LoginPage />,
          },
          {
            path: "/registermainpage",
            element: <RegisterMainPage />,
          },
          {
            path: "/registerdriver",
            element: <RegisterDriver />,
          },
          {
            path: "/registerpassenger",
            element: <RegisterPassenger />,
          },
          {
            path: "/waitingapprove",
            element: <WaitingApprove />,
          },
        ],
      },

      // Guard for admins
      {
        element: <AuthGuard roles={["admin"]} />,
        children: [
          {
            path: "/adminpage",
            element: <Admin />,
          },
        ],
      },

      // Guard for Passenger
      {
        element: <AuthGuard roles={["passenger"]} />,
        children: [
          {
            path: "/passengerridehistory",
            element: <PassengerRideHistory />,
          },
          {
            path: "/passengerrequestride",
            element: <PassengerRequestRide />,
          },
          {
            path: "/passengerchoosingdriver",
            element: <PassengerChoosingDriver />,
          },
          {
            path: "/passengerduringride",
            element: <PassengerDuringRide />,
          },
          {
            path: "/feedback",
            element: <FeedBack />,
          },
        ],
      },

      // Guard for Driver
      {
        element: <AuthGuard roles={["driver"]} />,
        children: [
          {
            path: "/driverchooseride",
            element: <DriverChooseRide />,
          },
          {
            path: "/drivercurrentride",
            element: <DriverCurrentRide />,
          },
          {
            path: "/pickdaymonth",
            element: <PickDayMonth />,
          },
          {
            path: "/passengerduringride",
            element: <PassengerDuringRide />,
          },
          {
            path: "/feedback",
            element: <FeedBack />,
          },
        ],
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
