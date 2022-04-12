import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import db from './firebase';
import Right__bar from './Right__bar';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  // const collectionRef = collection
  const [{ user },dispatch]  = useStateValue();
  console.log(user);
  return (
    <div className='app'>
      {!user ? (<Login />):(
        <>
              {/* Header */}
      <Header />
      <div className="app__body">
        <Feed />
        <Right__bar />
      </div>
      {/* App__body */}
        {/* Feed */}
          {/* Status__bar */}
          {/* Right__bar */}
        </>


      )}


    </div>
  );
}

export default App;
