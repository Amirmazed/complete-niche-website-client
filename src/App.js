import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Menubar from "./components/Menubar/Menubar";
import Home from "./components/Home/Home";
import AddServices from "./components/AddServices/AddServices";
import Register from "./components/Register/Register";
import Services from "./components/Services/Services";
import Dashbaord from "./components/Dasboard/Dashbaord";
import Details from "./components/Details/Details";
import MyBookings from "./components/MyBookings/MyBookings";
import MangeOrder from "./components/MangeOrder/MangeOrder";
import Allreviews from "./components/Allreviews/Allreviews";
import AuthProvider from "./contexts/AuthProvider";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AllServices from "./components/AllServices/AllServices";
import Header from "./components/Header/Header";
import Pay from "./components/Pay/Pay";
import Nothing from "./components/Nothing/Nothing";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        {/* <Menubar></Menubar> */}
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route exact path="/allProducts">
            <AllServices></AllServices>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/review">
            <Allreviews></Allreviews>
          </Route>
          <PrivateRoute path="/myOrder">
            <MyBookings></MyBookings>
          </PrivateRoute>
          <PrivateRoute path="/pay">
            <Pay></Pay>
          </PrivateRoute>
          <PrivateRoute exact path="/services/:serviceId">
            <Details></Details>
          </PrivateRoute>
          <Route exact path="/addServices">
            <AddServices></AddServices>
          </Route>
          <Route exact path="/manageOrders">
            <MangeOrder></MangeOrder>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashbaord></Dashbaord>
        </PrivateRoute>
          <Route exact path="/addService">
            <AddServices></AddServices>
          </Route>

          <Route path="*">
        <Nothing></Nothing>
        </Route>

        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
