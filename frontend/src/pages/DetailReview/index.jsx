import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Img, Text } from "components";
import CartNavbar from "components/CartNavbar";

const DetailReviewPage = () => {
  const navigate = useNavigate();
  const slug = useParams();

  const [product, setProduct] = useState({ images: [] }); // Provide a default empty array for product.images

  useEffect(async () => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/product/allproducts/${slug.slug}`
        );
        const data = await response.json();
        if (data && data.length > 0) {
          setProduct(data[0]);
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
    await fetchData();
  }, [slug.slug]);

  return (
    <>
      <CartNavbar className="bg-white-A700 flex items-center justify-center  pl-[75px] py-[35px] w-full"/>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-row items-center justify-center">
            <Img
              alt="ecommerce"
              className="lg:w-1/2 w-[50%] lg:h-auto h-64 object-contain object-center rounded"
              src={`/uploads/product/${product.images[0]}`}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                The Catcher in the Rye
              </h1>
              <div className="flex mb-4">{/* Review stars and icons */}</div>

              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  {/* Color buttons */}
                  <span className="mr-3">Color</span>

                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button
                    className={`border-2 border-gray-300 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none`}
                  ></button>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>{product.size}</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${product.price}
                </span>
                <button className="flex ml-auto text-pink-500 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Button
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <p className="leading-relaxed">{product.description}</p>
          <div className="flex my-10 ">
            {product.images.map((image, index) => (
              <div key={index} className=" px-5 w-fit object-contain ">
                <Img
                  src={`/uploads/product/${image}`}
                  className=" md:flex-none lg:w-1/2 cursor-pointer w-[550px] lg:h-auto h-64 object-contain object-center rounded md:h-[150px] sm:h-auto max-h-[150px] "
                  alt={`image-${index}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailReviewPage;
