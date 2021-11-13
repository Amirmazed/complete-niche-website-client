import intializeFirebase from "./../Firebase/Firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { useEffect, useState } from "react";

intializeFirebase();

const useFirebase = () => {
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [user, setUser] = useState({});
  const [error, setError] = useState("");


  const provider = new GoogleAuthProvider();

  const handleEmailChanged = (e) => {
    setEmail(e.target.value)
  }
  
    const handlePassChanged = (e) => {
    
    if( e.target.value < 6) {
      console.log("error 404")
    }else {
      setPass(e.target.value)
    }
   
  }

  const handleLogin = (e) => {
    const auth = getAuth();
   
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, pass)
    .then((result) => {
      const {email} = result.user;
  
      const userInfo = {
        email: email,
      };
      setUser(userInfo);
      setUser("");
      window.location.reload(false)
    })
    .catch((error) => {
      setError(error.message);
    });

    
  
  };


  const handleGoogleLogin = () => {
    setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                hanldeUserInfoRegister(result.user.email)
            })
            .finally(() => setIsLoading(false));
  };

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setUser(user);
  //       const uid = user.uid;
  //     } else {
  //       // User is signed out
  //       // ...
  //     }
  //   });
  // }, []);

  //Maz

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, user => {
        if (user) {
            setUser(user);
        }
        else {
            setUser({})
        }
        setIsLoading(false);
    });
    return () => unsubscribed;
}, [])

  const handleLogout = () => {
    setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
  };

  const handleUserRegister = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        hanldeUserInfoRegister(result.user.email);
      })
      .catch((error) => {
        const errorMessage = error.message;
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

  // const handleUserLogin = (email, password) => {
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((result) => {
  //       console.log(result.user);
  //     })
  //     .catch((error) => {
  //       const errorMessage = error.message;
  //     });
  // };

  return {
    handleGoogleLogin,
    user,
    isLoading,
    handleEmailChanged,
    handlePassChanged,
    error,
    handleLogin,
    handleLogout,
    handleUserRegister,
  };
};

export default useFirebase;
