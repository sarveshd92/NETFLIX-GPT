import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import appstore from '../Utils/appStore';
import {  signOut } from "firebase/auth";
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { removeuser } from '../Utils/userSlice';
const Header = () => {
  const user=useSelector((store)=>store.user);
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const HandleLogout=()=>{

const Issignout=signOut(auth).then(() => {
  // Sign-out successful.
  return true;
  
}).catch((error) => {
    console.log(error);
    return false;
});

if(Issignout){
  dispatch(removeuser());
navigate('/signin')
}
  }
  console.log("header->",user)
  return (
    <div className="w-screen  flex justify-between z-20 relative">
      <div className='p-2 sm:p-4 bg-gradient-to-b from-black w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6'>
        <img 
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
          alt="Netflix logo" 
          className="w-full h-auto"
        />
      </div>
      {user&&<div className='flex justify-end items-center'>
        <div className='overflow-hidden h-10 w-10 rounded-[50%]'>
          <img src='https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp' className='h-[100%] w-[100%]'></img>
        </div>
        <div className='p-2'>
          <button className="bg-red-600 text-white py-2 px-2 rounded-lg" onClick={HandleLogout}>Logout</button>
        </div>
      </div>
}
    </div>
  );
}

export default Header;
