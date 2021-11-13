import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hook/useAuth";
import useFirebase from "./../../Hook/useFirebase";

const Review = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const { user } = useAuth();
  console.log(user)
  const onSubmit = (data) => {
    fetch("https://young-plateau-51536.herokuapp.com/addSReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));

    console.log(data);
    alert("review posted")
  };
  return (
    <div>
      <h1>Review</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          name="email"
          value={user?.email}
          type="email"
          {...register("email", { required: true })}
        />
        <br />
        <input
          className="input-field"
          name="comments"
          placeholder="Comments"
          {...register("comments", { required: true })}
        />
        <br />

        <input
          className="submit-btn btn btn-danger mt-3"
          type="submit"
          value="Register"
        />
      </form>
    </div>
  );
};

export default Review;
