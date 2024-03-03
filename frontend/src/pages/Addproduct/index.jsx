import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    color: '',
    size: '',
    price: '',
    pincodeAvailability: '',
    images: [],
  });

  useEffect(() => {
    if(Cookies.get('token')){
      handleSubmit()
    }else{
      navigate('/login')
    }
  }, [])
  
const navigate = useNavigate()
  const handleChange = (e) => {
    if (e.target.name === 'images') {
      setFormData({ ...formData, images: [...e.target.files] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      if (Array.isArray(formData[key])) {
        formData[key].forEach((file) => formDataToSend.append(key, file));
      } else {
        formDataToSend.append(key, formData[key]);
      }
    }

    try {
      const response = await fetch('http://localhost:3000/api/product/newproducts', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        console.log('Product added successfully');
        navigate("/")
        // Optionally, redirect or perform other actions after successful submission
      } else {
        console.error('Error adding product:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <section className="bg-gray-50 w-screen h-screen dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-10 mx-auto md:h-screen lg:py-0">
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto flex flex-col space-y-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-48">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Name..."
                required
              />
            </div>
            <div className="w-full md:w-48">
              <label htmlFor="slug" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Slug
              </label>
              <input
                type="text"
                id="slug"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Slug..."
                required
              />
            </div>
            <div className="w-full md:w-48">
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                description
              </label>
              <input
                type="text"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="description..."
                required
              />
            </div>
            <div className="w-full md:w-48">
              <label htmlFor="color" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                color
              </label>
              <input
                type="text"
                id="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="color..."
                required
              />
            </div>
            <div className="w-full md:w-48">
              <label htmlFor="size" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                size
              </label>
              <input
                type="text"
                id="size"
                name="size"
                value={formData.size}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="size..."
                required
              />
            </div>
            <div className="w-full md:w-48">
              <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                price
              </label>
              <input
                type="text"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="price..."
                required
              />
            </div>
            <div className="w-full md:w-48">
              <label htmlFor="pincodeAvailability" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                pincodeAvailability
              </label>
              <input
                type="text"
                id="pincodeAvailability"
                name="pincodeAvailability"
                value={formData.pincodeAvailability}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="pincodeAvailability..."
                required
              />
            </div>
          </div>
          {/* Add other input fields here */}
          <div className="w-full">
            <label htmlFor="images" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Images
            </label>
            <input
              type="file"
              id="images"
              name="images"
              onChange={handleChange}
              multiple
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddProduct;
