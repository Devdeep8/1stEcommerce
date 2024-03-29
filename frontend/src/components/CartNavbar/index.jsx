import React from "react";
// import { magnifyingGlass } from "heroicons/24/outline";
import Dropdown from "components/dropdown";
import { Link } from "react-router-dom";

import { Img, SelectBox, Text } from "components";

const CartNavbar = props => {
  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row items-center justify-between w-full ">
          <div className="header-row ">
            <Link to={"/"}>
            <Img
              className="h-[30px] w-[90px]"
              src="images/img_car.svg"
              alt="car"
            />
            
            </Link>
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className=" flex ">
          <Link to={"/table"} className="mx-5">
         Table
          </Link>
          <Link to={"/addproduct"}>
         Add Product
          </Link>
        </div>

        </div>

        <div className="flex w-screen  ">
          <div className="flex w-full px-5">
            <input type="search" name="" id="" className="rounded-l-lg w-full  " />
            <button className=" p-2  bg-gray-201 rounded-r-lg ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>

            <Link to={"/cart"}>
          <button className=" px-5">
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
            </svg>
          </button>
            </Link>
          <Dropdown />
        </div>
      </header>
    </>
  );
};

CartNavbar.defaultProps = {};

export default CartNavbar;
