import React from 'react';
import Header from './Header';

const SignIn = () => {
  return (
    <div>
      <Header />
      
      <div className="h-screen w-full relative">
        <img 
          className="absolute h-full w-full object-cover" 
          src="https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_large.jpg" 
          alt="Netflix background"
        />
        
        <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center h-9/12 w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/3 bg-black bg-opacity-80 border-2 px-6 py-8 space-y-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">Sign In</h1>
          
          <input 
            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600" 
            type="text" 
            placeholder="Email" 
          />
          <input 
            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600" 
            type="password" 
            placeholder="Password" 
          />
          <button 
            className="w-full py-2 text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600" 
            type="submit"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
