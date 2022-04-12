import { Avatar } from '@mui/material'
import React from 'react'
import  './Right__bar.css';
import { useStateValue } from './StateProvider';

 const Right__bar = () => {
    const[{ user },dispatch]= useStateValue();
  return (
    <div className='Right__bar'>
        <div className="RightBar__top">
                <Avatar  src={user.photoURL} className='userPic' />
                <div className="Usernames">
                    <h4>{user.displayName}</h4>
                    <p className='fname'>{user.displayName}</p>
                </div>
                <p className='switch'>Switch</p>
        </div>
        <div className="Rightbar__middle">
                <div className="middle__header">
                    <h4>Suggestions For You</h4>
                    <p>See All</p>
                </div>
                <div className="middle__body">

                <div className="users">
                        <Avatar className='usersPic' />
                        <div className="Usernames">
                            <h5>User 01</h5>
                            <p className='discription'>New to Instagram</p>
                        </div>
                        <p className='fullow'>Fullow</p>
                 </div>
                <div className="users">
                        <Avatar className='usersPic' />
                        <div className="Usernames">
                            <h5>User 02</h5>
                            <p className='discription'>New to Instagram</p>
                        </div>
                        <p className='fullow'>Fullow</p>
                 </div>
                <div className="users">
                        <Avatar className='usersPic' />
                        <div className="Usernames">
                            <h5>User 03</h5>
                            <p className='discription'>New to Instagram</p>
                        </div>
                        <p className='fullow'>Fullow</p>
                 </div>
                <div className="users">
                        <Avatar className='usersPic' />
                        <div className="Usernames">
                            <h5>User 04</h5>
                            <p className='discription'>New to Instagram</p>
                        </div>
                        <p className='fullow'>Fullow</p>
                 </div>
                <div className="users">
                        <Avatar className='usersPic' />
                        <div className="Usernames">
                            <h5>User 05</h5>
                            <p className='discription'>New to Instagram</p>
                        </div>
                        <p className='fullow'>Fullow</p>
                 </div>


                </div>
        </div>
        <div className="Rightbar__bottom">
       <p>About Help Press API Jobs Privacy Terms Locations Top Accounts Hashtags Language</p> 
       <h5>© 2022 INSTAGRAM FROM SLProgrammer</h5>
        </div>
    </div>
  )
}
export default Right__bar;
