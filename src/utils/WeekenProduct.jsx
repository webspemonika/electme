import React from 'react';
import { GoStarFill } from 'react-icons/go';
import Rating from 'react-rating';

const WeekenProduct = ({ product }) => {
    return (
        <div className=" grid grid-cols-4 items-center gap-7.25 relative 
         after-border ">
            <div className="col-span-2">
                <img
                    src={product.productImage}
                    alt={product.productTitle}
                    className="w-full h-auto object-auto"

                />
            </div>
            {/* product details start... */}
            <div className="col-span-2">
                {/* 1.product-title */}
                <p className="text-15px-blue-medium py-2 capitalize "> {product.productTitle} </p>
                {/* 2.rating */}
                <Rating
                    readonly
                    initialRating={product.rating}
                    emptySymbol={<GoStarFill className='text-base text-gray-400' />}
                    fullSymbol={<GoStarFill className='text-base text-white-yellow-500' />}
                />
                {/*3.price */}
                <div className="flex gap-1.5 items-center mb-3.75 ">
                    <span className=" text-xs lg:text-base text-[#6b8499] font-normal font-heebo line-through "> {product.oldPrice} </span>
                    <span className="text-sm lg:text-xl text-[#A90000] font-medium font-heebo leading-[150%] "> {product.newPrice} </span>
                </div>
                {/* 4.add to cart btn */}
                <button type='button' className="add-to-cart"> add to cart</button>
                {/* 5. discount-badge */}
              {product.discount && (
                <p className="product-discount-badge absolute top-3 left-3"> {product.discount} </p>
              )}
                {/* end-- */}
            </div>
            {/* product details end... */}
        </div>
    );
};

export default WeekenProduct;