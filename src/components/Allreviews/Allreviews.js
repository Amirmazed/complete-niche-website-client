import React, { useEffect, useState } from 'react';

const Allreviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("https://young-plateau-51536.herokuapp.com/allreviews")
        .then((res) => res.json())
        .then((data)=> setReviews(data))
    }, []);
    return (
        <div className="my-5">
            <h1>All Reviews</h1>
            <div className="reviews">
            <div className="row container-fluid">
            {reviews?.map((pd, index) => (
            <div className="col-md-6 col-lg-3">
              <div className="service p-3 border">               
                <p>user: {pd.email}</p>
                <p>review: "{pd.comments}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
        </div>
    );
};

export default Allreviews;