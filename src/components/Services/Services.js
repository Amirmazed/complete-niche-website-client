import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      <h1>Services</h1>
      <div className="services">
        <div className="row container-fluid">
          {services?.slice(0,6).map((pd, index) => (
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
          <div><Link to="allProducts"><button className="btn btn-danger">Explore more</button></Link></div>
        </div>
      </div>
      
    </div>
  );
};

export default Services;
