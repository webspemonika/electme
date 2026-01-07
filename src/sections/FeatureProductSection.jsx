import React from 'react';
import Header from '../utils/Header';
import ProductLayout from '../components/ProductLayout';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation"
import { Navigation } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const FeatureProductSection = () => {

    const featureProducts = [
        {
            id: 1,
            productDefaultImage: "/images/feature-products/galaxy-watch.jpg",
            hoverProductImage: '/images/feature-products/hover-galaxy-watch.jpg',
            productTitle: "Galaxy Watch5 44mm Bluetooth Smart Watch",
            rating: "4",
            newPrice: '$155',
            // oldPrice:"$199",

        }, {
            id: 2,
            productDefaultImage: "/images/feature-products/miccro-bluetooth-specker.jpg",
            hoverProductImage: '/images/feature-products/hover-micro-bluethooth-specker.jpg',
            productTitle: "Bose Sound Link Micro Wireless Bluetooth Speaker",
            rating: "3.5",
            newPrice: '$125',
            // oldPrice:"$199",

        },
        {
            id: 3,
            productDefaultImage: "/images/feature-products/air-buds-bluethooth.jpg",
            hoverProductImage: '/images/feature-products/hover-air-buds-bluethooth.jpg',
            productTitle: "Bose Sound Link Micro Wireless Bluetooth Speaker",
            rating: "4.5",
            newPrice: '$155',
            // oldPrice:"$199",

        },
        {
            id: 4,
            productDefaultImage: "/images/feature-products/wireless-headphone.jpg",
            hoverProductImage: '/images/feature-products/hover-wireless-headphone.jpg',
            productTitle: "Bose Sound Link Micro Wireless Bluetooth Speaker",
            rating: "1.5",
            newPrice: '$155',
            // oldPrice:"$199",

        },
        {
            id: 5,
            productDefaultImage: "/images/feature-products/speacker.jpg",
            hoverProductImage: '/images/feature-products/hover-speacker.jpg',
            productTitle: "Bose Sound Link Micro Wireless Bluetooth Speaker",
            rating: "3",
            newPrice: '$155',
            // oldPrice:"$199",

        },
        {
            id: 6,
            productDefaultImage: "/images/feature-products/apple-iphone.jpg",
            hoverProductImage: '/images/feature-products/hover-apple-iphone.jpg',
            productTitle: "Bose Sound Link Micro Wireless Bluetooth Speaker",
            rating: "5",
            newPrice: '$155',
            // oldPrice:"$199",

        },
        {
            id: 7,
            productDefaultImage: "/images/feature-products/ipad.jpg",
            hoverProductImage: '/images/feature-products/hover-ipad.jpg',
            productTitle: "Bose Sound Link Micro Wireless Bluetooth Speaker",
            rating: "2",
            newPrice: '$155',
            // oldPrice:"$199",

        },
        {
            id: 8,
            productDefaultImage: "/images/feature-products/hear-buds.jpg",
            hoverProductImage: '/images/feature-products/hover-hear-buds.jpg',
            productTitle: "Bose Sound Link Micro Wireless Bluetooth Speaker",
            rating: "3",
            newPrice: '$155',
            // oldPrice:"$199",

        },
        {
            // error product..
            id: 9,
            productDefaultImage: "/images/feature-products/ipad.jp",
            hoverProductImage: '/images/feature-products/hover-ipad.pg',
            productTitle: "Bose Sound Link Micro Wireless Bluetooth Speaker",
            rating: "3.5",
            newPrice: '$155',
            // oldPrice:"$199",

        }

    ]
    return (
        <section className="py-5 lg:pt-10 lg:pb-0">
            <div className="container mx-auto">
                <div className="mobile-padding">
                    {/* header start.... */}
                    <Header
                        headingText={"featured product"}
                    />
                    {/* header end.... */}
                    {/* product layout start... */}
                    <div className="relative group">
                        {/* navigation start ... */}
                        <span className="prev-btn2 swiper-left"> <IoIosArrowBack/> </span>
                        <span className="next-btn2 swiper-right"> <IoIosArrowForward /> </span>
                        {/* navigation end... */}

                        <Swiper
                        slidesPerView={7}
                        spaceBetween={0}
                        modules={[Navigation]}
                        loop={true}
                        speed={1000}
                        navigation={{
                            prevEl:".prev-btn2",
                            nextEl:".next-btn2"
                        }}
                        breakpoints={{
                            0:{slidesPerView:2,spaceBetween:5},
                            340:{slidesPerView:2,spaceBetween:5},
                             480:{slidesPerView:3,spaceBetween:5},
                             1024:{slidesPerView:7,spaceBetween:5},
                            
                        }}
                      
                        >
                            {featureProducts.map((feature) => (
                                <SwiperSlide key={feature.id} >
                                    <ProductLayout product={feature} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    {/* product layout end... */}

                </div>
            </div>
        </section>
    );
};

export default FeatureProductSection;