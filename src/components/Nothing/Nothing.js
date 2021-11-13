import React from 'react';
import { Link } from 'react-router-dom';


const Nothing = () => {
    return (
        <div className="nothing">
            <h2>Sorry, wrong number!!!</h2>
            <Link to="/home">Get me outta here</Link>
            
        </div>
    );
};

export default Nothing;