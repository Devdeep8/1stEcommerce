import React, { useState, useEffect } from "react";
import { Img } from "components";
import { Link } from "react-router-dom";
import CartNavbar from "components/CartNavbar";
import { Button } from "components";


const Table = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);



  useEffect(() => {
    // Fetch data from your backend API
    fetch("http://localhost:3000/api/product/allproducts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        // console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []); // Empty dependency array ensures useEffect runs only once on component mount
 
  const handleAddToCart = (product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.slug === product.slug);
  
    if (existingItemIndex >= 0) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity++;
      setCartItems(updatedCartItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); // Store updated cart items in localStorage
      console.log(updatedCartItems);
    } else {
      const newCartItems = [...cartItems, { ...product, quantity: 1 }];
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems)); // Store new cart items in localStorage
      console.log(newCartItems);
    }
  };
  
  

  return (
    <>
    <CartNavbar className="bg-white-A700 flex items-center justify-center  pl-[75px] py-[35px] w-full"  />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto grid grid-cols-4 gap-4  ">
          {products.map((product) => (
            <div key={product.slug} className="">
              <div className="lg:w-1/4 md:w-1/2 p-8 w-full">
                <Link
                  to={`/table/${product.slug}`}
                  className="block relative h-48 rounded overflow-hidden"
                >
                  <Img
                    alt="ecommerce"
                    className="object-contain w-full h-full object-center block"
                    src={`/uploads/product/${product.images[0]}`}
                  />
                </Link>
                <div className="mt-4 text-center">
                  
                  <h2 className="text-gray-900 title-font text-lg font-medium">

                  </h2>
                  <p className="mt-1 text-2xl ">₹{product.price}</p>
                  <Button className="border-2 my-2 hover:scale-110 shadow-xl transition font-semibold ease-in-out hover:bg-transparent bg-purple-400  border-bluegray-900 border-solid rounded cursor-pointer leading-[normal] px-2 py-2 text-bluegray-900 text-center text-xl tracking-[-0.50px]" onClick={() => handleAddToCart(product)}>  Add to Cart </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Table;
