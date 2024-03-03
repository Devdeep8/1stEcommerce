import React, { useState } from "react";
import { useNavigate , Link } from "react-router-dom";
import { Button } from "components";
// import { useHistory } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

  // const history = useHistory();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to the backend API 
      const response = await fetch("http://localhost:3000/api/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
     console.log(response);
     console.log(formData);
      if (!response.ok) {
        throw new Error('Failed to sign up');
      }

      // Handle success response from the server
      // history.push("/login");
      // Handle success response from the server
      console.log('User signed up successfully');
      navigate("/login");
      // Redirect to a success page or display a success message
     console.log('User signed up successfully');
      // Redirect to a success page or display a success message
    } catch (error) {
      // Handle error response from the server
     console.log("Error signing up");
      // Display an error message to the user
    }
  };

  return (
    <section className="bg-gray-50 w-screen h-screen dark:bg-gray-900">
      {/* <ToastContainer /> */}
      <div className="flex flex-col items-center justify-center px-6 py-10 mx-auto md:h-screen lg:py-0">
        <form className="max-w-sm mx-auto flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Name..."
              required
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="mobile" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Mobile
            </label>
            <input 
              type="tel"
              id="mobile"
              name="mobileNumber"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder=""
              required
              onChange={handleChange}
            />
          </div>
         
          <div className="mb-5">
            <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
               password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
              onChange={handleChange}
            />
          </div>
          <div className="flex items-start mb-5">
           
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register new account
          </button>
        
        </form>
        <Button className=" px-2 py-2">  Already have account ? <Link to={"/login"} className=" text-xl px-2 py-2 bg-slate-100 rounded-2xl" > Login </Link> </Button>
      </div>
    </section>
  );
};

export default SignUp;
