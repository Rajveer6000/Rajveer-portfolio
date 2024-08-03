import React from "react";
import { NavLink } from "react-router-dom";
import Images from "../data/Images";
const Navbar = () => {
  const image = Images.insta;
  return (
    <>
      <div className="z-0 mt-32 fixed ml-10 ">
        <div className="relative text-center flex justify-center rounded-xl  w-64  ">
          <img
            className="-mt-20 absolute h-40 bg-transparent border-4 border-white object-cover rounded-full "
            src="src\assets\rajveerphoto.jpg"
            alt="Rajveer Choudhary"
          />
          <div className=" pt-32 p-10 bg-gray-300 rounded-2xl " >
            <h2 className="text-xl font-semibold text-gray-800">Rajveer Choudhary</h2>
            <p className="text-gray-600">Full Stack Developer</p>
            <div className="text-left px-5" >
              <p className="text-gray-800">Contact Number</p>
              <p className="text-gray-800">+91 6000162193</p>
              <p className="text-gray-800">Contact Number</p>
              <p className="text-gray-800">+91 6000162193</p>
              <p className="text-gray-800">Contact Number</p>
              <p className="text-gray-800">+91 6000162193</p>
              <p className="text-gray-800">Contact Number</p>
              <p className="text-gray-800">+91 6000162193</p>
            </div>
            <button className="bg-gray-700 text-white py-2 px-4 rounded-xl mt-5 ">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
