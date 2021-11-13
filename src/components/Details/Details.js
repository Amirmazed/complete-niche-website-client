import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useFirebase from "./../../Hook/useFirebase";
import useAuth from "../../Hook/useAuth";
import { Link } from "react-router-dom";
const Details = () => {
  const [service, setService] = useState({});
  // const { user } = useFirebase();
  const { user } = useAuth();
  const { serviceId } = useParams();
  console.log(serviceId);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.email = user?.email;
    data.status = "pending";
    fetch("https://young-plateau-51536.herokuapp.com/addOrders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
    alert("placed order successfully")
  };

  useEffect(() => {
    fetch(`https://young-plateau-51536.herokuapp.com/singleService/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div>
      <h4>logged in as: {user?.displayName}</h4>
      <h2>click three times on the Order now button</h2>
      <div className="details-container">
        <div className="row container">
          <div className="col-md-6">
            <img className="w-50" src={service.image} alt="" />
            <p>{service?.description}</p>
            <h1>{service?.name}</h1>
            <h1> {service?.price}</h1>
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit(onSubmit)}>
            {service.name && <input
                  {...register("name")}
                  placeholder="Name"
                  defaultValue={service?.name}
                  className="p-2 m-2 w-100 input-field"
                />}

                {
                  service.description && 
                  <input
                  {...register("description")}
                  placeholder="Description"
                  defaultValue={service?.description}
                  className="p-2 m-2 w-100 input-field"
                />
                }

                

                <input
                  {...register("image", { required: true })}
                  placeholder="Image Link"
                  defaultValue={service?.image}
                  className="p-2 m-2 w-100 input-field"
                />

                <input
                  {...register("price", { required: true })}
                  placeholder="Price"
                  defaultValue={service?.price}
                  type="number"
                  className="p-2 m-2 w-100 input-field"
                />

                {/* <select {...register("model")} className="p-2 m-2 w-100">
                  <option value="premium">premium</option>
                  <option value="classic">classic</option>
                  <option value="business">business</option>
                </select> */}
                <br />

              {errors.exampleRequired && <span>This field is required</span>}

              <input
                type="submit"
                value="Order now"
                className="btn btn-info w-50"
              />
            </form>
            
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Details;


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
// import { useForm } from "react-hook-form";

// const Details = () => {
//   const [service, setService] = useState({})
//   const {serviceId} = useParams();
//   // console.log(serviceId);

//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     // fetch("http://localhost:5000/addServices", {
//     //   method: "POST",
//     //   headers: { "content-type": "application/json" },
//     //   body: JSON.stringify(data),
//     // })
//     //   .then((res) => res.json())
//     //   .then((result) => console.log(result));
//     console.log(data);
//   };



//   useEffect(() => {
//     fetch(`http://localhost:5000/singleService/${serviceId}`)
//       .then((res) => res.json())
//       .then((data) => setService(data))
//   }, [])
  
//   return (
//     <div>
//       <h2>Please click on every input field before placing order</h2>
//       <div className="row container">
//         <div className="col-md-6">
//           <img className="w-50" src={service.image} alt=""/>
//           <p>{service?.description}</p>
//           <h1>details {service?.name}</h1>
//           <h1>details {service?.price}</h1>
//         </div>
//         <div className="col-md-6">
//         <form onSubmit={handleSubmit(onSubmit)}>
                // {service.name && <input
                //   {...register("name")}
                //   placeholder="Name"
                //   defaultValue={service?.name}
                //   className="p-2 m-2 w-100 input-field"
                // />}

                // {
                //   service.description && 
                //   <input
                //   {...register("description")}
                //   placeholder="Description"
                //   defaultValue={service?.description}
                //   className="p-2 m-2 w-100 input-field"
                // />
                // }

                

                // <input
                //   {...register("image", { required: true })}
                //   placeholder="Image Link"
                //   defaultValue={service?.image}
                //   className="p-2 m-2 w-100 input-field"
                // />

                // <input
                //   {...register("price", { required: true })}
                //   placeholder="Price"
                //   defaultValue={service?.price}
                //   type="number"
                //   className="p-2 m-2 w-100 input-field"
                // />

                // <select {...register("model")} className="p-2 m-2 w-100">
                //   <option value="premium">premium</option>
                //   <option value="classic">classic</option>
                //   <option value="business">business</option>
                // </select>
                // <br />

//                 {errors.exampleRequired && <span>This field is required</span>}

//                 <input
//                   type="submit"
//                   value="Order now"
//                   className="btn btn-info w-50"
//                 />
//               </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Details;