import React from 'react';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { Link } from 'react-router';
// shop btn without bg
const Shop = ({route,text,icon}) => {
    return (
     <Link
      to={route}
      className='flex gap-1.5 items-center'
      >
     <span className="price-text text-[15px] capitalize"> {text} </span>
     <span className="h-4.5 w-4.5 bg-white-yellow-500 rounded-full inline-flex justify-center items-center   "> {icon} </span>
     </Link>
    );
};

export default Shop;