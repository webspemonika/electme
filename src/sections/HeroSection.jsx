import React from 'react';
import ShopNowBtn from '../utils/ShopNowBtn';
import Shop from '../utils/Shop';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import BannerProductLayout from '../components/BannerProductLayout';
import BannerSwiperLayout from '../components/BannerSwiperLayout';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { IoArrowBackSharp, IoArrowForwardSharp } from 'react-icons/io5';

const HeroSection = () => {

    const bannerProductsInfo = [
        {
            id: 1,
            image:"/public/bg-images/banner-bg/swiper-banner-1.png",
            brandingText: "hurry limited time offer only",
            productHeading: "get your beat samsung",
            productName:"radiant 360",
            currentPrice:"new price : $399 ",
            oldPrice:"old price :$499 "

        },
             {
            id: 2,
            image:"/public/bg-images/banner-bg/swiper-banner-2.png",
            brandingText: "limited time offer",
            productHeading: "shop and save big on hottest",
            productName:"tablets",
            currentPrice:"new price : $399",
            oldPrice:"old price : $399"

        },
             {
            id: 3,
            image:"/public/bg-images/banner-bg/swiper-banner-5.png",
            brandingText: "limited week deal",
            productHeading: "fresh honor9 32GB unlocked ",
            productName:"quancode",
            currentPrice:"new price : $399",
            oldPrice:"old price :$499"

        }
        , 
        
             {
            id: 3,
            image:"/public/bg-images/banner-bg/swiper-banner-4.png",
            brandingText: "limited week deal",
            productHeading: "fresh honor9 32GB unlocked ",
            productName:"quancode",
            currentPrice:"new price : $399",
            oldPrice:"old price :$499"

        }
        ,    
    ]
    return (
        <section id="hero-section" className="py-5 ">
            <div className="container mx-auto">
                <div className="mobile-padding grid grid-cols-1 lg:grid-cols-7 gap-2 lg:gap-5 ">
                    {/* left-content-start... */}
                    <div className="lg:col-span-4 h-full relative group ">
                        {/* navigation btn start...*/}
                        <button className="prev-btn  swiper-left"> <IoArrowBackSharp /> </button>
                        <button className="next-btn swiper-right "> <IoArrowForwardSharp />  </button>
                        {/* navigation btn end...*/}
                        <Swiper
                        modules={[Pagination,Navigation,Autoplay]}
                        pagination={{clickable:true}}
                        navigation={{
                            prevEl:".prev-btn",
                            nextEl:".next-btn"
                        }}
                        loop={true}
                        speed={1000}
                        autoplay={{
                            delay:5000,
                            disableOnInteraction:false
                        }}

                        >

                            {bannerProductsInfo?.map((product) => (
                                <SwiperSlide key={product.id}>
                                    <BannerSwiperLayout product={product} />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>
                    {/* left-content-end... */}
                    {/* right-content-start... */}
                    <div className="lg:col-span-3 space-y-2 lg:space-y-5">
                        <div className="grid grid-cols-2  gap-2 lg:gap-5">

                            <BannerProductLayout
                                image={"/public/bg-images/banner-bg/hero-watch-banner.jpg"}
                            />
                            <BannerProductLayout
                                image={"/public/bg-images/banner-bg/hero-specker-banner.jpg"}
                            />
                        </div>


                        <BannerProductLayout
                            image={"/public/bg-images/banner-bg/hero-laptop-banner-bg.jpg"}
                        />


                    </div>
                    {/* right-content-end */}

                </div>
            </div>
        </section>
    );
};

export default HeroSection;