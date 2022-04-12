import { Google } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';
import './Login.css';
import { GoogleAuthProvider,signInWithPopup,getAuth } from "firebase/auth";
import { useStateValue } from './StateProvider';
import { actionTypes } from './Reducer';

function Login() {
  // This code here send data to state
    const [state,dispatch] = useStateValue();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const SignIn =()=>{
        signInWithPopup(auth, provider)
          .then((result) => {
          
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
        
                dispatch({
                  type: actionTypes.SET_USER,
                  user: result.user,//this here return authentication data
                
                });

          }).catch((error) => alert(error.message));
    };

  return (
    <div className='login'>
        <div className="log">

<img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="Instagram" />
<img className='img' src="https://www.logo.wine/a/logo/Instagram/Instagram-Logo.wine.svg" alt="" />
        <Button onClick={SignIn} className='button'> <i><Google /></i><p> Login With Google</p></Button>
        </div>
    </div>
  )
}

export default Login