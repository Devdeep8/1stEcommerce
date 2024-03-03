import React, { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Img } from 'components';
import { Button } from 'components';
import CartNavbar from 'components/CartNavbar';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []); //

  const removeFromCart = (slug) => {
    console.log("ID to remove:", slug);
    console.log("Cart item IDs:", cartItems.map(item => item.slug));
    
    const updatedCartItems = cartItems.filter((item) => item.slug !== slug);
    console.log("Updated cart items:", updatedCartItems);
    
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };
  
  
  

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };
  // Function to calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <>
    <CartNavbar className="bg-white-A700 flex items-center justify-center  pl-[75px] py-[35px] w-full"  />
    <div className="container mx-auto px-4">
    <h1 className="text-3xl font-bold my-4">Your Cart</h1>
    <div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
        ) : (
          <div>
          {cartItems.map((item) => (
            <div key={item.slug} className="flex items-center border-b border-gray-300 py-4">
              <Img src={`/uploads/product/${item.images[0]}`} className="w-20" />
              <div className="ml-4">
                <p className="text-lg font-semibold">{item.name} - ${item.price} - Quantity: {item.quantity}</p>
                <button onClick={() => removeFromCart(item.slug)}>Remove</button>           
              </div>
            </div>
          ))}
          <p className="mt-4 text-xl font-semibold">Total: ${calculateTotal()}</p>
          <div className="mt-4">
            <Button onClick={clearCart} className="mr-4 bg-red-500 hover:bg-red-600">
              Clear Cart
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600">
              <Link to="/checkout" className="text-white">c
                Checkout
              </Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  </div>
          </>

  );
};

export default CartPage;
