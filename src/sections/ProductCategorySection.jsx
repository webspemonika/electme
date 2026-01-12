import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Navigation } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Header from '../utils/Header';
const ProductCategorySection = () => {
    const categories = [
        {
            id: 1,
            categoryImage: "/images/category-products/cammer.jpg",
            productName: "cammara",
            productQuantity: "24",
        },
        {
            id: 2,
            categoryImage: "/images/category-products/hat.jpg",
            productName: "hat",
            productQuantity: "36",
        }
        ,
        {
            id: 3,
            categoryImage: "/images/category-products/soundbar.jpg",
            productName: "soundbar",
            productQuantity: "87",
        },
        {
            id: 4,
            categoryImage: "/images/category-products/printer.jpg",
            productName: "printer",
            productQuantity: "18",
        },
        {
            id: 5,
            categoryImage: "/images/category-products/refrigarator.jpg",
            productName: "refrigarator",
            productQuantity: "13",
        },
        {
            id: 6,
            categoryImage: "/images/category-products/watch.jpg",
            productName: "watch",
            productQuantity: "23",
        },
        {
            id: 7,
            categoryImage: "/images/category-products/headphone.jpg",
            productName: "headphone",
            productQuantity: "23",
        },
        {
            id: 8,
            categoryImage: "/images/category-products/digital-camara.jpg",
            productName: "digital camera",
            productQuantity: "123",
        },
        {
            id: 9,
            categoryImage: "/images/category-products/gaming.jpg",
            productName: "gaming",
            productQuantity: "123",
        },
        {
            id: 10,
            categoryImage: "/images/category-products/mouse.jpg",
            productName: "mouse",
            productQuantity: "123",
        },
        {
            id: 11,
            categoryImage: "/images/category-products/air-buds.jpg",
            productName: "air buds",
            productQuantity: "123",
        }, {
            id: 12,
            categoryImage: "/mages/category-products/air-buds.jpg",
            productName: "monika",
            productQuantity: "123",
        }
    ]
    return (
        <section className="bg-[#f2f2f2] py-10 ">
            <div className="container mx-auto  ">
                <div className="mobile-padding">
                   {/* header start... */}
                   <Header 
                   headingText={"product category"}
                   />
                   {/* header end... */}

                    {/* body start.... */}
                    <div className=" mt-10 relative group ">
                        <button className='prev-btn swiper-left '>   <IoIosArrowBack /> </button>
                        <button className='next-btn swiper-right '>  <IoIosArrowForward /> </button>

                        <Swiper
                            slidesPerView={8}
                            spaceBetween={20}
                            modules={[Navigation]}
                            navigation={{
                                prevEl: ".prev-btn",
                                nextEl: ".next-btn"
                            }}
                            speed={1000}
                            loop={true}
                        breakpoints={{
                                // Mobile (320px and up)
                                320: { slidesPerView: 1.5, spaceBetween: 10, },
                                // Small Mobile (480px and up)
                                480: { slidesPerView: 2.5, spaceBetween: 10, },
                                // Tablet Portrait (640px and up)
                                640: { slidesPerView: 4, spaceBetween: 10, },
                                // Tablet Landscape (768px and up)
                                768: { slidesPerView: 5, spaceBetween: 10, },
                                // Desktop (1024px and up)
                                1024: { slidesPerView: 6, spaceBetween: 20, },
                                // Large Desktop (1280px and up)
                                1280: { slidesPerView: 8, spaceBetween: 20, },
                            }}


                        >
                            {categories.map((category) => (
                                <SwiperSlide key={category.id}>
                                    <div className="bg-white py-2 lg:py-5 flex flex-col items-center gap-4 rounded-lg cursor-pointer group overflow-hidden">
                                        <img
                                            src={category.categoryImage}
                                            alt={category.categoryName}
                                            onError={(e) => {
                                                e.target.src = '/images/category-products/placeholder.png';
                                            }}
                                            className="size-[140px] object-cover hover:scale-120 transition-transform duration-1000 "
                                        />
                                        <p className="text-15px-semibold-black capitalize text-center"> {category.productName} ({category.productQuantity}) </p>
                                    </div>
                                </SwiperSlide>
                            ))}

                        </Swiper>
                    </div>
                    {/* body-end.. */}
                </div>
            </div>
        </section >
    );
};

export default ProductCategorySection;