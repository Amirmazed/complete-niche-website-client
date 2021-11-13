// import React from "react";
// import { useForm } from "react-hook-form";
// import useAuth from "../../Hook/useAuth";
// import useFirebase from "./../../Hook/useFirebase";

// const Register = () => {
//   const { googleSignIn, handleUserRegister } = useAuth();
//   const { register, handleSubmit, watch, errors } = useForm();

//   const onSubmit = (data) => {
//     handleUserRegister(data.email, data.password);
//     console.log(data);
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input
//           className="input-field"
//           name="email"
//           placeholder="Email"
//           type="email"
//           {...register("email", { required: true })}
//         />
//         <br />
//         <input
//           className="input-field"
//           name="password"
//           type="password"
//           placeholder="Password"
//           {...register("password", { required: true })}
//         />
//         <br />

//         <input
//           className="submit-btn btn btn-danger mt-3"
//           type="submit"
//           value="Register"
//         />
//       </form>
//     </div>
//   );
// };

// export default Register;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import useAuth from '../../hooks/useAuth';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, updateProfile } from "firebase/auth";
// import initializeAuthentication from '../LogIn/Firebase/Firebase.init';
import useAuth from '../../Hook/useAuth';
import intializeFirebase from '../../Firebase/Firebase.init';



// initializeAuthentication();
intializeFirebase()

//Amir 
const Register = () => {
    const {handleGoogleLogin} = useAuth();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("")
    const [error, setError] = useState("")
    const [pass, setPass] = useState("");
    const [user, setUser] = useState({});


    const auth = getAuth();
    const handleEmailChanged = (e) => {
        setEmail(e.target.value)
      }
    const handleNameChanged = (e) => {
      setName(e.target.value)
    }
    
      const handlePassChanged = (e) => {
        
        if( e.target.value < 6) {
          console.log("error 404")
        }else {
          setPass(e.target.value)
        }
       
      }


      const handleRegister = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, pass)
          .then((result) => {
            const {email} = result.user;
            const userInfo = {
              email: email,
            };
            setUser(userInfo)
            verifyEmail()
            setUserName();
            hanldeUserInfoRegister(result.user.email);
          })
          .catch((error) => {
            console.log(error.message);
          });
      };

      const hanldeUserInfoRegister = (email) => {
        fetch("https://young-plateau-51536.herokuapp.com/addUserInfo", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ email }),
        })
          .then((res) => res.json())
          .then((result) => console.log(result));
      };

    


      useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user);
          } else {
            setError("");
          }
        });
      }, []);

      const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
        .then(result => {
          console.log(result)
        })
      }

      const setUserName = () => {
        updateProfile(auth.currentUser, {displayName: name})
          .then(res=> {})
      }
    return (
        <div className="mt-5">
          <h1>Join us for free!!!</h1>

            {user.email?  <h2>The registered email is: {user.email}</h2>:
                    <h2>Register with a valid email</h2>}
      <div className="login">
        <div className="login-box">
        
          
          <form onSubmit={handleRegister}>
            <input type="text" onBlur={handleNameChanged} className="txt" placeholder="your name"/>
            <br />
            <input onChange={handleEmailChanged} type="email" name="email" placeholder="enter your email"/>
            <br />
       
            <input onChange={handlePassChanged} type="password" name="password" placeholder="enter your password"/>
            <br />
            <br />
            <input type="submit" className="submit" value="register"/>
          </form>
        </div>
      </div>

            





            {/* <form>
                <input type="email" name="" id=""  placeholder="your email"/>
                <br />

                <input type="password" name="" id=""  placeholder="your password"/>
                <br />

                <input type="submit" value="Submit"/>
                <br />
                <br />

            </form> */}
            <p>----------OR---------</p>
            {/* <button onClick={handleGoogleLogin} className="btn btn-warning">Google Sign up</button>
            <br /> */}
            
            <Link to="/login">
            <p>already got an account?</p>
            </Link>


        
        </div>
    );
};

export default Register;