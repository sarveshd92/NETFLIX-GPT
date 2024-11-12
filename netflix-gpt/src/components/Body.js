import React, { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import SignIn from './SignIn.js';
import Browse from './Browse.js';

import { createBrowserRouter, RouterProvider } from "react-router-dom";


const Body = () => {
  

  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <SignIn />
    },
    {
      path: "/browse",
      element: <Browse />,

    },{
      path:'/signin',
      element:<SignIn/>
    }
  ]);

  return (
    <RouterProvider router={approuter} />
  );
}

export default Body;
