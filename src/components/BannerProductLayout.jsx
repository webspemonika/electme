import React from 'react';
import Shop from '../utils/Shop';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

const BannerProductLayout = ({image,imageClassName,}) => {
    return (
        <div className=" w-full overflow-hidden relative">
            {/* Image - শুধু এটাই scale হবে */}
            <img
                src={image}
                alt=""
                className='w-full lg:h-58.75 object-cover  cursor-pointer hover:scale-110 transition-transform duration-1500 rounded-lg'
            />
            {/* object-cover object-top */}

            {/* Text content - এটা scale হবে না */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 px-5">
                <p className="product-branding-text-two  text-sm lg:text-lg">tranding </p>
                <p className="product-branding-text-two  text-sm lg:text-lg">i watch s7</p>
                <p className="price-text text-[15px] capitalize mt-1  ">start from</p>
                <p className="price-text-two mb-2">$499 </p>
                <Shop
                    text={"shop now"}
                    route={"/"}
                    icon={<MdKeyboardDoubleArrowRight />}
                />
            </div>
        </div>
    );
};

export default BannerProductLayout;