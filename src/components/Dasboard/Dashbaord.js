import React, { useEffect, useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import "./Dashboard.css";
import AddServices from "./../AddServices/AddServices";
import Review from "./../Review/Review";
import MyBookings from "./../MyBookings/MyBookings";
import MakeAdmin from "./../MakeAdmin/MakeAdmin";
import ManageOrder from "../MangeOrder/MangeOrder"
import ManageServices from "./../ManageServices/ManageServices";
import useFirebase from "./../../Hook/useFirebase";
import useAuth from "../../Hook/useAuth";
import Pay from "../Pay/Pay";
import Footer from "../Footer/Footer";


const Dashbaord = () => {
  let { path, url } = useRouteMatch();
  
  const { user } = useAuth();
  const [isAdmi, setIsAdmin] = useState(false);
  console.log(user)

  useEffect(() => {
    fetch(`https://young-plateau-51536.herokuapp.com/checkAdmin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data[0]?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [user?.email]);
  console.log(isAdmi);
  return (
    <div>
      <div className="dashboard-container ">
        <div className="row">
          <div className="col-md-3 ">
            <div className="dashboard">
              <h5>Dashboard</h5>
              <div className="common-dashboard">
                <Link to={`${url}`}>
                  <li className="dashboard-menu mt-5">Dash-home</li>
                </Link>

                <Link to={`${url}/BookingList`}>
                  <li className="dashboard-menu mt-5">Booking list</li>
                </Link>

                <Link to={`${url}/review`}>
                  <li className="dashboard-menu mt-5">Review</li>
                </Link>

                <Link to={`${url}/pay`}>
                  <li className="dashboard-menu mt-5">Pay</li>
                </Link>



                {/* <div><Link to="/pay"><button className="btn btn-success w-25">Pay now</button></Link></div> */}
              </div>
              
              <div className="admin-dashboard">
                <li className="dashboard-menu mt-5">Admin Access</li>

                {isAdmi && (
                  <Link to={`${url}/addService`}>
                    <li className="dashboard-menu">Add Service</li>
                  </Link>
                )}
                {isAdmi && (
                  <Link to={`${url}/makeAdmin`}>
                  <li className="dashboard-menu">Make Admin</li>
                </Link>
                )}

                {/* {isAdmi && (
                  <Link to={`${url}/manageServices`}>
                  <li className="dashboard-menu">Manage Service</li>
                </Link>
                )} */}
                
                {isAdmi && (
                  <Link to={`${url}/manageOrders`}>
                  <li className="dashboard-menu">Manage Orders</li>
                </Link>
                )}
                
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <Switch>
              <Route exact path={path}>
                <MyBookings></MyBookings>
              </Route>
              <Route exact path={`${path}/review`}>
                <Review></Review>
              </Route>
              <Route exact path={`${path}/pay`}>
                <Pay></Pay>
              </Route>
              <Route exact path={`${path}/BookingList`}>
                <MyBookings></MyBookings>
              </Route>
              <Route exact path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </Route>
              <Route exact path={`${path}/addService`}>
                <AddServices></AddServices>
              </Route>
              {/* <Route exact path={`${path}/manageServices`}>
                <ManageServices></ManageServices>
              </Route> */}
              <Route exact path={`${path}/manageOrders`}>
                <ManageOrder></ManageOrder>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashbaord;
