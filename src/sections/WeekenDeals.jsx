import React from 'react';
import Header from '../utils/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Rating from 'react-rating';
import { GoStarFill } from 'react-icons/go';
import WeekenProduct from '../utils/WeekenProduct';

const WeekenDeals = () => {

    const dealsProducts = [
        {
            id: 1,
            productImage: "/public/images/week-deals-product/computer-specker.jpg",
            productTitle: "Basics USB Plug-n-Play Computer Speakers for PC",
            rating: "4",
            newPrice: "$456",
            oldPrice: "$875",
            discount:"14%"
        },
        {
            id: 2,
            productImage: "/public/images/week-deals-product/gaming.jpg",
            productTitle: "Basics USB Plug-n-Play Computer Speakers for PC",
            rating: "4",
            newPrice: "$456",
            oldPrice: "$875",
              discount:"24%"
        },
        {
            id: 3,
            productImage: "/public/images/week-deals-product/headphone.jpg",
            productTitle: "Basics USB Plug-n-Play Computer Speakers for PC",
            rating: "4",
            newPrice: "$456",
            oldPrice: "$875",
              discount:"34%"
        },
        {
            id: 4,
            productImage: "/public/images/week-deals-product/wireless-headset.jpg",
            productTitle: "Basics USB Plug-n-Play Computer Speakers for PC",
            rating: "4",
            newPrice: "$456",
            oldPrice: "$875"
        },
        {
            id: 5,
            productImage: "/public/images/week-deals-product/gaming.jpg",
            productTitle: "Basics USB Plug-n-Play Computer Speakers for PC",
            rating: "4",
            newPrice: "$456",
            oldPrice: "$875"
        },
        {
            id: 6,
            productImage: "/public/images/week-deals-product/computer-specker.jpg",
            productTitle: "Basics USB Plug-n-Play Computer Speakers for PC",
            rating: "4",
            newPrice: "$456",
            oldPrice: "$875"
        }

    ]

    return (
        <section className="">
            <div className="container mx-auto ">
                <div className="mobile-padding  relative group">
                    {/* header start... */}
                    <Header
                        headingText={"deals of the week"}
                    />
                    {/* header end... */}
                    {/* swiper start.... */}
                    {/* navigation start... */}
                    <span className="deal-prev-btn swiper-left">  <IoIosArrowBack /></span>
                    <span className="deal-next-btn swiper-right"> <IoIosArrowForward /></span>
                    {/* navigation end... */}
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        speed={1000}
                        navigation={{
                            prevEl: ".deal-prev-btn",
                            nextEl: ".deal-next-btn"
                        }}
                       breakpoints={{
                        0:{slidesPerView:1,spaceBetween:10 },
                         320:{slidesPerView:1 ,spaceBetween:10 },
                          480:{slidesPerView:1 ,spaceBetween:10 },
                          1024:{slidesPerView:3 ,spaceBetween:30 }
                       }}
                    >
                        {dealsProducts.map((product) => (
                            <SwiperSlide key={product.id} >
                              <WeekenProduct product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* swiper end.... */}
                </div>

            </div>
        </section>
    );
};

export default WeekenDeals;