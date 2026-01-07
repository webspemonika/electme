import React from 'react';
import ShopNowBtn from '../utils/ShopNowBtn';

const BannerSwiperLayout = ({product}) => {
    return (
        <div className=" grid grid-cols-2 justify-between items-center gap-2 bg-[#f3f3f3] p-3 lg:p-0 lg:pl-10 rounded-lg h-[50%] lg:h-122.5 ">
            {/* product-details */}
            <div className=" w-full lg:w-[90%] ">
                <h6 className="product-branding-text mb-2 tracking-wider"> {product.brandingText} </h6>
                <p className="product-heading-text font-light  uppercase tracking-tighter line-clamp-2 lg:line-clamp-0"> {product.productHeading} </p>
                <p className="product-heading-text  font-medium uppercase  mt-2 "> {product.productName} </p>
                <p className="price-text capitalize tracking-widest mt-3 lg:mt-5 "> {product.currentPrice} </p>
                <p className="price-text capitalize tracking-widest line-through mb-3 lg:mb-5 "> {product.oldPrice} </p>
                <ShopNowBtn
                    route={"/shop"}
                />


            </div>
            {/* product-image */}
            <img
                src={product.image}
                alt="product-name"
                className=' w-full h-auto lg:h-113.75 object-cover '
            />
        </div>
    );
};

export default BannerSwiperLayout;