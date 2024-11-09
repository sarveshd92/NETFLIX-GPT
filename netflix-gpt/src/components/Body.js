import React from 'react'

import SignIn from './SignIn.js'
import Browse from './Browse.js'
import Header from './Header.js';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

const Body = () => {
    const approuter=createBrowserRouter([
                {
                    path:"/",
                    element:<SignIn/>
                },
                {
                    path:"/browse",
                    element:<Browse/>,
                }
    ])
  return (
 <RouterProvider router={approuter}/>
  );
}

export default Body;