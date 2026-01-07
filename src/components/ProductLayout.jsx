import React, { useState } from 'react';
import { FaLayerGroup } from 'react-icons/fa';
import { GoHeart, GoStarFill } from 'react-icons/go';
import { LuEye } from 'react-icons/lu';
import Rating from 'react-rating';
import { Link } from 'react-router';

const ProductLayout = ({ product }) => {

    const [isHovered, setIsHovered] = useState(false);
    return (
        <div

            className="py-3.75 px-2.5  group/item  cursor-pointer relative overflow-hidden">
            {/* 1.product-image */}
            <img
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                src={isHovered ? product.hoverProductImage : product.productDefaultImage}
                onError={(e) => {
                    e.target.src = '/images/category-products/placeholder.png';
                }}
                alt={product.productTitle}
                className="w-full h-auto transition-opacity duration-1000"
            />
            {/* 2.product title */}
            <Link
                to={""}
                className='text-15px-blue-medium py-2 capitalize inline-block '
            >
                {product.productTitle}
            </Link>
            {/*3. rating */}
            <Rating
                readonly
                initialRating={product.rating}
                emptySymbol={<GoStarFill className='text-base text-gray-400' />}
                fullSymbol={<GoStarFill className='text-base text-white-yellow-500' />}
            />
            {/*4. price */}
            <div className="mb-4">
                <span className="text-[20px] text-[#a90000] font-normal font-heebo leading-[150%]"> {product.oldPrice} </span>
                <span className="text-[20px] text-[#a90000] font-normal font-heebo leading-[150%] mb-5 "> {product.newPrice} </span>
            </div>
            {/* 5.btn */}
            <span
                className="
                          inline-block
                         px-4 py-3 lg:px-8 lg:py-3 rounded-md bg-yellow-400
                          
                          text-sm lg:text-[15px]  text-black font-medium font-heebo capitalize
                        
                          opacity-0 -translate-y-4
                          group-hover/item:opacity-100
                          group-hover/item:translate-y-0
                        hover:text-white
                        hover:bg-black-600
                          transition-all duration-500 ease-out delay-200

  "
            >
                Select Options
            </span>



            {/* 6.1heart ,compare, eye icons sir.......*/}
            {/* <div className="flex flex-col gap-1 absolute top-2 -right-10 group-hover/item:right-3 invisible group-hover/item:visible transition-all duration-500 opacity-0 group-hover/item:opacity-100">
                <span className="product-icon-layout"><GoHeart /></span>
                <span className="product-icon-layout"><FaLayerGroup /></span>
                <span className="product-icon-layout"><LuEye /></span>
            </div> */}
            {/* 6.2 heart ,compare, eye icons */}
            {/* <div className="absolute inset-0 bg-black/50
                            flex items-center justify-center gap-4
                            opacity-0 group-hover/item:opacity-100
                            transition-all duration-500">

                <span className="product-icon-layout hover:scale-110 transition">
                    <GoHeart />
                </span>

                <span className="product-icon-layout hover:scale-110 transition">
                    <FaLayerGroup />
                </span>

                <span className="product-icon-layout hover:scale-110 transition">
                    <LuEye />
                </span>
            </div> */}
            {/* 6.3 */}
            <div
                className="absolute top-3 right-3
                           flex flex-col gap-2
                           opacity-0 translate-x-5
                           group-hover/item:opacity-100
                           group-hover/item:translate-x-0
                           transition-all duration-500"
            >
                <span className="product-icon-layout delay-75">
                    <GoHeart />
                </span>

                <span className="product-icon-layout delay-150">
                    <FaLayerGroup />
                </span>

                <span className="product-icon-layout delay-300">
                    <LuEye />
                </span>
            </div>
            {/* 7.badge */}
            {product.sale && (
                <p className="product-badge-layout absolute top-3 left-3 ">{product.sale} </p>
            )}


        </div>
    );
};

export default ProductLayout;