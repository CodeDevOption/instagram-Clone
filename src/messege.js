import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {  AddBoxOutlined } from '@mui/icons-material';
import './message.css';
import { TextField } from '@mui/material';
import db from './firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useStateValue } from './StateProvider';
export default function InputBox() {

  const [open, setOpen] = React.useState(false);
  const[{ user },dispatch]= useStateValue();
  const collectionRef= collection(db,"post");
  const[image,setimage] = useState();
  const[desc,setdesc] = useState();
  const timestamp = serverTimestamp();
  console.log(image);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setdesc('');
    setimage('');
  };
  const addpost = ()=>{
      const data = {
        username:user.displayName,
        userpropic:user.photoURL,
        image:image,
        description:desc,
        timestamp,timestamp,
      };
      addDoc(collectionRef,data);
      setdesc('');
      setimage('');
      setOpen(false);

  }



  return (
   <dev className='input'>
     <div className="addbtn">

      <button className='btn' variant="outlined" onClick={handleClickOpen}>
      <AddBoxOutlined />
      </button>
     </div>
      <Dialog
        fullWidth="sm"
        maxWidth="sm"
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Add Post</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
           
          </DialogContentText> */}
        
          {/* <Box className='box'
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',
            }}
          > */}
          <div className='box' >
              

            {/* ========================================================================================= */}
     
            <TextField
            value={image}
            onChange={(e)=>  setimage(e.target.value)}
            className='url'
          id="standard-textarea"
          label="Image URL"
          placeholder="Enter Image URL"
          multiline
          variant="standard"
        />

            <TextField
            value={desc}
            onChange={(e)=> setdesc(e.target.value)}
           className='descrip'
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
        
        />


            {/* ========================================================================================= */}
            </div>
          {/* </Box> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button disabled={!image && !desc} onClick={addpost}>Add</Button>
        </DialogActions>
      </Dialog>
      </dev>
  );
}