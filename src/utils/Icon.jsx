import React from 'react';
import { Link } from 'react-router';

const Icon = ({route,icon,showBadge =false ,badgeCount= 0,className}) => {
    return (
   <Link
    to={route}
   className={`${className} h-10.5 w-10.5 border border-white/30 rounded-full
    inline-flex justify-center items-center 
   relative 
   `}
   
   >
    <span className="text-2xl text-white"> {icon} </span>
    {showBadge || badgeCount > 0 &&(
        <span className="h-5 w-5 bg-orange-500 rounded-full inline-flex justify-center items-center text-white text-sm -top-2 -right-1 absolute"> {badgeCount} </span>
    )}
   </Link>
    );
};

export default Icon;