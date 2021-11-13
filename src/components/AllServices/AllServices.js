import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://young-plateau-51536.herokuapp.com/allServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);
  return (
    <div>
      <h1>All Services</h1>
      <div className="services">
        <div className="row container-fluid">
          {services?.map((pd, index) => (
            <div className="col-md-6 col-lg-4">
              <div className="service p-3 border border m-2">
                <div className="service-img">
                  <img className="w-50" src={pd?.image} alt="" />
                </div>
                <h1>{pd.name}</h1>
                <p>{pd.description}</p>
                <p>${pd.price}</p>
                <Link to={`/services/${pd._id}`}>
                  {" "}
                  <button className="btn btn-success">Order Now</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer className="mt-5"></Footer>
    </div>
  );
};

export default Services;



// https://i.ibb.co/v3KYxh4/1.jpg
// https://i.ibb.co/wzTXj2K/2.jpg
// https://i.ibb.co/DVLXNnh/3.jpg
// https://i.ibb.co/KjYrvnQ/4.jpg
// https://i.ibb.co/7zvFpqY/5.jpg
// https://i.ibb.co/52TXdMR/6.jpg
// https://i.ibb.co/yBHddCf/7.jpg
// https://i.ibb.co/s3QYXmh/8.jpg
// https://i.ibb.co/5kQ21Qg/9.jpg
// https://i.ibb.co/dQW1G1r/10.jpg
// https://i.ibb.co/w49fDL6/11.jpg
// https://i.ibb.co/h8gtCCz/12.jpg
// https://i.ibb.co/B6MpcP9/13.jpg
// https://i.ibb.co/VpD6KfC/14.jpg
// https://i.ibb.co/d7RsHSW/15.jpg