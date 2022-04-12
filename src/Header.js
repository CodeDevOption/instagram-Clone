import { AddBoxOutlined, ExploreOutlined, FavoriteBorder, Home,  Login,  MessageOutlined, Search } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react';
import './Header.css';
import {getAuth , GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { useStateValue } from './StateProvider';
import InputBox from './messege';


function Header() {
  const[{ user },dispatch]= useStateValue();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
function login(e){
  e.preventDefault();
    signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    module.export = user ;
    // console.log(user);

    // ...
  }).catch((error) => {
          alert(error);
  });
}
  return (
    <div className='header'>
        <div className="header__left">
            <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="Instergram_Logo" />
        </div>
        <div className="header__search">
            <div className="header__input">
              <Search className='searchicon'  />
                <input type="text" placeholder='Search' />
            </div>
        </div>
        <div className="header__option">
                
           <Home />
           <MessageOutlined />
           {/* <AddBoxOutlined /> */}
           <InputBox />
           <ExploreOutlined />
           <FavoriteBorder />
           <Avatar src={user.photoURL} className='user__Avartar' />
       
           
           

         </div>
    </div>
  )
}

export default Header