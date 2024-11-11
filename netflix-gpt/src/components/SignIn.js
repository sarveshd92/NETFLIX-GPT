import React, { useState, useEffect } from 'react';
import Header from './Header';
import { validate } from '../Utils/validate';

const SignIn = () => {
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [IsSignIn, setIsSignIn] = useState(true);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'UserName') {
      setUserName(value);
    }
    if (name === 'Password') {
      setPassword(value);
    }
  };

  const handleclick = (e) => {
    e.preventDefault();
    const validationMessage = validate(UserName, Password);
    setMessage(validationMessage);
  };

  const HandleSignIn = (e) => {
    e.preventDefault();

    setIsSignIn(!IsSignIn);
  };

  useEffect(() => {
    console.log("useEffect: " + UserName + " " + Password);
  }, [UserName, Password]);

  return (
    <div className="relative h-screen w-full bg-black">
      <Header />
      
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_large.jpg"
        alt="Netflix background"
      />

      <form
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md px-6 py-8 bg-black bg-opacity-75 rounded-lg border border-gray-700 shadow-xl"
      >
        <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-4 text-center">
          {IsSignIn ? "Sign In" : "Sign Up"}
        </h1>

        <input
          className="w-full px-4 py-3 mb-4 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
          type="text"
          name="UserName"
          placeholder="Email"
          value={UserName}
          onChange={handleChange}
        />
        <input
          className="w-full px-4 py-3 mb-4 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
          type="password"
          name="Password"
          placeholder="Password"
          value={Password}
          onChange={handleChange}
        />
        {!IsSignIn && (
          <input
            className="w-full px-4 py-3 mb-4 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            type="password"
            name="ConfirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
          />
        )}

        {/* Error Message */}
        {message && (
          <p className="text-red-600 font-semibold text-center mb-4">{message}</p>
        )}

        <button
          className="w-full py-3 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
          type="submit"
          onClick={handleclick}
        >
          {IsSignIn ? "Sign In" : "Sign Up"}
        </button>

        <div className="mt-4 text-center text-white">
          {IsSignIn ? (
            <span>
              New to Netflix?{' '}
              <button
                className="text-yellow-500 hover:underline"
                onClick={HandleSignIn}
              >
                Sign Up Now
              </button>
            </span>
          ) : (
            <span>
              Already have an account?{' '}
              <button
                className="text-yellow-500 hover:underline"
                onClick={HandleSignIn}
              >
                Sign In Now
              </button>
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export default SignIn;
