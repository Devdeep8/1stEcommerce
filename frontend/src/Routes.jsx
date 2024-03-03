import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const Wishlist = React.lazy(() => import("pages/Wishlist"));
const Checkout = React.lazy(() => import("pages/Checkout"));
const DetailReview = React.lazy(() => import("pages/DetailReview"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const Cart = React.lazy(() => import("pages/Cart"));
const Login = React.lazy(() => import("pages/Login"));
const SignUp = React.lazy(() => import("pages/SignUp"));
const Table = React.lazy(() => import("pages/Tablepage"));
const Addproduct = React.lazy(() => import("pages/Addproduct"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          
          <Route path="/Cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/table" element={<Table />} />
          <Route path="/table/:slug" element={<DetailReview />} />
          <Route path="/addproduct" element={<Addproduct />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
