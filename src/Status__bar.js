import { Avatar } from '@mui/material'
import React from 'react'
import './Status__bar.css';
import { useStateValue } from './StateProvider';
function Status__bar() {
       const[{ user },dispatch]= useStateValue();
  return (
    <div className='status__bar'>
      <div className="user_status">

      <div className="ustatus">
            <Avatar src={user.photoURL} className='status' />
      </div>
      <div className="ustatus">
            <Avatar className='status' />
      </div>
      <div className="ustatus">
            <Avatar className='status ' />
      </div>
      <div className="ustatus">
            <Avatar className='status hide' />
      </div>
      <div className="ustatus">
            <Avatar className='status hide' />
      </div>
      </div>
    </div>
  )
}

export default Status__bar