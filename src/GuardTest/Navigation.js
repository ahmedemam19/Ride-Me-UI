import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
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

export const nav = [
  {
    path: "/",
    name: "IntroPage",
    element: <IntroPage />,
    isAuth: false,
    isPassenger: true,
    isDriver: true,
  },
  {
    path: "/registermainpage",
    name: "RegisterMain",
    element: <RegisterMainPage />,
    isAuth: false,
    isPassenger: true,
    isDriver: true,
  },
  {
    path: "/registerdriver",
    name: "RegisterDriver",
    element: <RegisterMainPage />,
    isAuth: false,
    isPassenger: true,
    isDriver: true,
  },
  {
    path: "/registerpassenger",
    name: "RegisterPassenger",
    element: <RegisterPassenger />,
    isAuth: false,
    isPassenger: true,
    isDriver: true,
  },
  {
    path: "/loginpage",
    name: "Login",
    element: <LoginPage />,
    isAuth: false,
    isPassenger: true,
    isDriver: true,
  },
  {
    path: "/passengerridehistory",
    name: "Passenger Ride History",
    element: <PassengerRideHistory />,
    isAuth: true,
    isPassenger: true,
    isDriver: false,
  },
  {
    path: "/passengerchoosingdriver",
    name: "Passenger Choose driver",
    element: <PassengerChoosingDriver />,
    isAuth: true,
    isPassenger: true,
    isDriver: false,
  },
  {
    path: "/passengerduringride",
    name: "Passenger during ride",
    element: <PassengerDuringRide />,
    isAuth: true,
    isPassenger: true,
    isDriver: false,
  },
  {
    path: "/feedback",
    name: "Feedback",
    element: <FeedBack />,
    isAuth: true,
    isPassenger: true,
    isDriver: false,
  },
];
