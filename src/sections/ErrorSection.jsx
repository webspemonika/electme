import React from 'react';
import { Link } from 'react-router';

const ErrorSection = () => {
    return (
       <section className="py-5">
        <div className="container mx-auto">
            <div className="mobile-padding  w-full lg:w-[50%] mx-auto flex flex-col items-center ">
                {/* 1.image */}
                <img src="/public/images/error-img.png" alt="error image" className="" />
                {/* 2.heading */}
                <p className="text-2xl lg:text-[40px] text-[#1a1a1a] font-medium font-heboo leading-[120%] capitalize  my-2 lg:mt-8 lg:mb-5 ">Oops! page not found</p>
                {/* 3.description */}
                <p className="text-xs lg:text-base text-[#808080] font-normal font-heebo leading-[150%] normal-case text-center mb-6  ">Ut  ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas sagittis tortor at metus mollis Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas sagittis tortor at metus mollis</p>
                {/* 4.retrun to home link*/}
                <Link to={"/"}
                className='lg:px-8 lg:py-3.5 px-6 py-2.5 inline-block  bg-white-yellow-500 hover:bg-black-600 rounded-full text-xs lg:text-base  hover:text-white text-black font-medium capitalize font-heebo leading-[140%]  '
                > return to home </Link>
                {/* end------ */}
            </div>
        </div>
       </section>
    );
};

export default ErrorSection;