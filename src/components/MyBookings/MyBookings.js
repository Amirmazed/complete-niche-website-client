import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import Footer from "../Footer/Footer";
import useFirebase from "./../../Hook/useFirebase";

const MyBookings = () => {
  // const { user } = useFirebase();
  const {user} = useAuth();
  console.log(user)
  const [order, setOrder] = useState([]);


//url = http://localhost:5000/remove/${id}
// const handleDelete = id => {
//   const url = `http://localhost:5000/remove/${id}`;
//   console.log(id)
// }

const handleDelete = id => {
  if (window.confirm('Are you sure you wish to delete this item?')){
  const url = `https://young-plateau-51536.herokuapp.com/remove/${id}`;
  fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'}
  })
      .then(res => res.json())
      .then(data=> {
          console.log(data)
          const remaining = order.filter(order => order._id !== id)
          setOrder(remaining)
      })
  
}
}

  useEffect(() => {
    fetch(`https://young-plateau-51536.herokuapp.com/myOrder/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [user?.email]);

  return (
    <div>
      <h1>signed in as {user?.displayName}</h1>
      <h1>MyBookings: {order?.length}</h1>
      <div className="order">
      <div className="row container">
          {order?.map((pd, index) => (
            <div className="col-md-6 col-lg-4">
              <div className="service p-3 border border m-2">
                <div className="service-img">
                  <img className="w-50" src={pd?.image} alt="" />
                </div>
                <h1>{pd.name}</h1>
                <p>{pd.description}</p>
                <p>price: ${pd.price}</p>
                <p>status: {pd.status}</p>
                {/* <Link to={`/order/${pd._id}`}>
                  {" "}
                  <button className="btn btn-success">Order Now</button>
                </Link> */}
                {/* <button
                    onClick={() => handleDelete(pd._id)}
                 className="btn btn-danger">Cancel this order</button> */}
                 <button onClick={() => handleDelete(pd._id)} 
                 className="btn btn-danger">Cancel this order</button>
              </div>
            </div>
          ))}
        </div>
        
      </div>
      
    </div>
  );
};

export default MyBookings;
