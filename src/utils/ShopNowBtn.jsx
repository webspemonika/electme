import React from 'react';
import { Link } from 'react-router';
// shop btn with bg
const ShopNowBtn = () => {
    return (
     <Link to={"/"} >
     <span className="text-xs lg:text-[15px] text-black-500 font-normal font-heebo leading-[130%] capitalize
     inline-block px-7 lg:px-14 py-3 rounded-md
     hover:bg-black-700 hover:text-white transition-all duration-300
     bg-white-yellow-500 "> shop now </span>
     </Link>
    );
};

export default ShopNowBtn;