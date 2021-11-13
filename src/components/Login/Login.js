import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import intializeFirebase from '../../Firebase/Firebase.init';
import useAuth from '../../Hook/useAuth';





intializeFirebase()
const LogIn = () => {
    const {handleGoogleLogin,  user, handleLogin, handleEmailChanged, handlePassChanged, error } = useAuth();

    const location = useLocation();
    const redirect_uri = location.state?.from || '/'
    const history = useHistory();

    const handleGoogleLogins = () => {
        handleGoogleLogin()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    

    
    return (
        <div id="logIn">
            <div>
            <h2>please login with your registered email</h2>
            

        
        <form onSubmit={handleLogin}>
        <input onChange={handleEmailChanged} type="email" name="email" placeholder="enter your email"/>
            <br />
            <br />
            <input onChange={handlePassChanged} type="password" name="password" placeholder="enter your password"/>
          
            <input type="submit" className="submit" value="login"/>
      </form>
      {/* <button onClick={() => window.location.reload(false)}>Please reload to log in properly</button> */}
      {
        error? <p className="text-danger">incorrect pass and email</p> : <p className="text-success">pass and email has to be matched</p>
      }

            <p>----------OR---------</p>
            {/* <button onClick={handleGoogleLogins} className="btn btn-warning">Google Sign in</button> */}
            <br />
            <Link to="/register">New here?</Link>
            </div>

            
        </div>
    );
};

export default LogIn;