import React from 'react';

const Header = () => {
  return (
    <div className="absolute top-0 left-0 p-2 sm:p-4 bg-gradient-to-b  from-black z-20 w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6">
      <img 
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
        alt="Netflix logo" 
        className="w-full h-auto"
      />
    </div>
  );
}

export default Header;
