// import React from "react";
// import Menubar from "../Menubar/Menubar";
// import "./Banner.css";

// const Banner = () => {
//   return (
//     <div>
//       <div className="banners">
//         <Menubar></Menubar>
//         <div className=" banner row justify-content-center align-items-center">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-10">
//                 <h1 className="banner-title">Take care of your Health Now !</h1>
//                 <h3 className="sub-title">Sale up to 30% all products</h3>
//                 <button className="banner-btn">shop now</button>
//               </div>
//               <div className="col-md-2"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;



import React from 'react';
import { Carousel } from 'react-bootstrap';
// import banner1 from '../../../images/banner/download1.jpeg';
// import banner2 from '../../../images/banner/download2.jpg';
// import banner3 from '../../../images/banner/download3jpg.jpg';

//
// https://i.ibb.co/c1VWFpF/Banner1.jpg
// https://i.ibb.co/cYmhMyF/Banner2.jpg
// https://i.ibb.co/qF87RJd/Banner3.jpg
// https://i.ibb.co/q0nXwNC/Banner4.jpg

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/cggKcjk/banner4.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    <p>Whether you're looking for sleek AirPods or big over-ear models, these are the best headphones and earbuds we've tested, with advice for finding just the right pair for you.</p>
                    <small>The very best headphones around this year, featuring wired and wireless, and for every price and preference</small>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/Br6tfss/banner2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                     
                    <p>Whether you're looking for sleek AirPods or big over-ear models, these are the best headphones and earbuds we've tested, with advice for finding just the right pair for you.</p>
                    <small>The very best headphones around this year, featuring wired and wireless, and for every price and preference</small>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/74ns5qr/banner3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    <p>Whether you're looking for sleek AirPods or big over-ear models, these are the best headphones and earbuds we've tested, with advice for finding just the right pair for you.</p>
                    <small>The very best headphones around this year, featuring wired and wireless, and for every price and preference</small>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;




// https://i.ibb.co/gtkpBwr/banner1.jpg
// https://i.ibb.co/Br6tfss/banner2.jpg
// https://i.ibb.co/74ns5qr/banner3.jpg