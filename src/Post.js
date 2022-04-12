import {BookmarkBorderOutlined, ChatBubbleOutline, FavoriteBorder, LinearScale, NearMeOutlined, SentimentSatisfiedAlt } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React, { useEffect } from 'react';
import './Post.css';
import { useStateValue } from './StateProvider';
function Post({propic,image,description,name}) {
     const[{ user },dispatch]= useStateValue();
    useEffect(()=>{
        const user = require('./Header.js');

        console.log(user);
    },[]);
  return (
    <div className='post'>
        
        <div className="post__top">
            <div className="user__info">
            <Avatar src={propic} className='post__avatar' />
            <p>{name}</p>
            
            </div>
            <LinearScale  />
        </div>
            <img src={image} alt="" />
        <div className="post__bottom">
            <div className="post_dash">
                <div className="dash__icon">

                <FavoriteBorder  />
                <ChatBubbleOutline />
                <NearMeOutlined />
                </div>

                <BookmarkBorderOutlined />

            </div>
            <h4>1k likes</h4>
            <p> <span className='name'>{name}</span> {description}... <span className='more'>more</span> </p>
            <div className="disc">
                <p>View 1 comment</p>
                 <p>NOW</p>
            </div>
            
        </div>
        <div className="comment__input">
                <SentimentSatisfiedAlt className='icon' />
                <input type="text" placeholder='Add a comment...' />
            </div>
    </div>
  )
}

export default Post