import React from "react";
import { NavLink } from "react-router-dom";
import Images from "../data/Images";
const Leftnavbar = () => {
  const image = Images.insta;
  return (
    <>
     <div className="border-2 border-r-zinc-300-600 w-32 h-screen text-white fixed"> 
       rajveer choudhary 
      </div>
    </>
  );
};

export default Leftnavbar;
