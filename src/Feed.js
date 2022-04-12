import React,{useState,useEffect} from 'react'
import Status__bar from './Status__bar'
import './Feed.css';
import Post from './Post';
import InputBox from './messege';
import db from './firebase';
import {onSnapshot,orderBy, query,collection} from 'firebase/firestore';
import { useStateValue } from './StateProvider';

function Feed() {
  const[{ user },dispatch]= useStateValue();
 const [post,setpost] = useState([]);
 const collectionRef = collection(db,'post');
 const q = query(collectionRef,orderBy('timestamp','desc'));

 useEffect(() => {
    onSnapshot(q,(snapshot) => {
    setpost(snapshot.docs.map(doc => ({id:doc.id, data:doc.data() }))); 
    });
 }, [])
 
  return (
    <div className='feed'>
        {/* Status__bar */}
        <Status__bar />
    
        {/* Post__bar */}
        {
     post.map((post)=>(
        <Post
        key={post.id}
        propic={post.data.userpropic}
        image={post.data.image}
        description={post.data.description}
        name={post.data.username}
        
        
        />
            
          ))}
        <Post />
        {/* Feed */}

    </div>
  )
}

export default Feed