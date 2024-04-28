import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import PassengerRequestRide from './Pages/PassengerRequestRide/PassengerRequestRide';
import PassengerChoosingDriver from './Pages/PassengerChoosingDriver/PassengerChoosingDriver';
import PassengerDuringRide from './Pages/PassengerDuringRide/PassengerDuringRide';
import FeedBack from './Pages/FeedBack/FeedBack';
import PassengerRideHistory from './Pages/PassengerRideHistory/PassengerRideHistory';
import IntroPage from './Pages/IntroPage/IntroPage';
import RegisterDriver from './Pages/RegisterDriver/RegisterDriver';
import RegisterPassenger from './Pages/RegisterPassenger/RegisterPassenger';
import LoginPage from './Pages/LoginPage/LoginPage';
import NotFound from "./NotFound/NotFound";
import RegisterMainPage from "./Pages/RegisterMainPage/RegisterMainPage";



function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/registermainpage">
              <RegisterMainPage />
            </Route>
            {/* <Route exact path="/">
              <IntroPage />
            </Route> */}
            {/* <Route  path="/registerdriver">
              <RegisterDriver />
            </Route> */}
            {/* <Route  path="/registerpassenger">
              <RegisterPassenger />
            </Route> */}
            {/* <Route  path="/loginpage">
              <LoginPage />
            </Route> */}
            {/* <Route  path="*">
              <NotFound />
            </Route> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
