import React from 'react';
import { Link  , useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { Button } from 'components';
 
const Dropdown = () => {
  const navigate = useNavigate();
  const handleLogout = () =>{
    Cookies.remove('token');
    navigate("/login");
  }
  if(Cookies.get('token')){
    const token = Cookies.get('token');
    const decodedToken = jwtDecode(token);
    // console.log(decodedToken.userName, decodedToken);
    return (
      <>
          <div className="relative inline-block group">
      <div className="absolute hidden group-hover:block right-0 mt-8 w-48  bg-white rounded-lg shadow-xl">
        <p  className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
          {decodedToken.userName}
        </p>
        <p  className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
          {decodedToken.email}
        </p>
        <Button className="common-pointer bg-bluegray-900 border-2 border-bluegray-900 border-solid cursor-pointer font-medium leading-[normal] min-w-[218px] py-2 text-center text-xl text-yellow-100 tracking-[-0.50px]" onClick={handleLogout}>
        logout
      </Button>
      </div>
      <button className="flex items-center justify-center w-10 h-10 rounded-full text-gray-600 hover:bg-gray-300 focus:outline-none focus:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
          >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
        </svg>
      </button>
      
    </div>
      </>
    )
  }
  else{

    
    return (
      <div className="relative inline-block group">
      <div className="absolute hidden group-hover:block right-0 mt-8 w-48  bg-white rounded-lg shadow-xl">
        <Link to="/signup" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
          Sign Up
        </Link>
        <Link to="/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
          Login
        </Link>
      </div>
      <button className="flex items-center justify-center w-10 h-10 rounded-full text-gray-600 hover:bg-gray-300 focus:outline-none focus:bg-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
          >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
        </svg>
      </button>
    </div>
  );
}
};

export default Dropdown;
